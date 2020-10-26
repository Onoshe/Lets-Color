

var popularColors= ["Salmon",	"Crimson",	"Red",	"Pink",	"Coral",	"Tomato",	"Orange",	"Gold",	"Yellow",	"Violet",	"Magenta",	"Purple",	"Indigo",	"Lime",	"Green",	"Teal",	"Aqua",	"Cyan",	"Turquoise",	"Blue",	"Navy",	"Chocolate",	"Brown",	"Maroon",	"White",	"Silver",	"Gray",	"Black"]
var Reds = ["IndianRed",	"LightCoral",	"Salmon",	"DarkSalmon",	"LightSalmon",	"Crimson",	"Red",	"FireBrick",	"DarkRed"]																		
var Pinks = ["Pink",	"LightPink",	"HotPink",	"DeepPink",	"MediumVioletRed",	"PaleVioletRed"]																			
var Oranges = ["Coral",	"Tomato",	"OrangeRed",	"DarkOrange",	"Orange" ]																					
var Yellows = ["Gold",	"Yellow",	"LightYellow",	"LemonChiffon",	"LightGoldenrodYellow",	"PapayaWhip",	"Moccasin",	"PeachPuff",	"PaleGoldenrod",	"Khaki",	"DarkKhaki" ]															
var Purples = ["Lavender",	"Thistle",	"Plum",	"Violet",	"Orchid",	"Fuchsia",	"Magenta",	"MediumOrchid",	"MediumPurple",	"BlueViolet",	"DarkViolet",	"DarkOrchid",	"DarkMagenta",	"Purple",	"RebeccaPurple",	"Indigo",	"MediumSlateBlue",	"SlateBlue",	"DarkSlateBlue" ]							
var Greens = ["GreenYellow",	"Chartreuse",	"LawnGreen",	"Lime",	"LimeGreen",	"PaleGreen",	"LightGreen",	"MediumSpringGreen",	"SpringGreen",	"MediumSeaGreen",	"SeaGreen",	"ForestGreen",	"Green",	"DarkGreen",	"YellowGreen",	"OliveDrab",	"Olive",	"DarkOliveGreen",	"MediumAquamarine",	"DarkSeaGreen",	"LightSeaGreen",	"DarkCyan",	"Teal" ]			
var Blues_Cyans = ["Aqua",	"Cyan",	"LightCyan",	"PaleTurquoise",	"Aquamarine",	"Turquoise",	"MediumTurquoise",	"DarkTurquoise",	"CadetBlue",	"SteelBlue",	"LightSteelBlue",	"PowderBlue",	"LightBlue",	"SkyBlue",	"LightSkyBlue",	"DeepSkyBlue",	"DodgerBlue",	"CornflowerBlue",	"RoyalBlue",	"Blue",	"MediumBlue",	"DarkBlue",	"Navy",	"MidnightBlue",	"Slateblue", "Darkslateblue"]
var Browns = ["Cornsilk",	"BlanchedAlmond",	"Bisque",	"NavajoWhite",	"Wheat",	"BurlyWood",	"Tan",	"RosyBrown",	"SandyBrown",	"Goldenrod",	"DarkGoldenrod",	"Peru",	"Chocolate",	"SaddleBrown",	"Sienna",	"Brown",	"Maroon" ]									
var Greys = ["Gainsboro",	"LightGray",	"LightGrey",	"Silver",	"DarkGray",	"DarkGrey",	"Gray",	"Grey",	"DimGray",	"DimGrey",	"LightSlateGray",	"LightSlateGrey",	"SlateGray",	"SlateGrey",	"Darkslateblue",	"Black"	]										
var Whites = ["White",	"Snow",	"Honeydew",	"MintCream",	"Azure",	"AliceBlue",	"GhostWhite",	"WhiteSmoke",	"Seashell",	"Beige",	"OldLace",	"FloralWhite",	"Ivory",	"AntiqueWhite",	"Linen",	"LavenderBlush",	"MistyRose" ]					

var AllColor= [	"IndianRed",	"LightCoral",	"Salmon",	"DarkSalmon",	"LightSalmon",	"Crimson",	"Red",	"FireBrick",	"DarkRed",	"Pink",	"LightPink",	"HotPink",	"DeepPink",	"MediumVioletRed",	"PaleVioletRed",	"Coral",	"Tomato",	"OrangeRed",	"DarkOrange",	"Orange",	"Gold",	"Yellow",	"LightYellow",	"LemonChiffon",	"LightGoldenrodYellow",	"PapayaWhip",	"Moccasin",	"PeachPuff",	"PaleGoldenrod",	"Khaki",	"DarkKhaki",	"Lavender",	"Thistle",	"Plum",	"Violet",	"Orchid",	"Fuchsia",	"Magenta",	"MediumOrchid",	"MediumPurple",	"BlueViolet",	"DarkViolet",	"DarkOrchid",	"DarkMagenta",	"Purple",	"RebeccaPurple",	"Indigo",	"MediumSlateBlue",	"SlateBlue",	"DarkSlateBlue",	"GreenYellow",	"Chartreuse",	"LawnGreen",	"Lime",	"LimeGreen",	"PaleGreen",	"LightGreen",	"MediumSpringGreen",	"SpringGreen",	"MediumSeaGreen",	"SeaGreen",	"ForestGreen",	"Green",	"DarkGreen",	"YellowGreen",	"OliveDrab",	"Olive",	"DarkOliveGreen",	"MediumAquamarine",	"DarkSeaGreen",	"LightSeaGreen",	"DarkCyan",	"Teal",	"Aqua",	"Cyan",	"LightCyan",	"PaleTurquoise",	"Aquamarine",	"Turquoise",	"MediumTurquoise",	"DarkTurquoise",	"CadetBlue",	"SteelBlue",	"LightSteelBlue",	"PowderBlue",	"LightBlue",	"SkyBlue",	"LightSkyBlue",	"DeepSkyBlue",	"DodgerBlue",	"CornflowerBlue",	"RoyalBlue",	"Blue",	"MediumBlue",	"DarkBlue",	"Navy",	"MidnightBlue",	"Slateblue",	"Darkslateblue",	"Cornsilk",	"BlanchedAlmond",	"Bisque",	"NavajoWhite",	"Wheat",	"BurlyWood",	"Tan",	"RosyBrown",	"SandyBrown",	"Goldenrod",	"DarkGoldenrod",	"Peru",	"Chocolate",	"SaddleBrown",	"Sienna",	"Brown",	"Maroon",	"White",	"Snow",	"Honeydew",	"MintCream",	"Azure",	"AliceBlue",	"GhostWhite",	"WhiteSmoke",	"Seashell",	"Beige",	"OldLace",	"FloralWhite",	"Ivory",	"AntiqueWhite",	"Linen",	"LavenderBlush",	"MistyRose",	"Gainsboro",	"LightGray",	"LightGrey",	"Silver",	"DarkGray",	"DarkGrey",	"Gray",	"Grey",	"DimGray",	"DimGrey",	"LightSlateGray",	"LightSlateGrey",	"SlateGray",	"SlateGrey",	"DarkSlateGray",	"DarkSlateGrey" ]	
var diffBackground = ["LightYellow",	"LemonChiffon",	"LightGoldenrodYellow",	"PapayaWhip",	"Moccasin",	"PeachPuff",	"PaleGoldenrod",	"Khaki",	"DarkKhaki",	"Lavender",	"Thistle",	"Plum",	"Violet",	"Orchid",	"LightSteelBlue",	"PowderBlue",	"LightBlue",	"SkyBlue",	"LightSkyBlue",	"Cornsilk",	"BlanchedAlmond",	"Bisque",	"NavajoWhite",	"Wheat",	"White",	"Snow",	"Honeydew",	"MintCream",	"Azure",	"AliceBlue",	"GhostWhite",	"WhiteSmoke",	"Seashell",	"Beige",	"OldLace",	"FloralWhite",	"Ivory",	"AntiqueWhite",	"Linen",	"LavenderBlush",	"MistyRose",	"Gainsboro",	"LightGray",	"LightGrey",	"Silver" ]

