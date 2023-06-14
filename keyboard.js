function buildElem(_tag, _classes = [], _attributes = []) {
	const elem = document.createElement(_tag);

	_attributes.forEach((_attribute) => {
		for (let key in _attribute) {
			elem.setAttribute(key, _attribute[key]);
		}
	});

	_classes.forEach((_className) => {
		elem.classList.add(_className);
	});

	return elem;
}

const defaultKeyBoardData = {
	rows: [
		{
			keys: [
				{ label: '`' },
				{ label: '1' },
				{ label: '2' },
				{ label: '3' },
				{ label: '4' },
				{ label: '5' },
				{ label: '6' },
				{ label: '7' },
				{ label: '8' },
				{ label: '9' },
				{ label: '0' },
				{ label: '-' },
				{ label: '=' },
				{ label: 'Backspace' },
			],
		},
		{
			keys: [
				{ label: 'Tab' },
				{ label: 'q' },
				{ label: 'w' },
				{ label: 'e' },
				{ label: 'r' },
				{ label: 't' },
				{ label: 'y' },
				{ label: 'u' },
				{ label: 'i' },
				{ label: 'o' },
				{ label: 'p' },
				{ label: '[' },
				{ label: ']' },
				{ label: '\\' },
			],
		},
		{
			keys: [
				{ label: 'Caps Lock' },
				{ label: 'a' },
				{ label: 's' },
				{ label: 'd' },
				{ label: 'f' },
				{ label: 'g' },
				{ label: 'h' },
				{ label: 'j' },
				{ label: 'k' },
				{ label: 'l' },
				{ label: ';' },
				{ label: "'" },
				{ label: 'Enter' },
			],
		},
		{
			keys: [
				{
					label: 'Shift',
					attributes: {
						location: 'left',
					},
				},
				{ label: 'z' },
				{ label: 'x' },
				{ label: 'c' },
				{ label: 'v' },
				{ label: 'b' },
				{ label: 'n' },
				{ label: 'm' },
				{ label: ',' },
				{ label: '.' },
				{ label: '/' },
				{
					label: 'Shift',
					attributes: {
						location: 'right',
					},
				},
			],
		},
		{
			keys: [
				{ label: 'Ctrl', attributes: { location: 'left' } },
				{ label: 'Win' },
				{
					label: 'Alt',
					attributes: {
						location: 'left',
					},
				},
				{ label: 'Space' },
				{
					label: 'Alt',
					attributes: {
						location: 'right',
					},
				},
				{ label: 'Ctrl', attributes: { location: 'right' } },
			],
		},
	],
};

const capsLockKeyBoardData = {
	rows: [
		{
			keys: [
				{ label: '`' },
				{ label: '1' },
				{ label: '2' },
				{ label: '3' },
				{ label: '4' },
				{ label: '5' },
				{ label: '6' },
				{ label: '7' },
				{ label: '8' },
				{ label: '9' },
				{ label: '0' },
				{ label: '-' },
				{ label: '=' },
				{ label: 'Backspace' },
			],
		},
		{
			keys: [
				{ label: 'Tab' },
				{ label: 'Q' },
				{ label: 'W' },
				{ label: 'E' },
				{ label: 'R' },
				{ label: 'T' },
				{ label: 'Y' },
				{ label: 'U' },
				{ label: 'I' },
				{ label: 'O' },
				{ label: 'P' },
				{ label: '[' },
				{ label: ']' },
				{ label: '\\' },
			],
		},
		{
			keys: [
				{ label: 'Caps Lock' },
				{ label: 'A' },
				{ label: 'S' },
				{ label: 'D' },
				{ label: 'F' },
				{ label: 'G' },
				{ label: 'H' },
				{ label: 'J' },
				{ label: 'K' },
				{ label: 'L' },
				{ label: ';' },
				{ label: "'" },
				{ label: 'Enter' },
			],
		},
		{
			keys: [
				{ label: 'Shift', attributes: { location: 'left' } },
				{ label: 'Z' },
				{ label: 'X' },
				{ label: 'C' },
				{ label: 'V' },
				{ label: 'B' },
				{ label: 'N' },
				{ label: 'M' },
				{ label: ',' },
				{ label: '.' },
				{ label: '/' },
				{ label: 'Shift', attributes: { location: 'right' } },
			],
		},
		{
			keys: [
				{ label: 'Ctrl', attributes: { location: 'left' } },
				{ label: 'Win' },
				{ label: 'Alt', attributes: { location: 'left' } },
				{ label: 'Space' },
				{ label: 'Alt', attributes: { location: 'right' } },
				{ label: 'Ctrl', attributes: { location: 'right' } },
			],
		},
	],
};

