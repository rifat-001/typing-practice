const textElem = document.querySelector('.text');
const speed = document.querySelector('.speed');

async function getRandomText(url) {
	const response = await fetch('https://type.fit/api/quotes', {});
	var data = await response.json();
	// return data[0]['q'];
	return data;
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

	// getWPMCalculator(delta) {
	// 	let timer = new Date().getTime();
	// 	let context = this;
	// 	return function () {
	// 		//console.log(new Date().getTime() - timer, delta);
	// 		if (new Date().getTime() - timer >= delta) {
	// 			context.calculateWPM();
	// 			timer = new Date().getTime();
	// 		}
	// 	};
	// }
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
			this.textListIdx++;
			clearInterval(this.ineterval);
			this.init();
		} else {
			this.keyData[this.textPos].status = 4;
		}
	}

	updateUI() {
		textElem.innerHTML = this.formatedText;
	}

	keyPressHandler(e) {
		this.generalKeyHandler(e.key);

		this.generateFormatedText();
		this.updateUI();
	}
}

async function init() {
	const typingInstance = new Typing(await getRandomText());

	document.addEventListener(
		'keydown',
		typingInstance.backSpaceHandler.bind(typingInstance)
	);

	document.addEventListener(
		'keypress',
		typingInstance.keyPressHandler.bind(typingInstance)
	);
}

init();