var allColorsHexCode = ["#cd5c5c",	"#f08080",	"#fa8072",	"#e9967a",	"#ffa07a",	"#dc143c",	"#ff0000",	"#b22222",	"#8b0000",	"#ffc0cb",	"#ffb6c1",	"#ff69b4",	"#ff1493",	"#c71585",	"#db7093",	"#ff7f50",	"#ff6347",	"#ff4500",	"#ff8c00",	"#ffa500",	"#ffd700",	"#ffff00",	"#ffffe0",	"#fffacd",	"#fafad2",	"#ffefd5",	"#ffe4b5",	"#ffdab9",	"#eee8aa",	"#f0e68c",	"#bdb76b",	"#e6e6fa",	"#d8bfd8",	"#dda0dd",	"#ee82ee",	"#da70d6",	"#ff00ff",	"#ff00ff",	"#ba55d3",	"#9370db",	"#8a2be2",	"#9400d3",	"#9932cc",	"#8b008b",	"#800080",	"#663399",	"#4b0082",	"#7b68ee",	"#6a5acd",	"#483d8b",	"#adff2f",	"#7fff00",	"#7cfc00",	"#00ff00",	"#32cd32",	"#98fb98",	"#90ee90",	"#00fa9a",	"#00ff7f",	"#3cb371",	"#2e8b57",	"#228b22",	"#008000",	"#006400",	"#9acd32",	"#6b8e23",	"#808000",	"#556b2f",	"#66cdaa",	"#8fbc8f",	"#20b2aa",	"#008b8b",	"#008080",	"#00ffff",	"#00ffff",	"#e0ffff",	"#afeeee",	"#7fffd4",	"#40e0d0",	"#48d1cc",	"#00ced1",	"#5f9ea0",	"#4682b4",	"#b0c4de",	"#b0e0e6",	"#add8e6",	"#87ceeb",	"#87cefa",	"#00bfff",	"#1e90ff",	"#6495ed",	"#4169e1",	"#0000ff",	"#0000cd",	"#00008b",	"#000080",	"#191970",	"#fff8dc",	"#ffebcd",	"#ffe4c4",	"#ffdead",	"#f5deb3",	"#deb887",	"#d2b48c",	"#bc8f8f",	"#f4a460",	"#daa520",	"#b8860b",	"#cd853f",	"#d2691e",	"#8b4513",	"#a0522d",	"#a52a2a",	"#800000",	"#ffffff",	"#fffafa",	"#f0fff0",	"#f5fffa",	"#f0ffff",	"#f0f8ff",	"#f8f8ff",	"#f5f5f5",	"#fff5ee",	"#f5f5dc",	"#fdf5e6",	"#fffaf0",	"#fffff0",	"#faebd7",	"#faf0e6",	"#fff0f5",	"#ffe4e1",	"#dcdcdc",	"#d3d3d3",	"#d3d3d3",	"#c0c0c0",	"#a9a9a9",	"#a9a9a9",	"#808080",	"#808080",	"#696969",	"#696969",	"#778899",	"#778899",	"#708090",	"#708090",	"#2f4f4f",	"#2f4f4f",	"#000000" ]
var allColors= ["IndianRed",	"LightCoral",	"Salmon",	"DarkSalmon",	"LightSalmon",	"Crimson",	"Red",	"FireBrick",	"DarkRed",	"Pink",	"LightPink",	"HotPink",	"DeepPink",	"MediumVioletRed",	"PaleVioletRed",	"Coral",	"Tomato",	"OrangeRed",	"DarkOrange",	"Orange",	"Gold",	"Yellow",	"LightYellow",	"LemonChiffon",	"LightGoldenrodYellow",	"PapayaWhip",	"Moccasin",	"PeachPuff",	"PaleGoldenrod",	"Khaki",	"DarkKhaki",	"Lavender",	"Thistle",	"Plum",	"Violet",	"Orchid",	"Fuchsia",	"Magenta",	"MediumOrchid",	"MediumPurple",	"BlueViolet",	"DarkViolet",	"DarkOrchid",	"DarkMagenta",	"Purple",	"RebeccaPurple",	"Indigo",	"MediumSlateBlue",	"SlateBlue",	"DarkSlateBlue",	"GreenYellow",	"Chartreuse",	"LawnGreen",	"Lime",	"LimeGreen",	"PaleGreen",	"LightGreen",	"MediumSpringGreen",	"SpringGreen",	"MediumSeaGreen",	"SeaGreen",	"ForestGreen",	"Green",	"DarkGreen",	"YellowGreen",	"OliveDrab",	"Olive",	"DarkOliveGreen",	"MediumAquamarine",	"DarkSeaGreen",	"LightSeaGreen",	"DarkCyan",	"Teal",	"Aqua",	"Cyan",	"LightCyan",	"PaleTurquoise",	"Aquamarine",	"Turquoise",	"MediumTurquoise",	"DarkTurquoise",	"CadetBlue",	"SteelBlue",	"LightSteelBlue",	"PowderBlue",	"LightBlue",	"SkyBlue",	"LightSkyBlue",	"DeepSkyBlue",	"DodgerBlue",	"CornflowerBlue",	"RoyalBlue",	"Blue",	"MediumBlue",	"DarkBlue",	"Navy",	"MidnightBlue",	"Cornsilk",	"BlanchedAlmond",	"Bisque",	"NavajoWhite",	"Wheat",	"BurlyWood",	"Tan",	"RosyBrown",	"SandyBrown",	"Goldenrod",	"DarkGoldenrod",	"Peru",	"Chocolate",	"SaddleBrown",	"Sienna",	"Brown",	"Maroon",	"White",	"Snow",	"Honeydew",	"MintCream",	"Azure",	"AliceBlue",	"GhostWhite",	"WhiteSmoke",	"Seashell",	"Beige",	"OldLace",	"FloralWhite",	"Ivory",	"AntiqueWhite",	"Linen",	"LavenderBlush",	"MistyRose",	"Gainsboro",	"LightGray",	"LightGrey",	"Silver",	"DarkGray",	"DarkGrey",	"Gray",	"Grey",	"DimGray",	"DimGrey",	"LightSlateGray",	"LightSlateGrey",	"SlateGray",	"SlateGrey",	"DarkSlateGray",	"DarkSlateGrey", "Black"]

