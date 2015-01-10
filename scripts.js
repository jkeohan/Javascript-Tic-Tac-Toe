
////////// init //////////
window.onload = function() {
	init();
}

function init() {
	document.turn = 'X';
	setMessage(document.turn + ' goes first');
}


////////// message //////////
function setMessage(msg) {
	document.getElementById('message').innerText = msg;
}

function turnMessage() {
	setMessage(document.turn + '\'s turn');
}


////////// select square & switch player //////////
function nextMove(square) {
	if (checkForWinner('X') === false &&
		checkForWinner('Y') === false) {
		if (square.innerText === '') {
			square.innerText = document.turn;
			switchTurn();
		} else {
			setMessage('That square has already been selected');
		}
	}
}

function switchTurn() {
	if (checkForWinner(document.turn)) {
		setMessage('Congratulations player ' + document.turn + '!');
	} else if (document.turn === 'X') {
		document.turn = 'O';
		setMessage(document.turn + '\'s turn');
	} else {
		document.turn = 'X';
		setMessage(document.turn + '\'s turn');
	}
}


////////// check for winner //////////
function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)) {

		result = true;
}

return result;
}

function checkRow(a, b, c, move) {
	var result = false;
	if (getSquareInnerText(a) === move &&
		getSquareInnerText(b) === move &&
		getSquareInnerText(c) === move) {
		result = true;
}
return result;
}

function getSquareInnerText(number) {
	return document.getElementById('s' + number).innerText;
}



