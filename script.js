let a = ''; // first number
let b = ''; // second number
let sign = ''; // знак мат. операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

// screen
const screen = document.querySelector('.calculator-screen p');

const clearAll = () => {
	a = '';
	b = '';
	sign = '';
	finish = false;
	screen.textContent = 0;
};

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = event => {
	if (!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains('ac')) return;

	screen.textContent = '';

	// получение нажатой кнопки
	const key = event.target.textContent;

	// если нажата 0-9 или .
	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			screen.textContent = a;
		} else if (a !== '' && b !== '' && finish) {
			b = key;
			finish = false;
			screen.textContent = b;
		} else {
			b += key;
			screen.textContent = b;
		}
		return;
	}

	// если нажата клавиша + - / *
	if (action.includes(key)) {
		sign = key;
		screen.textContent = sign;
		return;
	}

	// если нажато =
	if (key === '=') {
		if (b === '') b = a;
		switch (sign) {
			case '+':
				a = +a + +b;
				break;
			case '-':
				a = a - b;
				break;
			case '*':
				a = a * b;
				break;
			case '/':
				if (b === '0') {
					screen.textContent = 'error';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		screen.textContent = a;
	}
};