function randIntFun(min, max){
    return Math.floor(Math.random(min) * Math.floor(max));
}
 
function randomNumbers(min, max){ //This will return whole number. Min & Max inclusive
	var numList = [];
	var minNum = min;
	var maxNum = max;
	var range = (maxNum - minNum) +1;
	var selectedIndex = Math.floor(Math.random() * Math.floor(range));
	for(var i = min; i <= max; i++){
		numList.push(i);
	}
	var result = numList[selectedIndex];
	return result;
}

$(function(){
	$('#screenDim').click(function(){
	var width = screen.width;
	var height = screen.height;
	alert('Width: '+ width +' '+ 'Height' + height);
	});
});

var deviceWidth= screen.width;
var deviceHeight = screen.height;
//var homeBarHeight = $("#homeHeaderBarDiv").attr('height');
$(function(){
	$('#inputColor').keyup(function(){
	//$('#mainHome').css('height', deviceWidth-48+'px');
	var input = $('#inputColor').val(); //Remove all white spaces
	input = input.replace(/\s+/g,'');
	$('#mainHome').css('background-color', input);
	});
	
});
$(function(){
	$('#inputColorPg2').keyup(function(){
	$('#mainPg2').css('height', deviceWidth-48);
	$('#mainPg2').css('background-color', $('#inputColorPg2').val());
	$('#nameTheColor').text($('#inputColorPg2').val());
	});	
});
function setHeight_HomePage(){
		var pos = $('#mainHome').offset();
		var topPos = pos.top;  
		var elementHeight = (deviceHeight - topPos - topPos - 10)+'px';
		$('#mainHome').css('height', elementHeight);
}
/* ------- Testing -------*/
$(function(){
	$('#pressMeHome').click(function(){
	var input = $('#inputColor').val();
	input = input.replace(/\s+/g,''); //Remove all white spaces
	input.toUpperCase();
	alert(input);
	});	
});
/* --------- RGB-HEX Converter -------- */
function componentToHex(c){
	var hex = c.toString(16);
	return hex.length == 1? '0' + hex: hex;
}
function rgbToHex(r, g, b){
	return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgb(hex){
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1],16),
		b: parseInt(result[1],16),
		g: parseInt(result[1],16)
	} : null;
}
/* -----------/RGB-HEX Converter -------- */
/*
$(function(){
	$('#r, #g, #b').change(function(){
	var r = parseInt($('#r').val());
	var g = parseInt($('#g').val());
	var b = parseInt($('#b').val());
	var result = rgbToHex(r, g, b);
	$('#mainPg3').css('background-color', result);
	//alert(result);
	});
});*/

function changeBgroundP3(red){
	var r = parseInt(red);
	var g = parseInt($('#g').val());
	var b = parseInt($('#b').val());
	var result = rgbToHex(r, g, b);
	$('#mainPg3').css('background-color', result);
}

/*var dslider = document.getElementById('dSlider');
var routput= document.getElementById("rr").innerHTML = 'dslider.value';
dslider.oninput = function () {doutput.innerHTML = this.value;}
alert(routput);*/
function redSliderFun(value){
	$('#rr').text(value);
	var rr = parseInt($('#rr').text());
	var gg = parseInt($('#gg').text());
	var bb = parseInt($('#bb').text());
	var result = rgbToHex(rr, gg, bb);
	$('#mainPg3').css('background-color', result);
	$('#nameTheColorPg3S1').text('Color code: '+result);
	
	//Check if color name in allColorsHex List
	var colorFound = allColorsHexCode.includes(result);
	if(colorFound){
		var colorFoundIndex = allColorsHexCode.indexOf(result);
		$('#nameTheColorPg3S2').text('. Name: '+ allColors[colorFoundIndex]);
	}else{$('#nameTheColorPg3S2').text('');
	}
}
function greenSliderFun(value){
	$('#gg').text(value);
	var rr = parseInt($('#rr').text());
	var gg = parseInt($('#gg').text());
	var bb = parseInt($('#bb').text());
	var result = rgbToHex(rr, gg, bb);
	$('#mainPg3').css('background-color', result);
	$('#nameTheColorPg3S1').text('Color code: '+result);
	//$('#nameTheColorPg3S2').text(' Color name: '+ result)

	//Check if color name in allColorsHex List
	var colorFound = allColorsHexCode.includes(result);
	if(colorFound){
		var colorFoundIndex = allColorsHexCode.indexOf(result);
		$('#nameTheColorPg3S2').text('. Name: '+ allColors[colorFoundIndex]);
	}else{$('#nameTheColorPg3S2').text('');
	}
}
function blueSliderFun(value){
	$('#bb').text(value);
	var rr = parseInt($('#rr').text());
	var gg = parseInt($('#gg').text());
	var bb = parseInt($('#bb').text());
	var result = rgbToHex(rr, gg, bb);
	$('#mainPg3').css('background-color', result);
	//$('#mainPg3').css('background', 'linear-gradient('+result+','+result+', snow)');

	$('#nameTheColorPg3S1').text('Color code: '+result);
	//$('#nameTheColorPg3S2').text(' Color name: '+result)

	//Check if color name in allColorsHex List
	var colorFound = allColorsHexCode.includes(result);
	if(colorFound){
		var colorFoundIndex = allColorsHexCode.indexOf(result);
		$('#nameTheColorPg3S2').text('. Name: '+ allColors[colorFoundIndex]);
	}else{$('#nameTheColorPg3S2').text('');
	}
}

function setHeight_Page2(){
		var pos = $('#mainPg2').offset();
		var topPos = pos.top;  
		var elementHeight = (deviceHeight - topPos - topPos) +'px';
		$('#mainPg2').css('height', elementHeight);
}
function setHeight_Page3(){
		var pos = $('#mainPg3').offset();
		var topPos = pos.top;  
		var elementHeight = (deviceHeight - topPos) +'px';
		$('#mainPg3').css('height', elementHeight);
}

$(function(){
	$('#pg3Btn1').click(function(){
	var rr = parseInt($('#rr').text());
	var gg = parseInt($('#gg').text());
	var bb = parseInt($('#bb').text());
	var result = rgbToHex(rr, gg, bb);
	//$('#mainPg3').css('background-color', result);
	
	var colorFound = allColorsHexCode.includes(result);
	if(colorFound == true){
		var colorFoundIndex = allColorsHexCode.indexOf(result);
		alert(colorFoundIndex);
		//$('#nameTheColorPg3S2').text(' Color name: '+ allColors[allColorsHexCode.indexOf(colorFound)]);
	}else{alert(result)}
	});
});