const shiftKeyBoardData = {
	rows: [
		{
			keys: [
				{ label: '~' },
				{ label: '!' },
				{ label: '@' },
				{ label: '#' },
				{ label: '$' },
				{ label: '%' },
				{ label: '^' },
				{ label: '&' },
				{ label: '*' },
				{ label: '(' },
				{ label: ')' },
				{ label: '_' },
				{ label: '+' },
				{ label: 'Backspace' },
			],
		},
		{
			keys: [
				{ label: 'Tab' },
				{ label: 'Q' },
				{ label: 'W' },
				{ label: 'E' },
				{ label: 'R' },
				{ label: 'T' },
				{ label: 'Y' },
				{ label: 'U' },
				{ label: 'I' },
				{ label: 'O' },
				{ label: 'P' },
				{ label: '{' },
				{ label: '}' },
				{ label: '|' },
			],
		},
		{
			keys: [
				{ label: 'Caps Lock' },
				{ label: 'A' },
				{ label: 'S' },
				{ label: 'D' },
				{ label: 'F' },
				{ label: 'G' },
				{ label: 'H' },
				{ label: 'J' },
				{ label: 'K' },
				{ label: 'L' },
				{ label: ':' },
				{ label: '"' },
				{ label: 'Enter' },
			],
		},
		{
			keys: [
				{ label: 'Shift', attributes: { location: 'left' } },
				{ label: 'Z' },
				{ label: 'X' },
				{ label: 'C' },
				{ label: 'V' },
				{ label: 'B' },
				{ label: 'N' },
				{ label: 'M' },
				{ label: '<' },
				{ label: '>' },
				{ label: '?' },
				{ label: 'Shift', attributes: { location: 'right' } },
			],
		},
		{
			keys: [
				{ label: 'Ctrl', attributes: { location: 'left' } },
				{ label: 'Win' },
				{ label: 'Alt', attributes: { location: 'left' } },
				{ label: 'Space' },
				{ label: 'Alt', attributes: { location: 'right' } },
				{ label: 'Ctrl', attributes: { location: 'right' } },
			],
		},
	],
};

const reverseShiftKeyBoardData = {
	rows: [
		{
			keys: [
				{ label: '~' },
				{ label: '!' },
				{ label: '@' },
				{ label: '#' },
				{ label: '$' },
				{ label: '%' },
				{ label: '^' },
				{ label: '&' },
				{ label: '*' },
				{ label: '(' },
				{ label: ')' },
				{ label: '_' },
				{ label: '+' },
				{ label: 'Backspace' },
			],
		},
		{
			keys: [
				{ label: 'Tab' },
				{ label: 'q' },
				{ label: 'w' },
				{ label: 'e' },
				{ label: 'r' },
				{ label: 't' },
				{ label: 'y' },
				{ label: 'u' },
				{ label: 'i' },
				{ label: 'o' },
				{ label: 'p' },
				{ label: '[' },
				{ label: ']' },
				{ label: '\\' },
			],
		},
		{
			keys: [
				{ label: 'Caps Lock' },
				{ label: 'a' },
				{ label: 's' },
				{ label: 'd' },
				{ label: 'f' },
				{ label: 'g' },
				{ label: 'h' },
				{ label: 'j' },
				{ label: 'k' },
				{ label: 'l' },
				{ label: ':' },
				{ label: '"' },
				{ label: 'Enter' },
			],
		},
		{
			keys: [
				{
					label: 'Shift',
					attributes: {
						location: 'left',
					},
				},
				{ label: 'z' },
				{ label: 'x' },
				{ label: 'c' },
				{ label: 'v' },
				{ label: 'b' },
				{ label: 'n' },
				{ label: 'm' },
				{ label: '<' },
				{ label: '>' },
				{ label: '?' },
				{
					label: 'Shift',
					attributes: {
						location: 'right',
					},
				},
			],
		},
		{
			keys: [
				{ label: 'Ctrl', attributes: { location: 'left' } },
				{ label: 'Win' },
				{
					label: 'Alt',
					attributes: {
						location: 'left',
					},
				},
				{ label: 'Space' },
				{
					label: 'Alt',
					attributes: {
						location: 'right',
					},
				},
				{ label: 'Ctrl', attributes: { location: 'right' } },
			],
		},
	],
};

export default class Keyboard {
	constructor() {
		this.prevKey = undefined;
		this.defaultState = true;

		this.keyboardElem = document.querySelector('.keyboard');
		this.keyboardElem.addEventListener(
			'mousedown',
			this.mouseDownHandler.bind(this)
		);
		this.keyboardElem.addEventListener(
			'mouseup',
			this.mouseUpHandler.bind(this)
		);

		this.mouseDownInterval;
		this.mosueDownTimeout;
	}
	buildKeyboard(_data) {
		const keyboardContainer = buildElem('div', ['keyboard-container']);

		_data.rows.forEach((_row) => {
			const rowElem = buildElem('div', ['keyboard-row']);

			_row.keys.forEach((_key) => {
				const key = buildElem(
					'div',
					['key'],
					[{ 'data-label': _key.label, ..._key.attributes }]
				);

				key.innerText = _key.label;
				rowElem.appendChild(key);
			});
			keyboardContainer.appendChild(rowElem);
		});

		while (this.keyboardElem.firstChild) {
			this.keyboardElem.removeChild(this.keyboardElem.firstChild);
		}

		this.keyboardElem.appendChild(keyboardContainer);
	}

	getKeyLabel(_key) {
		let key = _key;
		switch (key) {
			case 'Caps Lock':
				key = 'CapsLock';
				break;
			case 'Win':
				key = 'Meta';
				break;
		}

		return key;
	}

