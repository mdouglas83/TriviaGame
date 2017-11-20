var gameId;
var questionId;
var gameTimer;
var gameCountdown;
var gameScore;

function mainMenu() {
	document.getElementById("gameBox").innerHTML = "";
	var dHtml = "<h2>Select your game</h2>\n";
	for (i = 0; i < quiz.length; i++) {
		dHtml += "<button id='game" + i + "' class='btnGame' onclick='pickGame(" + i + ")'>" + quiz[i].n + "</button>\n";
	}
	document.getElementById("mainMenu").innerHTML = dHtml;
}

function pickGame(id) {
	document.getElementById("mainMenu").innerHTML = "";
	gameId = id;
	startGame();
}

function startGame() {
	questionId = 0;
	gameScore = 0;
	drawBox();
}

function drawBox() {
	gameCountdown = 10;
	var dHtml = "<h2>" + quiz[gameId].n + "</h2>\n";
	dHtml += "<div id='score'>Score: " + gameScore + "</div>\n";
	dHtml += "<div id='timer'>Time left: " + gameCountdown + "</div>\n";
	dHtml += "<img src='" + quiz[gameId].q[questionId].i + "' class=imgQuestion>\n";
	dHtml += "<h3>" + quiz[gameId].q[questionId].q + "</h3>\n";
	for (i = 0; i < quiz[gameId].q[questionId].a.length; i++) {
		dHtml += "<button id='a" + i + "' class='btnAnswer' onclick='checkAnswer(" + i + ")'>" + quiz[gameId].q[questionId].a[i][0] + "</button>\n";
	}
	document.getElementById("gameBox").innerHTML = dHtml;
	gameTimer = setInterval(drawTimer, 1000);
}

function drawTimer() {
	gameCountdown--;
	document.getElementById("timer").innerHTML = "Time left: " + gameCountdown;
	if (!gameCountdown > 0) {
		checkAnswer(-1);
	}
}

function checkAnswer(a) {
	clearInterval(gameTimer);
	console.log(quiz[gameId].q[questionId].a.length);
	for (i = 0; i < quiz[gameId].q[questionId].a.length; i++) {
		if (quiz[gameId].q[questionId].a[i][1] === true) {
			if (i === a) {
				gameScore += gameCountdown;
			} else {
				document.getElementById("a" + i).className = "btnAnswerDis";
			}
			document.getElementById("a" + i).className = "btnCorrect";
		} else {
			if (i === a) {
				document.getElementById("a" + i).className = "btnIncorrect";
			} else {
				document.getElementById("a" + i).className = "btnAnswerDis";
			}
		}
		document.getElementById("a" + i).disabled = true;
	}
	questionId++;
	if (questionId < quiz[gameId].q.length) {
		document.getElementById("gameBox").innerHTML += "<button class='btnNext' onclick='drawBox()'>Next Question</button>\n";
	} else {
		document.getElementById("gameBox").innerHTML += "<button class='btnEnd' onclick='mainMenu()'>New Game</button>\n";
	}
	document.getElementById("score").innerHTML = "Score: " + gameScore;
}