//Note that randomBigColors Function works with randIntFun Function
function randomColors_Home(){setInterval(function(){
	//$('#mainHome').css('height', deviceWidth-48);
    $("#mainHome").css('background-color', randomBigColors());
    }, 10000);
};
function randIntFun(min, max){
    return Math.floor(Math.random(min) * Math.floor(max)); }
function randomBigColors(){
	var r = parseInt(randIntFun(0, 255));
	var g = parseInt(randIntFun(0, 255));
	var b = parseInt(randIntFun(0, 255));
	var result = rgbToHex(r, g, b);
    return (result)
};
/*
$(function(){
	$('#ele5').click(function(){
	var result = 'red';
	$('#ele5').css('background-color', 'red');
	alert(result);
	});
});*/
$(function(){
	$('#selectCat >div:nth-child(1)').click(function(){
	var easySelectBtn =  $('#selectCat >div:nth-child(1)');
	var mediumSelectBtn =  $('#selectCat >div:nth-child(2)');
	var hardSelectBtn =  $('#selectCat >div:nth-child(3)');
	var baloonsCont =  $('#fallingbaloons');
	var questionCont =  $('#nameTheColor');
	var question =  $('#nameTheColor');
	var submitBtn =  $('#game1AnswerBtn');
	var answerInput =  $('#game1Input');
	
	//startGameOne(); //Start Game One
	/*
	$('#gameSelectPg3').css('display', 'none');
	$('#nameTheColor').css('display', 'block');
	$('#game1ClientSec').css('display', 'block');
	$('#fallingbaloons').css('display', 'block');*/
	});
});

var easySelectBtn =  $('#selectCat >div:nth-child(1)');
var mediumSelectBtn =  $('#selectCat >div:nth-child(2)');
var hardSelectBtn =  $('#selectCat >div:nth-child(3)');
var baloonsCont =  $('#fallingbaloons');
var questionCont =  $('#nameTheColor');
var question =  $('#nameTheColor');
var submitBtn =  $('#game1AnswerBtn');
var answerInput =  $('#game1Input');

var gameCat;
var colorList;
var bgroundSoundSrc = 'res/gameBgrdSound1.mp3';
var correctSoundSrc = 'res/gameSoundCorrect.mp3';
var wrongSoundSrc = 'res/gameSoundWrong.mp3';

//Baloon Game Sounds
var bBgroundSoundSrc = 'res/baloonGameBgrdSound.mp3';
var bBurstSoundSrc = 'res/baloonBurst.mp3';
var bScratchSoundSrc = 'res/baloonScratch.mp3';
var bGameOverSoundSrc = 'res/GameOverChariots.mp3';
var bGameWonSrc = 'res/baloonGameWon.mp3';

var bBgroundSound = new Audio(bBgroundSoundSrc);
var bBurstSound = new Audio(bBurstSoundSrc);
var bScratchSound = new Audio(bScratchSoundSrc);
var bGameOverSound = new Audio(bGameOverSoundSrc);
var bGameWonSound = new Audio(bGameWonSrc);


/* ----- Play Audio -------- */
var bgroundSound = new Audio(bgroundSoundSrc); //Creating a music object
var correctSound = new Audio(correctSoundSrc);
var wrongSound = new Audio(wrongSoundSrc);

function playBackgroundSound(){
	bgroundSound.pause(); //
	bgroundSound = new Audio(bgroundSoundSrc);
	bgroundSound.play();
	bgroundSound.loop = true;
}

function playCorrectSound(){
	correctSound.play();
	correctSound.loop = false;
}
function playWrongSound(){
	wrongSound.play();
	wrongSound.loop = false;
}

function startGameOne(game){
	gameCat = game;
	$('#pg2HeaderBarLeftBtn').css('display', 'none');
	$('#gameSelectPg3').css('display', 'none');
	$('#nameTheColor').css('display', 'block');
	$('#game1ClientSec').css('display', 'block');

	$('#nameTheColorDiv').css('display', 'block');
	$('#gameOneScore').css('display', 'block');
	$('#fallingbaloons').css('display', 'block');

	$('#gameOneScoreSp').text('00');
	if(gameCat == 'Easy'){colorList = popularColors; $('#gameOneScoreSp21').text(5);}
	if(gameCat == 'Hard'){colorList = allColors; $('#gameOneScoreSp21').text(10);}
	playGameOne();
	bgroundSound.pause();
	playBackgroundSound();
}

function restartMenuGameOne(){
	if(confirm('Your scores will be lost! Continue?')){
		//var score = $('#gameOneScoreSp').text();
		$('#gameOneScoreSp').text('00');
		$('#gameOneScoreSp21').text(5);
		startGameOne(gameCat);
	}
}

function back2MenuGameOne(){
	if(confirm('Back to Game Menu?')){
		$('#pg2HeaderBarLeftBtn').css('display', 'block');
		$('#gameOneEasy').css('display', 'none');
		$('#gameOneHard').css('display', 'none');
		$('#selectCat').css('display', 'block');

		$('#gameSelectPg3').css('display', 'block');
		$('#nameTheColor').css('display', 'none');
		$('#game1ClientSec').css('display', 'none');
		$('#nameTheColorDiv').css('display', 'none');
		$('#gameOneScore').css('display', 'none');
		$('#fallingbaloons').css('display', 'none');
		bgroundSound.pause();
	}
}
function goToGameOne(){
		$('#gameOneEasy').css('display', 'none');
		$('#gameOneHard').css('display', 'none');
		$('#selectCat').css('display', 'block');

		$('#gameSelectPg3').css('display', 'block');
		$('#nameTheColor').css('display', 'none');
		$('#game1ClientSec').css('display', 'none');
		$('#nameTheColorDiv').css('display', 'none');
		$('#gameOneScore').css('display', 'none');
		$('#fallingbaloons').css('display', 'none');
		bgroundSound.pause();
}
function randomListColorsFunction(list){
	var select = parseInt(randIntFun(0, list.length));
	var result = list[select];
    return (result);
};

var baloonsColor;
function playGameOne(){
	if(gameCat == 'Easy'){
		$('#selectCat').css('display', 'none');
		$('#gameOneEasy').css('display', 'block');
	}
	if(gameCat == 'Hard'){
		$('#selectCat').css('display', 'none');
		$('#gameOneHard').css('display', 'block');
	}

	$('#game1Input').val('');
	baloonsColor = randomListColorsFunction(colorList);
	$('#nameTheColor').css('color', baloonsColor);
	$('#nameTheColor').text('What Color is this?');

	$('.binod').css('background-color', baloonsColor);
}

$(function(){  //Check if answer is eneterd on input
	$('#game1AnswerBtn').click(function(){
	if($('#game1Input').val() != ""){
		submitResult();
	}else{alert('Enter your answer!')}
	});
})

