
var allBallsColors= ["IndianRed",	"LightCoral",	"Salmon",	"DarkSalmon",	"LightSalmon",	"Crimson",	"Red",	"FireBrick",	"DarkRed",	"Pink",	"LightPink",	"HotPink",	"DeepPink",	"MediumVioletRed",	"PaleVioletRed",	"Coral",	"Tomato",	"OrangeRed",	"DarkOrange",	"Orange",	"Gold",	"Yellow",	"LightYellow",	"LemonChiffon",	"LightGoldenrodYellow",	"PapayaWhip",	"Moccasin",	"PeachPuff",	"PaleGoldenrod",	"Khaki",	"DarkKhaki",	"Lavender",	"Thistle",	"Plum",	"Violet",	"Orchid",	"Fuchsia",	"Magenta",	"MediumOrchid",	"MediumPurple",	"BlueViolet",	"DarkViolet",	"DarkOrchid",	"DarkMagenta",	"Purple",	"RebeccaPurple",	"Indigo",	"MediumSlateBlue",	"SlateBlue",	"DarkSlateBlue",	"GreenYellow",	"Chartreuse",	"LawnGreen",	"Lime",	"LimeGreen",	"PaleGreen",	"LightGreen",	"MediumSpringGreen",	"SpringGreen",	"MediumSeaGreen",	"SeaGreen",	"ForestGreen",	"Green",	"DarkGreen",	"YellowGreen",	"OliveDrab",	"Olive",	"DarkOliveGreen",	"MediumAquamarine",	"DarkSeaGreen",	"LightSeaGreen",	"DarkCyan",	"Teal",	"Aqua",	"Cyan",	"LightCyan",	"PaleTurquoise",	"Aquamarine",	"Turquoise",	"MediumTurquoise",	"DarkTurquoise",	"CadetBlue",	"SteelBlue",	"LightSteelBlue",	"PowderBlue",	"LightBlue",	"SkyBlue",	"LightSkyBlue",	"DeepSkyBlue",	"DodgerBlue",	"CornflowerBlue",	"RoyalBlue",	"Blue",	"MediumBlue",	"DarkBlue",	"Navy",	"MidnightBlue",	"Cornsilk",	"BlanchedAlmond",	"Bisque",	"NavajoWhite",	"Wheat",	"BurlyWood",	"Tan",	"RosyBrown",	"SandyBrown",	"Goldenrod",	"DarkGoldenrod",	"Peru",	"Chocolate",	"SaddleBrown",	"Sienna",	"Brown",	"Maroon",	"White",	"Snow",	"Honeydew",	"MintCream",	"Azure",	"AliceBlue",	"GhostWhite",	"WhiteSmoke",	"Seashell",	"Beige",	"OldLace",	"FloralWhite",	"Ivory",	"AntiqueWhite",	"Linen",	"LavenderBlush",	"MistyRose",	"Gainsboro",	"LightGray",	"LightGrey",	"Silver",	"DarkGray",	"DarkGrey",	"Gray",	"Grey",	"DimGray",	"DimGrey",	"LightSlateGray",	"LightSlateGrey",	"SlateGray",	"SlateGrey",	"DarkSlateGray",	"DarkSlateGrey", "Black"];
var game3IsOn = true;
$(function(){  							//Start Game 3 Game
	$('#game3StartBtn, #gameThreeBtnHome').click(function(){
	$('#game3OptnsBtnsOnlyCont').css('visibility', 'visible');
	$('#game3Over').css('display', 'none');
	$('#nameTheColorGame3').css('display', 'block');

	$('#game3OverQues').text('00'); //Reset questions count
	$('#game3ScoreSp').text('00'); // Reset Score
	$('#game3ScoreSp21').text(3); //Reset Life

	quesCount = 0;
	$('#game3Counts').text(quesCount);
	
	$('#fallingbinos').css('display', 'block'); 
	$('#game3StartBtn').text('Restart');

	$('#game3OptnsBtnsCont').css('visibility', 'visible');
	startGameOneQuestion();
	playBackgroundSoundGame3();
	game3IsOn = true; 
	});
});

