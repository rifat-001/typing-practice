const textElem = document.querySelector('.text');
const speed = document.querySelector('.speed');

import Keyboard from './keyboard.js';

async function getRandomText(url) {
	try {
		const response = await fetch('https://type.fit/api/quotes', {});
		var data = await response.json();
		// return data[0]['q'];
		return data;
	} catch {
		return [
			{
				text: 'Hello world',
			},
		];
	}
}

class Typing {
	constructor(_textList) {
		this.textListIdx = 0;
		this.textList = _textList;
		this.blockType = [
			'not-typed-yet',
			'correct',
			'wrong',
			'modified',
			'active',
		];

		//init key
		this.init();
	}

	init() {
		this.textPos = 0;

		this.text = this.textList[this.textListIdx].text;
		this.formatedText = this.text;

		textElem.innerHTML = this.formatedText;

		this.keyData = {};

		for (let pos = 0; pos < this.text.length; pos++) {
			this.keyData[pos] = {
				status: 0,
				modified: false,
			};
		}
		this.keyData[this.textPos].status = 4;
		this.startTime = undefined;
		this.generateFormatedText();
		this.updateUI();
	}

	updateWPM() {
		const span = new Date().getTime() - this.startTime;
		if (span == 0) return;
		let correntCharCount = 0;
		for (let pos in this.keyData) {
			correntCharCount += this.keyData[pos].status == 1;
		}
		let correctWordCount = correntCharCount / 5;
		let wpm = correctWordCount / (span / 60000);
		speed.innerText = Math.round(wpm);
	}

	generateFormatedText() {
		let formatedText = '';
		let block = '';
		for (let pos = 0; pos < this.text.length; pos++) {
			if (
				this.keyData[pos + 1] != undefined &&
				this.keyData[pos].status == this.keyData[pos + 1].status &&
				this.keyData[pos].modified == this.keyData[pos + 1].modified
			) {
				block += this.text[pos];
			} else {
				block += this.text[pos];

				formatedText += `<span class = "${
					this.blockType[this.keyData[pos].status]
				} ${this.keyData[pos].modified ? 'modified' : 'xx'}">${block}</span>`;
				block = '';
			}
		}

		this.formatedText = formatedText;
	}

	backSpaceHandler(e) {
		if (e.keyCode != 8) return;

		if (this.textPos == 0) return;
		this.keyData[this.textPos].status = 0;
		this.textPos--;

		this.keyData[this.textPos] = {
			status: 4,
			modified: true,
		};
		this.generateFormatedText();
		this.updateUI();
	}

	generalKeyHandler(key) {
		if (this.startTime == undefined) {
			this.startTime = new Date().getTime();
			this.ineterval = setInterval(this.updateWPM.bind(this), 1000);
		}

		if (this.textPos >= this.text.length) {
			return;
		}

		// if user presses the right key
		if (this.text[this.textPos] == key) {
			this.keyData[this.textPos].status = 1;
		}

		// if user pressed the wrong key
		else {
			this.keyData[this.textPos].status = 2;
		}
		this.textPos++;

		if (this.textPos == this.text.length) {
			this.textListIdx = (this.textListIdx + 1) % this.textList.length;
			clearInterval(this.ineterval);
			this.init();
		} else {
			this.keyData[this.textPos].status = 4;
		}
	}

	updateUI() {
		textElem.innerHTML = this.formatedText;
	}

	simulateKeyPress(_key) {
		if (_key == 'Backspace') {
			this.backSpaceHandler({ keyCode: 8 });
			return;
		}
		// console.log(_key);
		this.generalKeyHandler(_key);
		this.generateFormatedText();
		this.updateUI();
	}
	keyPressHandler(e) {
		this.simulateKeyPress(e.key);
	}
}

async function init() {
	//console.log(await getRandomText());
	const typingInstance = new Typing(await getRandomText());
	const keyboard = new Keyboard(
		typingInstance.simulateKeyPress.bind(typingInstance)
	);
	keyboard.showKeyBoard();
	document.addEventListener(
		'keydown',
		typingInstance.backSpaceHandler.bind(typingInstance)
	);

	document.addEventListener(
		'keypress',
		typingInstance.keyPressHandler.bind(typingInstance)
	);

	document.addEventListener('keydown', (e) => {
		keyboard.pressKey(e.key, e);
		if (e.key == 'Tab' || e.key == 'Alt') e.preventDefault();
	});

	document.addEventListener('keyup', (e) => {
		keyboard.unPressKey(e.key, e);
	});
}

init();