function increaseGameOneLife(){
	var score = $('#gameOneScoreSp').text();
	score = parseInt(score);
	var gameOneLife = $('#gameOneScoreSp21').text();
	gameOneLife = parseInt(gameOneLife);
	if(score%2 == 0){
		gameOneLife += 1;
		$('#gameOneScoreSp21').text(gameOneLife);
	}
}

function submitResult(){ //Check if submitted answer is correct
	var balcolor = baloonsColor.toUpperCase();
	var inputedanswer = $('#game1Input').val();
	var inputedanswerTrim = inputedanswer.toUpperCase();

	var score = $('#gameOneScoreSp').text();
	score = parseInt(score);
	if(inputedanswerTrim == balcolor){
		$('#gameOneScoreSp').text(score+5);
		//alert('Correct!! '+inputedanswer+' is the Color');
		$('#nameTheColor').css('color', balcolor);
		$('#nameTheColor').text('Correct!! "'+inputedanswer+'" is the Color');
		playCorrectSound();
		setTimeout(playGameOne, 3000);
		setTimeout(increaseGameOneLife, 3000);
	}else{$('#nameTheColor').text('"'+inputedanswer+'"  is not the Color!'); 
		$('#game1Input').val(''); playWrongSound();}
}


$(function(){ 	//HELP - Check the Answer
	$('#gameCheckColorBtn').click(function(){
	var gameOneLife = $('#gameOneScoreSp21').text();
	gameOneLife = parseInt(gameOneLife);
	if(gameOneLife <= 0){
		alert('You have no life remaining!')
	}
	if(gameOneLife > 0){
		if(confirm('You want to use your life?')){
			var balcolor = $('#ele1').css('background-color');
			gameOneLife -= 1;
			$('#gameOneScoreSp21').text(gameOneLife);
			//alert(baloonsColor);
			$('#nameTheColor').css('color', balcolor);
			$('#nameTheColor').text('The color is- "'+baloonsColor+'"');
			setTimeout(playGameOne, 5000);
		}
	}
	});
})

/* -------- Baloon Game with Javascript Object -------*/

//--------- Game Reset/Exit Primary Btn --------
$(function(){
	$('#bGameBtn').click(function(){
	var display = $('#exitCont').css('display'); 
	if(display == 'none'){
		$("#exitCont").fadeIn(1000);
		$('#exitCont').css('display', 'block');
		$('#bGameBtn').css('background-color','aqua');
		$('#bGameBtn').css('transform', 'rotate(135deg)');
		setTimeout(btnGameAutoRemove, 3000);	
	}else{$("#exitCont").fadeOut(700);}
	if(display == 'block'){
		$('#bGameBtn').css('background-color','');
		$('#bGameBtn').css('transform', '');
	}
	});
});
//--------- Auto Hide Game Reset/Exit Primary Btn --------
function btnGameAutoRemove(){
	var display = $('#exitCont').css('display'); 
	if(display == 'block'){ //Auto fadeOut after 4sec
		//$("#exitCont").delay(3000).fadeOut(1000);
		$("#exitCont").fadeOut(1000); 
		$('#bGameBtn').css('background-color',''); 
		$('#bGameBtn').css('transform', '');
	}
}

$(function(){  							//Exit Baloon Game
	$('#exitBGameBtn').click(function(){
	clearBGameBallUpdate();
	resetBaloonGame();
	playbBgroundSound(false);
	playbGameWonSound(false);
	$('#pg4HeaderBarLeftBtn').css('display','block');
	$('#startBallGameCont').css('display', 'block');
	$('#colorRotate_burstBaloonCont').css('display', 'block'); 
	$('#gameTwoScoreBoard').css('display', 'none');
	$('#bGameBtnCont').css('display', 'none');
	$('#burstColorCont').css('display', 'none');
	});
});

var balGameTypeEasy = true;
$(function(){  					//Baloon Game start- Easy
	$('#startBallGame').click(function(){
		$('#pg4HeaderBarLeftBtn').css('display','none');
		$('#startBallGameCont').css('display', 'none');
		$('#colorRotate_burstBaloonCont').css('display', 'none'); 
		$('#gameTwoScoreBoard').css('display', 'block');
		$('#bGameBtnCont').css('display', 'block');
		$('#burstColorCont').css('display', 'flex');
		$('#burstColorCont').css('display', 'flex');
		balGameTypeEasy = true;
		startBaloonGame();
	});
});
$(function(){  					//Baloon Game start- Hard
	$('#startBallGameHard').click(function(){
		$('#pg4HeaderBarLeftBtn').css('display','none');
		$('#startBallGameCont').css('display', 'none');
		$('#colorRotate_burstBaloonCont').css('display', 'none'); 
		$('#gameTwoScoreBoard').css('display', 'block');
		$('#bGameBtnCont').css('display', 'block');
		$('#burstColorCont').css('display', 'flex');
		$('#burstColorCont').css('display', 'flex');
		balGameTypeEasy = false;
		startBaloonGame();
	});
});
function changeBalPosition(){ //Change position whenever the ball has reached up
	baloonsList = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 
			'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 
			'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen','turquoise', 'sienna'];
	for(var i = 0; i < baloonsList.length; i++){
		var pos = randomNumbers(0, 92);
		var ballDisplay = $('#'+baloonsList[i]).css('display');
		$('#'+baloonsList[i]).css('left', pos+'vw');
	}
}
function resetBaloonGame(){   //Reset the entire game
	viewList = [];
	hiddenList = [];
	var baloonsList = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 
				'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 
				'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen','turquoise', 'sienna'];
	for(var i = 0; i < baloonsList.length; i++){
		$('#'+baloonsList[i]).css('transform', 'scale(1)');
		$('#'+baloonsList[i]).css('display', 'none');
	}
	$('#bGameOverContPry').css('display', 'none');
	$('#colorRotate_burstBaloonCont').css('display', 'none');
	stopGameTimer();
	noOfBalsToRelease = 1;
}
function checkBaloonGameStatus(){   //Check Game Status
	var baloonsList = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 
				'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 
				'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen','turquoise', 'sienna'];
	for(var i = 0; i < baloonsList.length; i++){
		var ballDisplayCheck = $('#'+baloonsList[i]).css('display');
		var viewListLen = viewList.length;
		if(viewListLen == 0 && ballDisplayCheck == 'none'){
			resetBaloonGame();
		}
	}
}