$(function(){  							//Exit Game with Home Button
	$('#pg5HeaderBarLeftBtn').click(function(){
	bBgroundSoundGame3.pause();	//Stop background sound
	bBgroundSound.currentTime = 0;
	});
});

$(function(){  							//Stop Game Button
	$('#pg5HeaderBarRightBtn').click(function(){
	stopNameTheColorGame();
	});
});

function stopNameTheColorGame(){ 					//Stop Game Function
	$('#fallingbinos').css('display', 'none');
	$('#nameTheColorGame3').css('display', 'none');
	bBgroundSoundGame3.pause();	//Stop background sound
	$('#game3Counts').text('00');
	$('#game3OverQues').text('00'); //Reset questions count
	$('#game3ScoreSp').text('00'); // Reset Score
	$('#game3ScoreSp21').text(0); //Reset Life
	bBgroundSound.currentTime = 0;
	for(var i = 0; i <= 10; i++){
		$('#game3Optn'+i).text('--');
	}
}

$(function(){  							
	$('#game3LifeLineBtn').on('click', function(){ 		//LifeLine- Game 3
	if(game3IsOn == true){
		var game3Life = $('#game3ScoreSp21').text();
		game3Life = parseInt(game3Life);
		if(game3Life <= 0){
			alert('You have no life remaining!')
		}
		if(game3Life > 0){
			if(confirm('You want to use your life line?')){
				var balcolor = $('#bin1').css('background-color');
				game3Life -= 1;
				$('#game3ScoreSp21').text(game3Life);
				/*$('#nameTheColorGame3').css('color', balcolor);
				$('#nameTheColorGame3').text('The color is- "'+ballColor+'"');
				$('#game3Optn'+correctBtn).css('background-color', 'lime');
				setTimeout(startGameOneQuestion, 3000);
				wrongAnsCount = 0;*/
				lifeLineCall();
			}
		}
	}
	});
});

