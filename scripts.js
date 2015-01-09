
window.onload = function() {
	startGame();
}

function startGame() {
	document.turn = 'x';
	setMessage(document.turn + ' gets to start')
}

function setMessage(msg) {
	document.getElementById('messages').innerText = msg
}

function nextMove(square) {
	square.innerText = document.turn;
}