function youWonBaloonGame(){
	var baloonsList = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 
				'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 
				'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen','turquoise', 'sienna'];
	for(var i = 0; i < baloonsList.length; i++){
		var ballDisplayCheck = $('#'+baloonsList[i]).css('display');
		if(ballDisplayCheck == 'none' && viewList.length == 0){
		//clearBGameBallUpdate();
		resetBaloonGame();	
		$('#bGameOverCall').text('Good Job! You Won!'); //YOU WON;
		$('#balBusrtCountNo').text($('#gameTwoLifeCount').text());
		$('#balBusrtCountTime').text(min+'m '+sec+'s');
		$('#bGameOverContPry').css('display', 'block');	
		$('#burstColorCont').css('display', 'none');
		playbBgroundSound(false);
		playbGameWonSound(true); 
		}			
	}
}
function gameOver_Baloon(){ 		//GAME OVER !!
	$('#bGameOver').text('GAME OVER!!!');
	$('#burstColorCont').css('display', 'none');
	$('#bGameOverContPry').css('display', 'block');  
	clearBGameBallUpdate(); 
	bBgroundSound.pause(); 
	bGameOverSound.play();
	stopGameTimer();
	//bgameOn = false;
}

$(function(){  					//Restart Baloon Game
	$('#pulseBGameBtn').click(function(){
	resetBaloonGame();
	$('#bGameBtn').css('background-color','dodgerblue');
	$('#bGameBtn').css('transform', 'rotate(0deg)');
	$("#exitCont").fadeOut(700);
	//stopGameTimer();
	//$('#gameTwoScore').text('0');
	//sec = 0; min = 0;
	$('#gameTwoScoreCount').text('0');
	$('#gameTwoLifeCount').text('0');
	//resetBaloonGame();
	startBaloonGame();
	});
});
/*-------Start Baloon Game ------------*/
var viewList = []; var hiddenList = [];
var noOfBalsToRelease = 1;
function startBaloonGame(){
	var baloonsList = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 
				'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 
				'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen','turquoise', 'sienna'];
	clearBGameBallUpdate();
	startGameTimer();
	playbGameWonSound(false);
	playbBgroundSound(false);
	playbBgroundSound(true);
	//resetBaloonGame();
	//bgameOn = true;
	$('#burstColorCont').css('display', 'flex');
	$('#bGameOverContPry').css('display', 'none');
	$('#colorRotate_burstBaloonCont').css('display', 'none');
	for(var i = 0; i < baloonsList.length; i++){	//First add all the balls to the hiddenList
		hiddenList.push(baloonsList[i]);
	}
	var addBalls;
	for(var i = 0; i <6 ; i++){
		var addBalls = randomListColorsFunction(hiddenList);
		viewList.push(addBalls);	
		var pos = randomNumbers(0, 92);
		var scaleSize = randomNumbers(1, 6);
		$('#'+addBalls).css('transform', 'scale('+scaleSize+')'); //Resize Ball
		$('#'+addBalls).css('left', pos+'vw'); //Change position
		$('#'+addBalls).css('display', 'block');		//Display the baloon
		hiddenList.splice(hiddenList.indexOf(addBalls), 1);		//Delete the ball from hiddenCol List
	}
	var ballToDisplay = randomListColorsFunction(viewList);
	$('#burstColorSp').text(ballToDisplay); //Diplay a baloon to burst
	if(balGameTypeEasy == true){ //For easy Game
		$('#burstColor').css('background-color', ballToDisplay);
	}else{$('#burstColor').css('background-color', '');}
	setBalGameBallInterval(); //Call ball update function at game start
}
/*------ Game Timer Starts ------*/
var balGameTime;
function startGameTimer(){
	sec = 0; min = 0;
	balGameTime = setInterval(function(){gameTime();}, 1000);
}
function stopGameTimer(){
	clearInterval(balGameTime);
}

var sec = 0;
var min = 0;
function gameTime(){ 	
	sec += 1;
	if(sec == 60 ){
	  	sec = 0;
	 	min += 1; 
	}
	$('#gameTwoScore').text(min+'m');
	$('#gameTwoScoreCount').text(sec+'s');
	
}
/*------ Game Timer Ends ------*/
var gameTwoCount = 0;
function selBall(ballID){ 
	var ballToRemove = ballID;
	var scoreGame = parseInt($('#gameTwoLifeCount').text());
	var displayColor = $('#burstColorSp').text();
	if(ballToRemove == displayColor){
		var indexToRemove = viewList.indexOf(ballToRemove);		
		viewList.splice(indexToRemove, 1);  //Remove the burst color from viewCol List
		hiddenList.push(ballToRemove);		//Add the ball to hiddenCol List
		$('#'+ballToRemove).css('transform', 'scale(1)'); //Reset the ball size to 1
		$('#'+ballToRemove).css('display', 'none'); //Burst the baloon ie. display= none
		playbBurstSound(); 
		$('#gameTwoLifeCount').text(scoreGame +=1);
		checkBaloonGameStatus();
		var nextRandColor = randomListColorsFunction(viewList);
		$('#burstColorSp').text(nextRandColor); //Select a new ball and display
		if(balGameTypeEasy == true){ //For easy Game
			$('#burstColor').css('background-color', nextRandColor);
			}else{$('#burstColor').css('background-color', '');
		}
		youWonBaloonGame();  //Check if you win.
	}
	for(var i = 0; i <viewList.length ; i++){ 	//Always ensure No ball is hidden in viewList
		$('#'+viewList[i]).css('display', 'block');
	}

}
$(function(){ //Change Next display ball
	$('#burstColorCont').click(function(){
	if(balGameTypeEasy == true){
		var nextRandColor = randomListColorsFunction(viewList);
		$('#burstColorSp').text(nextRandColor);
		$('#burstColor').css('background-color', nextRandColor);
	}
	changeBalPosition();
	});
});
function playbBgroundSound(play){
	if(play == true){
		bBgroundSound.pause();
		bBgroundSound.play();bBgroundSound.loop = true;
	}else{bBgroundSound.loop = false;bBgroundSound.pause();}
}
function playbGameWonSound(play){
	if(play == true){
		bGameWonSound.pause();
		bGameWonSound.play();bGameWonSound.loop = true;
	}else{bGameWonSound.loop = false;bGameWonSound.pause();}
}
function playbBurstSound(){bBurstSound.play();bBurstSound.loop = false;}
function playbScratchSound(){bScratchSound.play();bScratchSound.loop = false;}
function playbGameOverSound(){bGameOverSound.play();bGameOverSound.loop = false;}

var baloonUpdateInterval;
var generateNewBalInterval = 2000;
function clearBGameBallUpdate(){
	clearInterval(baloonUpdateInterval)} //Stop the update

function setBalGameBallInterval(){	//Start update
	baloonUpdateInterval = setInterval(function(){releaseNewBal();}, 
		generateNewBalInterval);
}