var ballColor;
var correctBtn;
var quesCount = 0;
function startGameOneQuestion(){
	var allBallsColor= ["IndianRed",	"LightCoral",	"Salmon",	"DarkSalmon",	"LightSalmon",	"Crimson",	"Red",	"FireBrick",	"DarkRed",	"Pink",	"LightPink",	"HotPink",	"DeepPink",	"MediumVioletRed",	"PaleVioletRed",	"Coral",	"Tomato",	"OrangeRed",	"DarkOrange",	"Orange",	"Gold",	"Yellow",	"LightYellow",	"LemonChiffon",	"LightGoldenrodYellow",	"PapayaWhip",	"Moccasin",	"PeachPuff",	"PaleGoldenrod",	"Khaki",	"DarkKhaki",	"Lavender",	"Thistle",	"Plum",	"Violet",	"Orchid",	"Fuchsia",	"Magenta",	"MediumOrchid",	"MediumPurple",	"BlueViolet",	"DarkViolet",	"DarkOrchid",	"DarkMagenta",	"Purple",	"RebeccaPurple",	"Indigo",	"MediumSlateBlue",	"SlateBlue",	"DarkSlateBlue",	"GreenYellow",	"Chartreuse",	"LawnGreen",	"Lime",	"LimeGreen",	"PaleGreen",	"LightGreen",	"MediumSpringGreen",	"SpringGreen",	"MediumSeaGreen",	"SeaGreen",	"ForestGreen",	"Green",	"DarkGreen",	"YellowGreen",	"OliveDrab",	"Olive",	"DarkOliveGreen",	"MediumAquamarine",	"DarkSeaGreen",	"LightSeaGreen",	"DarkCyan",	"Teal",	"Aqua",	"Cyan",	"LightCyan",	"PaleTurquoise",	"Aquamarine",	"Turquoise",	"MediumTurquoise",	"DarkTurquoise",	"CadetBlue",	"SteelBlue",	"LightSteelBlue",	"PowderBlue",	"LightBlue",	"SkyBlue",	"LightSkyBlue",	"DeepSkyBlue",	"DodgerBlue",	"CornflowerBlue",	"RoyalBlue",	"Blue",	"MediumBlue",	"DarkBlue",	"Navy",	"MidnightBlue",	"Cornsilk",	"BlanchedAlmond",	"Bisque",	"NavajoWhite",	"Wheat",	"BurlyWood",	"Tan",	"RosyBrown",	"SandyBrown",	"Goldenrod",	"DarkGoldenrod",	"Peru",	"Chocolate",	"SaddleBrown",	"Sienna",	"Brown",	"Maroon",	"White",	"Snow",	"Honeydew",	"MintCream",	"Azure",	"AliceBlue",	"GhostWhite",	"WhiteSmoke",	"Seashell",	"Beige",	"OldLace",	"FloralWhite",	"Ivory",	"AntiqueWhite",	"Linen",	"LavenderBlush",	"MistyRose",	"Gainsboro",	"LightGray",	"LightGrey",	"Silver",	"DarkGray",	"DarkGrey",	"Gray",	"Grey",	"DimGray",	"DimGrey",	"LightSlateGray",	"LightSlateGrey",	"SlateGray",	"SlateGrey",	"DarkSlateGray",	"DarkSlateGrey", "Black"];
	var btnsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	ballColor = randomListColorsFunction(allBallsColor); //Select a color from the list

	for(var i = 0; i <= 10; i++){   //First reset all btns backgrd color to normal, ie remove the lifeline backgrd 
		$('#game3Optn'+i).css('background-color', '');
	}

	$('#nameTheColorGame3').css('color', ballColor); //Ask for this color
	$('#nameTheColorGame3').text('What Color is this?');

	for(var i = 0; i <= 10; i++){   //Display all balloons backgrd-color to the selected color 
		$('#bin'+i).css('background-color', ballColor);
	}
	var answerBtn = randomNumbers(1, 10);   //Place the answer in one of the buttons
	correctBtn = answerBtn;  //Hold the correct in a variable.
	$('#game3Optn'+answerBtn).text(ballColor);
	btnsList.splice(btnsList.indexOf(answerBtn), 1); //Remove the answer button from the List
	allBallsColor.splice(allBallsColor.indexOf(ballColor), 1); //Remove selected color from list
	
	var ball1Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn1 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn1).text(ball1Color);
	btnsList.splice(btnsList.indexOf(answerBtn1), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball1Color), 1);

	var ball2Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn2 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn2).text(ball2Color);
	btnsList.splice(btnsList.indexOf(answerBtn2), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball2Color), 1);
	
	var ball3Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn3 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn3).text(ball3Color);
	btnsList.splice(btnsList.indexOf(answerBtn3), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball3Color), 1);

	var ball4Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn4 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn4).text(ball4Color);
	btnsList.splice(btnsList.indexOf(answerBtn4), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball4Color), 1);

	var ball5Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn5 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn5).text(ball5Color);
	btnsList.splice(btnsList.indexOf(answerBtn5), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball5Color), 1);

	var ball6Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn6 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn6).text(ball6Color);
	btnsList.splice(btnsList.indexOf(answerBtn6), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball6Color), 1);

	var ball7Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn7 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn7).text(ball7Color);
	btnsList.splice(btnsList.indexOf(answerBtn7), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball7Color), 1);

	var ball8Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn8 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn8).text(ball8Color);
	btnsList.splice(btnsList.indexOf(answerBtn8), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball8Color), 1);

	var ball9Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn9 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn9).text(ball9Color);
	btnsList.splice(btnsList.indexOf(answerBtn9), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball9Color), 1);

	var ball10Color = randomListColorsFunction(allBallsColor); //Pick a color for ball1 and remove from list
	var answerBtn10 =  randomListColorsFunction(btnsList);
	$('#game3Optn'+answerBtn10).text(ball10Color);
	btnsList.splice(btnsList.indexOf(answerBtn10), 1);
	allBallsColor.splice(allBallsColor.indexOf(ball10Color), 1);
	//Reset the colors back to original list
	allBallsColor= ["IndianRed",	"LightCoral",	"Salmon",	"DarkSalmon",	"LightSalmon",	"Crimson",	"Red",	"FireBrick",	"DarkRed",	"Pink",	"LightPink",	"HotPink",	"DeepPink",	"MediumVioletRed",	"PaleVioletRed",	"Coral",	"Tomato",	"OrangeRed",	"DarkOrange",	"Orange",	"Gold",	"Yellow",	"LightYellow",	"LemonChiffon",	"LightGoldenrodYellow",	"PapayaWhip",	"Moccasin",	"PeachPuff",	"PaleGoldenrod",	"Khaki",	"DarkKhaki",	"Lavender",	"Thistle",	"Plum",	"Violet",	"Orchid",	"Fuchsia",	"Magenta",	"MediumOrchid",	"MediumPurple",	"BlueViolet",	"DarkViolet",	"DarkOrchid",	"DarkMagenta",	"Purple",	"RebeccaPurple",	"Indigo",	"MediumSlateBlue",	"SlateBlue",	"DarkSlateBlue",	"GreenYellow",	"Chartreuse",	"LawnGreen",	"Lime",	"LimeGreen",	"PaleGreen",	"LightGreen",	"MediumSpringGreen",	"SpringGreen",	"MediumSeaGreen",	"SeaGreen",	"ForestGreen",	"Green",	"DarkGreen",	"YellowGreen",	"OliveDrab",	"Olive",	"DarkOliveGreen",	"MediumAquamarine",	"DarkSeaGreen",	"LightSeaGreen",	"DarkCyan",	"Teal",	"Aqua",	"Cyan",	"LightCyan",	"PaleTurquoise",	"Aquamarine",	"Turquoise",	"MediumTurquoise",	"DarkTurquoise",	"CadetBlue",	"SteelBlue",	"LightSteelBlue",	"PowderBlue",	"LightBlue",	"SkyBlue",	"LightSkyBlue",	"DeepSkyBlue",	"DodgerBlue",	"CornflowerBlue",	"RoyalBlue",	"Blue",	"MediumBlue",	"DarkBlue",	"Navy",	"MidnightBlue",	"Cornsilk",	"BlanchedAlmond",	"Bisque",	"NavajoWhite",	"Wheat",	"BurlyWood",	"Tan",	"RosyBrown",	"SandyBrown",	"Goldenrod",	"DarkGoldenrod",	"Peru",	"Chocolate",	"SaddleBrown",	"Sienna",	"Brown",	"Maroon",	"White",	"Snow",	"Honeydew",	"MintCream",	"Azure",	"AliceBlue",	"GhostWhite",	"WhiteSmoke",	"Seashell",	"Beige",	"OldLace",	"FloralWhite",	"Ivory",	"AntiqueWhite",	"Linen",	"LavenderBlush",	"MistyRose",	"Gainsboro",	"LightGray",	"LightGrey",	"Silver",	"DarkGray",	"DarkGrey",	"Gray",	"Grey",	"DimGray",	"DimGrey",	"LightSlateGray",	"LightSlateGrey",	"SlateGray",	"SlateGrey",	"DarkSlateGray",	"DarkSlateGrey", "Black"];
	btnsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	quesCount += 1; 
	$('#game3Counts').text(quesCount);
	/*
	if(gameCat == 'Easy'){colorList = popularColors; $('#gameOneScoreSp21').text(5);}
	if(gameCat == 'Hard'){colorList = allColors; $('#gameOneScoreSp21').text(10);}
	playGameOne();
	bgroundSound.pause();*/
	$('#wrongAnsCount').text(ballColor);
}
function scoreGame3Life(){
	var score = $('#game3ScoreSp').text();
	score = parseInt(score);
	var gameOneLife = $('#gameOneScoreSp21').text();
	gameOneLife = parseInt(gameOneLife);
	if(score%2 == 0){
		gameOneLife += 1;
		$('#gameOneScoreSp21').text(gameOneLife);
	}
}
var wrongAnsCount = 0;
function game3BallSelect(ballID){
	var colorQuestion = ballColor;
	var ballContent = $('#'+ballID).text();
	var correctAnswer = false;

	var score = $('#game3ScoreSp').text();
	var life = $('#game3ScoreSp21').text();
	score = parseInt(score);
	life = parseInt(life);
	wrongSound.currentTime = 0;  //Stop sound on another click
	correctSound.currentTime = 0;
	//for(var i = 0; i <= 10; i++){   //First reset all btns backgrd color to normal
	//	$('#game3Optn'+i).css('background-color', '');
	//}
	if(colorQuestion == ballContent){
		$('#nameTheColorGame3').text('Correct! "'+colorQuestion+'" is the color');
		$('#nameTheColorGame3').css('color', colorQuestion);
		playCorrectSound();
		$('#'+ballID).css('background-color', 'lime');
		correctAnswer = true; 
		wrongAnsCount = 0;	//Reset to 0
	}else{
		$('#'+ballID).css('background-color', 'coral');
		playWrongSound();
		$('#nameTheColorGame3').text('Wrong Answer');
		setTimeout(function(){$('#nameTheColorGame3').text('What Color is this?')}, 500);

		wrongAnsCount += 1;
		if(wrongAnsCount %3 == 0 && !game3LifeLine){
			$('#wrongAnsCount').text(wrongAnsCount);
			setTimeout($('#game3ScoreSp21').text(life-1),1500);
			setTimeout(startGameOneQuestion, 1500);
		}
		if(game3LifeLine){
			setTimeout(startGameOneQuestion, 1500);
			wrongAnsCount = 0;
			game3LifeLine = false;
		}
	if(parseInt($('#game3ScoreSp21').text()) == -1){
		game3Over();
	}	
	}
	if(correctAnswer){
		//setTimeout(function(){$('#nameTheColorGame3').text('What Color is this?')}, 2000);
		$('#game3ScoreSp').text(score+1);
		setTimeout(startGameOneQuestion, 2000);
		if(score != 0){
			if((score+1)%5 == 0){
				$('#game3ScoreSp21').text(life+1);
			}	
		}
		correctAnswer = false;
	}
}