	mouseDownFunctionality(e) {
		if (e.target.classList.contains('key')) {
			let keyLabel = this.getKeyLabel(e.target.dataset.label);
			const location = e.target.getAttribute('location');

			if (
				keyLabel == 'Shift' ||
				keyLabel == 'CapsLock' ||
				keyLabel == 'Backspace' ||
				keyLabel == 'Alt' ||
				keyLabel == 'Tab' ||
				keyLabel == 'Ctrl'
			) {
				// disable capslock
				if (keyLabel == 'CapsLock') {
					// e.target.classList.add('disabled');
					return;
				}
				document.dispatchEvent(
					new KeyboardEvent('keydown', {
						key: keyLabel,
						location: location && (location == 'left' ? 1 : 2),
					})
				);
			} else {
				document.dispatchEvent(
					new KeyboardEvent('keypress', {
						key: keyLabel,
						location: location && (location == 'left' ? 1 : 2),
					})
				);
			}

			e.target.classList.add('pressed');
		}
	}

	mouseDownHandler(e) {
		//initial click
		this.mouseDownFunctionality(e);

		// manage while do not release mouse
		this.mosueDownTimeout = setTimeout(
			(() => {
				this.mouseDownInterval = setInterval(
					this.mouseDownFunctionality.bind(this, e),
					40
				);
			}).bind(this),
			500
		);
	}

	mouseUpHandler(e) {
		clearInterval(this.mouseDownInterval);
		clearTimeout(this.mosueDownTimeout);
		if (e.target.classList.contains('key')) {
			let keyLabel = this.getKeyLabel(e.target.dataset.label);
			if (keyLabel == 'CapsLock') return;
			const location = e.target.getAttribute('location');

			document.dispatchEvent(
				new KeyboardEvent('keyup', {
					key: keyLabel,
					location: location && (location == 'left' ? 1 : 2),
				})
			);
			e.target.classList.remove('pressed');
		}
	}

	init(_keyBoardData) {
		this.buildKeyboard(_keyBoardData);
	}

	showKeyBoard() {
		this.init(defaultKeyBoardData);
	}

	getKeyElem(_key, e) {
		let keyLabel = _key;
		switch (keyLabel) {
			case ' ':
				keyLabel = 'Space';
				break;
			case 'Meta':
				keyLabel = 'Win';
				break;
			case 'Control':
				keyLabel = 'Ctrl';
				break;
			case 'Caps Lock':
				keyLabel = 'CapsLock';
				break;
		}

		let elem = undefined;
		if (keyLabel == 'Shift' || keyLabel == 'Alt' || keyLabel == 'Ctrl') {
			const location = e.location == 1 ? 'left' : 'right';
			elem = document.querySelector(
				`.key[data-label = "${keyLabel}"][location = "${location}"]`
			);
			return elem;
		} else if (keyLabel == `\\`) {
			elem = document.querySelector(`.key[data-label = "\\${keyLabel}"]`);
			return elem;
		}
		elem = document.querySelector(`.key[data-label = "${keyLabel}"]`);
		return elem;
	}

	// updateKeybardLayout(){
	//     if (this.defaultState) this.init(defaultKeyBoardData);
	//     else this.
	// }
	handleShiftPress(_key, e) {
		if (this.prevKey == 'Shift') return;

		if (this.defaultState) {
			this.init(shiftKeyBoardData);
		} else {
			this.init(reverseShiftKeyBoardData);
			const capLockKeyElem = document.querySelector(
				'.key[data-label = "Caps Lock"]'
			);
			capLockKeyElem.classList.add('pressed');
		}

		const elem = this.getKeyElem(_key, e);
		elem.classList.add('pressed');
	}

	handleShiftRelease() {
		if (this.defaultState) {
			this.init(defaultKeyBoardData);
		} else {
			this.init(capsLockKeyBoardData);
			const capLockKeyElem = document.querySelector(
				'.key[data-label = "Caps Lock"]'
			);
			capLockKeyElem.classList.add('pressed');
		}
	}

	handleCapsLock() {
		this.defaultState = !this.defaultState;
		let elem = document.querySelector(`.key[data-label = "Caps Lock"]`);

		if (elem.classList.contains('pressed')) {
			this.init(defaultKeyBoardData);
		} else {
			this.init(capsLockKeyBoardData);
			elem = document.querySelector(`.key[data-label = "Caps Lock"]`);
			elem.classList.add('pressed');
		}
	}
	pressKey(_key, e) {
		if (_key == 'CapsLock') {
			this.handleCapsLock();
			return;
		}
		if (_key == 'Shift') {
			this.handleShiftPress(_key, e);

			return;
		}

		const elem = this.getKeyElem(_key, e);
		if (!elem) return;
		elem.classList.add('pressed');
		this.prevKey = _key;
	}

	unPressKey(_key, e) {
		if (_key == 'Caps Lock') return;
		if (_key == 'Shift') {
			this.handleShiftRelease();
		}
		const elem = this.getKeyElem(_key, e);
		if (!elem) return;
		elem.classList.remove('pressed');
	}
}
