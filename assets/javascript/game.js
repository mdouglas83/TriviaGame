var gameId;
var questionId;
var gameTimer;
var gameCountdown;
var gameScore;

function mainMenu() {
	$("#gameBox").html("");
	var dHtml = "<h2>Select your game</h2>\n";
	for (i = 0; i < quiz.length; i++) {
		dHtml += "<button id='game" + i + "' class='btnGame' onclick='pickGame(" + i + ")'>" + quiz[i].n + "</button>\n";
	}
	$("#mainMenu").html(dHtml);
}

function pickGame(id) {
	$("#mainMenu").html("");
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
	$("#gameBox").empty();
	var eH2 = $("<h2>");
	eH2.text(quiz[gameId].n.replace("&#39", "'"));
	$("#gameBox").append(eH2);
	var eScore = $("<div>");
	eScore.attr("id", "score");
	eScore.text("Score: " + gameScore);
	$("#gameBox").append(eScore);
	var eTimer = $("<div>");
	eTimer.attr("id", "timer");
	eTimer.text("Time left: " + gameCountdown);
	$("#gameBox").append(eTimer);
	var eImg = $("<img>");
	eImg.attr("src", quiz[gameId].q[questionId].i);
	eImg.attr("width", "500px");
	eImg.attr("class", "imgQuestion>");
	$("#gameBox").append(eImg);
	var eQuestion = $("<h3>");
	eQuestion.text(quiz[gameId].n.replace("&#39", "'"));
	$("#gameBox").append(quiz[gameId].q[questionId].q.replace("&#39", "'"));
	for (i = 0; i < quiz[gameId].q[questionId].a.length; i++) {
		var eBtn = $("<button>");
		eBtn.attr("id", "a" + i);
		eBtn.attr("class", "btnAnswer");
		eBtn.attr("onclick", "checkAnswer(" + i + ")");
		eBtn.text(quiz[gameId].q[questionId].a[i][0].replace("&#39", "'"));
		$("#gameBox").append(eBtn);
	}
	gameTimer = setInterval(drawTimer, 1000);
}

function drawTimer() {
	gameCountdown--;
	$("#timer").html("Time left: " + gameCountdown);
	if (!gameCountdown > 0) {
		checkAnswer(-1);
	}
}

function checkAnswer(a) {
	clearInterval(gameTimer);
	for (i = 0; i < quiz[gameId].q[questionId].a.length; i++) {
		if (quiz[gameId].q[questionId].a[i][1] === true) {
			if (i === a) {
				gameScore += gameCountdown;
			} else {
				$("#a" + i).attr("class", "btnAnswerDis");
			}
			$("#a" + i).attr("class", "btnCorrect");
		} else {
			if (i === a) {
				$("#a" + i).attr("class", "btnIncorrect");
			} else {
				$("#a" + i).attr("class", "btnAnswerDis");
			}
		}
		$("#a" + i).attr("disabled", "true");
	}
	questionId++;
	if (questionId < quiz[gameId].q.length) {
		var eBtn = $("<button>");
		eBtn.attr("class", "btnNext");
		eBtn.attr("onclick", "drawBox()");
		eBtn.text("Next Question");
		$("#gameBox").append(eBtn);
	} else {
		var eBtn = $("<button>");
		eBtn.attr("class", "btnEnd");
		eBtn.attr("onclick", "mainMenu()");
		eBtn.text("New Game");
		$("#gameBox").append(eBtn);
	}
	$("#score").html("Score: " + gameScore);
}