function game3Over(){				//Game Over
	var score = $('#game3ScoreSp').text();
	var life = $('#game3ScoreSp21').text();
	$('#game3OptnsBtnsOnlyCont').css('visibility', 'hidden');
	$('#game3Over').css('display', 'block');
	$('#game3OverCorrectCount').text(score);
	$('#game3OverQues').text(quesCount);
	wrongSound.currentTime = 0;
	bBgroundSoundGame3.pause();
	bBgroundSoundGame3.currentTime = 0;
	playbGameOverSound();
	$('#game3ScoreSp21').text(0);
	//quesCount = 0; //Reset this
	game3IsOn = false;
}

$(function(){					//Game Rule Container
		$('#game3RuleBtn').click(function(){
	if(game3IsOn){
		var display = $('#game3Rule').css('display'); 
		if(display == 'none'){
			$("#game3Rule").fadeIn(1000);
			$('#game3Rule').css('display', 'block');
			setTimeout(autoRemoveRuleCont, 10000);
			$('#game3RuleBtn').text('Hide Game Rule');
		}
		if(display == 'block'){
			$("#game3Rule").fadeOut(700);
			$('#game3RuleBtn').text('Game Rule');
		}
	}
	});
});

function autoRemoveRuleCont(){			//Auto Hide Game Rule
	var display = $('#game3Rule').css('display'); 
	if(display == 'block'){ //Auto fadeOut after 4sec
		//$("#exitCont").delay(3000).fadeOut(1000);
		$("#game3Rule").fadeOut(1000);
		$('#game3RuleBtn').text('Game Rule');
	}
}

$(function(){  							//Game Rule Container -OK button
	$('#game3RuleOk').click(function(){
	$("#game3Rule").fadeOut(700);
	$('#game3Rule').css('display', 'none');
	$('#game3RuleBtn').text('Game Rule');
	});
});

var game3LifeLine = false;
function lifeLineCall(){
	game3LifeLine = true;
	var btnsList2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	btnsList2.splice(btnsList2.indexOf(correctBtn), 1); //Remove the answer button from the List

	for(var i = 1; i <= 7; i++){   // 7 options to be removed
		var wrongBtn = randomListColorsFunction(btnsList2); //Select a btn from the remaining options
		$('#game3Optn'+wrongBtn).text('--');
		btnsList2.splice(btnsList2.indexOf(wrongBtn), 1); //Remove the selected btn from the list
	}
}