function releaseNewBal(){
	youWonBaloonGame();
	//changeBalPosition();
	//var indexOfBallToAdd = hiddenCol.indexOf(newBallToAdd); // Get the index of the ball
	if(hiddenList.length != 0){  //Stop release when hiddenList List is empty
		//for(var i = 0; i <= noOfBalsToRelease ; i++){
		var newBallToAdd = randomListColorsFunction(hiddenList); //Select a new ball
		hiddenList.splice(hiddenList.indexOf(newBallToAdd), 1); //Delete the ball from hiddenCol List
		var scaleSize = randomNumbers(1, 7);
		var pos = randomNumbers(0, 92);
		$('#'+newBallToAdd).css('transform', 'scale('+scaleSize+')'); //Resize Ball
		$('#'+newBallToAdd).css('left', pos+'vw'); //Change position
		viewList.push(newBallToAdd); //Add it to viewList List
		$('#'+newBallToAdd).css('display', 'block'); //Change display to block
		$('#gameTwoScoreBoard').css('background-color', newBallToAdd);
		//$('#gameTwoScoreBoard').css('background-color', '');
		//}
	}
	if(hiddenList.length == 1){  
		gameOver_Baloon()}
	setTimeout(function(){$('#gameTwoScoreBoard').css('background-color', '')}, 500);
}





/*------ Testing Game -------
$(function(){  					
	$('#pg4HeaderBarRightBtn').click(function(){
	//changeBalPosition();
	alert(generateNewBalInterval);
	});
});

$(function(){  					
	$('#burstColorCont11').click(function(){
	resetBaloonGame();
	});
});

$(function(){  				
	$('#gameTwoScoreBoard').click(function(){
	alert(viewList+'. Length- '+viewList.length +'\n .HiddenList: '+hiddenList+'. Length- '+hiddenList.length);
	});
});
*/
/*
function selBall(ballID){
	//alert($('#'+addBalls).css('transform'));
	var size = $('#'+ballID).css('transform');
	alert(size);
}*/















/*------ Starting with Array------ 
function playbBgroundSound(){bBgroundSound.play();bBgroundSound.loop = true;}
function playbBurstSound(){bBurstSound.play();bBurstSound.loop = false;}
function playbScratchSound(){bScratchSound.play();bScratchSound.loop = false;}
function playbGameOverSound(){bGameOverSound.play();bGameOverSound.loop = false;}

var baloonUpdateInterval;
var generateNewBalInterval = 5000;
var bgameOn = true;
function bgameOverFun(){
	$('#bGameOver').text('GAME OVER!!!');
	$('#burstColorCont').css('display', 'none');
	$('#bGameOverContPry').css('display', 'block');  
	clearBGameBallUpdate(); 
	bBgroundSound.pause(); 
	bGameOverSound.play();
	stopGameTimer();
	bgameOn = false;
}
function bgameYouWon(){
	var allBaloons = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen', 'turquoise', 'sienna'];
	for(var i = 0; i < allBaloons.length; i++){
		var ballDisplayCheck = $('#'+allBaloons[i]).css('display');
		if(ballDisplayCheck == 'none' && viewCol.length == 0){
		clearBGameBallUpdate();
		stopGameTimer();
		resetBaloonGame();	
		$('#bGameOverCall').text('Good Job! You Won!'); //YOU WON;
		$('#balBusrtCountNo').text($('#gameTwoLifeCount').text());
		$('#balBusrtCountTime').text(min+'m '+sec+'s');
		$('#bGameOverContPry').css('display', 'block');	
		$('#burstColorCont').css('display', 'none');
		}			
	} 
}
var baloonUpdateInterval;
var generateNewBalInterval = 5000;
function clearBGameBallUpdate(){
	clearInterval(baloonUpdateInterval);} //Stop the update

function setBalGameBallInterval(){
	baloonUpdateInterval = setInterval(function(){releaseNewBal();}, 
		generateNewBalInterval);
}

function changeBalPosition(){ //Change position whenever the ball has reached up
	if(balGameTypeEasy == false){
		allballs =  ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen', 'turquoise', 'sienna'];
		for(var i = 0; i < allballs.length; i++){
			var ballPos = $('#'+allballs[i]).css('top');
			var ballDisplay = $('#'+allballs[i]).css('display');
			if(ballDisplay == 'block'){
				var pos = randIntFun(6, 90);
				$('#'+allballs[i]).css('left', pos+'vw');
			}
		}
	}
}

function releaseNewBal(){
	changeBalPosition();
		//var indexOfBallToAdd = hiddenCol.indexOf(newBallToAdd); // Get the index of the ball
	if(hiddenCol.length != 0){  //Stop release when hiddenCol List is empty
		var newBallToAdd = randomListColorsFunction(hiddenCol); //Select a new ball
		hiddenCol.splice(hiddenCol.indexOf(newBallToAdd), 1); //Delete the ball from hiddenCol List
		var scaleSize = randNoFun(1, 7);
		var pos = randIntFun(5, 100);
		$('#'+newBallToAdd).css('transform', 'scale(1)'); //First reset ball size		
		//$('#'+newBallToAdd).css('transform', 'scale('+scaleSize+')'); //Resize Ball
		$('#'+newBallToAdd).css('left', pos+'vw'); //Change position
		viewCol.push(newBallToAdd); //Add it to viewCol List
		$('#'+newBallToAdd).css('display', 'block'); //Change display to block
	}else {bgameOverFun();}
}

var viewCol = [];
var hiddenCol = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen', 'turquoise', 'sienna'];
function resetBaloonGame(){   //Reset the entire game
	viewCol.splice(0, viewCol.length); //Delete all items. viewCol =[] will not work
	hiddenCol.splice(0, hiddenCol.length);
	hiddenColDemo =  ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen', 'turquoise', 'sienna'];
	for(var i = 0; i < hiddenColDemo.length; i++){
		$('#'+hiddenColDemo[i]).css('transform', 'scale(1)'); //First Reset all Ballsizes				
		$('#'+hiddenColDemo[i]).css('display', 'none');
		hiddenCol.push(hiddenColDemo[i]);
	}
	$('#bGameOverContPry').css('display', 'none');
	$('#colorRotate_burstBaloonCont').css('display', 'none');
}

function startBaloonGame(){
	playbBgroundSound();
	resetBaloonGame();
	startGameTimer();
	bgameOn = true;
	$('#burstColorCont').css('display', 'flex');
	$('#bGameOverContPry').css('display', 'none');
	$('#colorRotate_burstBaloonCont').css('display', 'none');
	var addBalls = 5;
	for(var i = 0; i < addBalls; i++){	
		var newBallToAdd = randomListColorsFunction(hiddenCol);
		viewCol.push(newBallToAdd);		//Add balls to viewCol List
		var scaleSize = randNoFun(1, 5);
		var pos = randIntFun(6, 95);		
		$('#'+newBallToAdd).css('transform', 'scale('+scaleSize+')'); //Resize Ball
		$('#'+newBallToAdd).css('left', pos+'vw'); //Change position
		$('#'+newBallToAdd).css('display', 'block');		//Display the baloon
		hiddenCol.splice(hiddenCol.indexOf(newBallToAdd), 1);		//Delete the ball from hiddenCol List
	}
	$('#burstColorSp').text(newBallToAdd); //Diplay a baloon to burst
	if(balGameTypeEasy == true){ //For easy Game
		$('#burstColor').css('background-color', newBallToAdd);
	}else{$('#burstColor').css('background-color', '');}
	setBalGameBallInterval();
}

var gameTwoCount = 0;
function selBall(ballID){ 
	var ballToRemove = ballID;
	var scoreGame = parseInt($('#gameTwoLifeCount').text());
	var displayColor = $('#burstColorSp').text();
	if(bgameOn){	
		if(ballToRemove === displayColor){
			var indexToRemove = viewCol.indexOf(ballToRemove);		
			viewCol.splice(indexToRemove, 1);  //Remove the burst color from viewCol List
			hiddenCol.push(ballToRemove);		//Add the ball to hiddenCol List
			$('#'+ballToRemove).css('display', 'none'); //Burst the baloon ie. display= none
			playbBurstSound(); 
			$('#gameTwoLifeCount').text(scoreGame +=1);
			for(var i = 0; i < hiddenCol.length; i++){ //Reset the scale/size to 1
				$('#'+hiddenCol[i]).css('transform', 'scale(1)');
			}
			var nextRandColor = randomListColorsFunction(viewCol);
			$('#burstColorSp').text(nextRandColor); //Select a new ball and display
			if(balGameTypeEasy == true){ //For easy Game
				$('#burstColor').css('background-color', nextRandColor);
				}else{$('#burstColor').css('background-color', '');
			}
			bgameYouWon();  //Check if you win.
		}
	}
}
//
$(function(){ //Change Nextball
	$('#burstColorCont').click(function(){
	if(balGameTypeEasy == true){
		var nextRandColor = randomListColorsFunction(viewCol);
		$('#burstColorSp').text(nextRandColor);
		$('#burstColor').css('background-color', nextRandColor);
	}
	});
});

var balGameTime;
function startGameTimer(){
	balGameTime = setInterval(function(){gameTime();}, 1000);
}
function stopGameTimer(){
	clearInterval(balGameTime);
	clearInterval(balGameTime);
}

var sec = 0;
var min = 0;
function gameTime(){ 	
	sec += 1;
	if(sec == 60 ){
	  	sec = 0;
	 	min += 1; 
	}
	$('#gameTwoScore').text(min+'m');
	$('#gameTwoScoreCount').text(sec+'s');
	
}
//--------- Game Control Btns --------
$(function(){
	$('#bGameBtn').click(function(){

	var display = $('#exitCont').css('display'); 
	if(display == 'none'){
		$("#exitCont").fadeIn(1000);
		$('#exitCont').css('display', 'block');
		$('#bGameBtn').css('background-color','aqua');
		$('#bGameBtn').css('transform', 'rotate(135deg)');
		setTimeout(btnGameAutoRemove, 3000);	
	}else{$("#exitCont").fadeOut(700);}
	if(display == 'block'){
		$('#bGameBtn').css('background-color','');
		$('#bGameBtn').css('transform', '');
	}
	});
});
function btnGameAutoRemove(){
	var display = $('#exitCont').css('display'); 
	if(display == 'block'){ //Auto fadeOut after 4sec
		//$("#exitCont").delay(3000).fadeOut(1000);
		$("#exitCont").fadeOut(1000); 
		$('#bGameBtn').css('background-color',''); 
		$('#bGameBtn').css('transform', '');
	}
}
var balGameTypeEasy = true;
$(function(){  					//Baloon Game start- Easy
	$('#startBallGame').click(function(){
		$('#pg4HeaderBarLeftBtn').css('display','none');
		$('#startBallGameCont').css('display', 'none');
		$('#colorRotate_burstBaloonCont').css('display', 'none'); 
		$('#gameTwoScoreBoard').css('display', 'block');
		$('#bGameBtnCont').css('display', 'block');
		$('#burstColorCont').css('display', 'flex');
		$('#burstColorCont').css('display', 'flex');
		balGameTypeEasy = true;
		startBaloonGame();
	});
});
$(function(){  					//Baloon Game start- Hard
	$('#startBallGameHard').click(function(){
		$('#pg4HeaderBarLeftBtn').css('display','none');
		$('#startBallGameCont').css('display', 'none');
		$('#colorRotate_burstBaloonCont').css('display', 'none'); 
		$('#gameTwoScoreBoard').css('display', 'block');
		$('#bGameBtnCont').css('display', 'block');
		$('#burstColorCont').css('display', 'flex');
		$('#burstColorCont').css('display', 'flex');
		balGameTypeEasy = false;
		startBaloonGame();
	});
});

$(function(){  					//Restart Baloon Game
	$('#pulseBGameBtn').click(function(){
	$('#bGameBtn').css('background-color','dodgerblue');
	$('#bGameBtn').css('transform', 'rotate(0deg)');
	$("#exitCont").fadeOut(700);
	stopGameTimer();
	$('#gameTwoScore').text('0');
	sec = 0; min = 0;
	$('#gameTwoScoreCount').text('0');
	$('#gameTwoLifeCount').text('0');
	resetBaloonGame();
	startBaloonGame();

	});
});
$(function(){  					//Exit Baloon Game
	$('#exitBGameBtn').click(function(){
	clearBGameBallUpdate();
	resetBaloonGame();
	//bBgroundSound.pause();
	//hiddenColDemo2 =  ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral'];
	//for(var i = 0; i < hiddenColDemo2.length; i++){ //Reset the scale/size to 1
	//	$('#'+hiddenColDemo2[i]).css('transform', 'scale(1)');
	//	$('#'+hiddenColDemo2[i]).css('display', 'none');
	//}
	$('#pg4HeaderBarLeftBtn').css('display','block');
	$('#startBallGameCont').css('display', 'block');
	$('#colorRotate_burstBaloonCont').css('display', 'block'); 
	$('#gameTwoScoreBoard').css('display', 'none');
	$('#bGameBtnCont').css('display', 'none');
	$('#burstColorCont').css('display', 'none');

	});
});
// ---------Burst the Baloon Game Workin ----------

$(function(){  					//Restart Baloon Game
	$('#pg4HeaderBarRightBtn').click(function(){
	var viewList = viewCol;
	var viewListLen = viewCol.length;
	var hiddenList = hiddenCol;
	var hiddenListLen = hiddenCol.length;
	alert('ViewList: '+viewList+'. Length: '+viewListLen+'\n HiddenList: '+hiddenList+'. HiddenListLen: '+hiddenListLen)
	});
});
var baloonsList = {ball1:'aqua', ball2:'gold', ball3:'skyblue', ball4:'magenta', ball5:'maroon', ball6:'crimson', ball7:'pink', ball8:'violet', ball9:'indigo', ball10:'blue', 
				ball11:'white', ball12:'black', ball13:'gray', ball14:'chocolate', ball15:'teal', ball16:'green', ball17:'red', ball18:'yellow', ball19:'purple', ball20:'lime', 
				ball21:'coral', ball22:'orange', ball23:'khaki', ball24:'navy', ball25:'seagreen', ball26:'olive', ball27:'wheat', ball28:'linen', ball29:'turquoise', ball30:'sienna'};

*/
var a;