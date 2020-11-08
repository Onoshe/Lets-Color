

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

var deviceWidth= screen.width;   //No measurement, ie 'px', etc
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
		var elementHeight = (deviceHeight*0.60)+'px';
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

var allBallsColor1= ["IndianRed",	"LightCoral",	"Salmon",	"DarkSalmon",	"LightSalmon",	"Crimson",	"Red",	"FireBrick",	"DarkRed",	"Pink",	"LightPink",	"HotPink",	"DeepPink",	"MediumVioletRed",	"PaleVioletRed",	"Coral",	"Tomato",	"OrangeRed",	"DarkOrange",	"Orange",	"Gold",	"Yellow",	"LightYellow",	"LemonChiffon",	"LightGoldenrodYellow",	"PapayaWhip",	"Moccasin",	"PeachPuff",	"PaleGoldenrod",	"Khaki",	"DarkKhaki",	"Lavender",	"Thistle",	"Plum",	"Violet",	"Orchid",	"Fuchsia",	"Magenta",	"MediumOrchid",	"MediumPurple",	"BlueViolet",	"DarkViolet",	"DarkOrchid",	"DarkMagenta",	"Purple",	"RebeccaPurple",	"Indigo",	"MediumSlateBlue",	"SlateBlue",	"DarkSlateBlue",	"GreenYellow",	"Chartreuse",	"LawnGreen",	"Lime",	"LimeGreen",	"PaleGreen",	"LightGreen",	"MediumSpringGreen",	"SpringGreen",	"MediumSeaGreen",	"SeaGreen",	"ForestGreen",	"Green",	"DarkGreen",	"YellowGreen",	"OliveDrab",	"Olive",	"DarkOliveGreen",	"MediumAquamarine",	"DarkSeaGreen",	"LightSeaGreen",	"DarkCyan",	"Teal",	"Aqua",	"Cyan",	"LightCyan", "PaleTurquoise",	"Aquamarine",	"Turquoise",	"MediumTurquoise",	"DarkTurquoise",	"CadetBlue",	"SteelBlue",	"LightSteelBlue",	"PowderBlue",	"LightBlue",	"SkyBlue",	"LightSkyBlue",	"DeepSkyBlue",	"DodgerBlue",	"CornflowerBlue",	"RoyalBlue",	"Blue",	"MediumBlue",	"DarkBlue",	"Navy",	"MidnightBlue",	"Cornsilk",	"BlanchedAlmond",	"Bisque",	"NavajoWhite",	"Wheat",	"BurlyWood",	"Tan",	"RosyBrown",	"SandyBrown",	"Goldenrod",	"DarkGoldenrod",	"Peru",	"Chocolate",	"SaddleBrown",	"Sienna",	"Brown",	"Maroon",	"White",	"Snow",	"Honeydew",	"MintCream",	"Azure",	"AliceBlue",	"GhostWhite",	"WhiteSmoke",	"Seashell",	"Beige",	"OldLace",	"FloralWhite",	"Ivory",	"AntiqueWhite",	"Linen",	"LavenderBlush",	"MistyRose",	"Gainsboro",	"LightGray",	"LightGrey",	"Silver",	"DarkGray",	"DarkGrey",	"Gray",	"Grey",	"DimGray",	"DimGrey",	"LightSlateGray",	"LightSlateGrey",	"SlateGray",	"SlateGrey",	"DarkSlateGray",	"DarkSlateGrey", "Black"];
var num = 0;
$(function(){  						
	$('#page3TestBtn1').click(function(){
	if(num < allBallsColor1.length){
		var col = allBallsColor1[num];
		//$('#nameTheColorPg3S1').text('Color name: '+col+' No: '+num);
		$('#nameTheColorPg3S1').text('Color name: '+col);
		$('#mainPg3').css('background-color', col);
	}
	if(num == allBallsColor1.length-1){
		num = allBallsColor1.length-1;
	}else{ num += 1}
	});
});
$(function(){  				
	$('#page3TestBtn2').click(function(){
	if(num > 0){
		num -= 1;
	var col = allBallsColor1[num];
	$('#nameTheColorPg3S1').text('Color name: '+col);
	$('#mainPg3').css('background-color', col);
	}
	});
});

function setHeight_Page2(){
		var pos = $('#mainPg2').offset();
		var topPos = pos.top;  
		var elementHeight = (deviceHeight*0.60) +'px';
		$('#mainPg2').css('height', elementHeight);
}
function setHeight_Page3(){
		var pos = $('#mainPg3').offset();
		var topPos = pos.top;  
		var elementHeight = (deviceHeight*0.60) +'px';
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
var bBgroundSoundSrc = '../baloonGameBgrdSound.mp3';
var bBurstSoundSrc = '../baloonBurst.mp3';
var bScratchSoundSrc = '../baloonScratch.mp3';
var bGameOverSoundSrc = '../GameOverChariots.mp3';
var bGameWonSrc = '../baloonGameWon.mp3';

var bBgroundSound = new Audio(bBgroundSoundSrc);
var bBurstSound = new Audio(bBurstSoundSrc);
var bScratchSound = new Audio(bScratchSoundSrc);
var bGameOverSound = new Audio(bGameOverSoundSrc);
var bGameWonSound = new Audio(bGameWonSrc);

//Game3 Sounds
var bBgroundSoundGame3Src = 'res/gameBgrdSoundGame3.mp3';
var bBgroundSoundGame3 = new Audio(bBgroundSoundGame3Src);
function playBackgroundSoundGame3(){
	bBgroundSoundGame3.pause(); //
	bBgroundSoundGame3 = new Audio(bBgroundSoundGame3Src);
	bBgroundSoundGame3.play();
	bBgroundSoundGame3.loop = true;
}

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
	wrongSound.currentTime = 0;
	correctSound.play();
	correctSound.loop = false;
}
function playWrongSound(){
	correctSound.currentTime = 0;
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
function removeBallText(){
	$('.binod').text('');
}

function submitResult(){ //Check if submitted answer is correct
	var balcolor = baloonsColor.toUpperCase();
	var inputedanswer = $('#game1Input').val();
	inputedanswer = inputedanswer.trim();
	var inputedanswerTrim = inputedanswer.toUpperCase();
	inputedanswerTrim = inputedanswerTrim.trim();

	var score = $('#gameOneScoreSp').text();
	score = parseInt(score);
	if(inputedanswerTrim == balcolor){
		$('#gameOneScoreSp').text(score+5);
		//alert('Correct!! '+inputedanswer+' is the Color');
		$('#nameTheColor').css('color', balcolor);
		$('#nameTheColor').text('Correct!! "'+inputedanswer+'" is the Color');
		$('.binod').text(inputedanswerTrim);
		playCorrectSound();
		setTimeout(playGameOne, 3000);
		setTimeout(increaseGameOneLife, 3000);
		setTimeout(removeBallText, 3000);
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
			$('.binod').text(baloonsColor);
			$('#nameTheColor').text('The color is- "'+baloonsColor+'"');
			setTimeout(removeBallText, 3000);
			setTimeout(playGameOne, 5000);
		}
	}
	});
})

/* -------- Baloon Game with Javascript  -------*/

//--------- Game Reset/Exit Primary Btn --------
var generateNewBalInterval = 4000;
var CompletedL1 = false; var CompletedL2 = false; var CompletedL3 = false;
var CompletedL4 = false; var CompletedL5 = false;
$(function(){
	$('#bGameBtn').click(function(){
	var display = $('#exitCont').css('display');
	if(CompletedL5 == true){$('#pulseBGameBtn').css('visibility', 'visible')}else{$('#pulseBGameBtn').css('visibility', 'hidden')} 
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

function exitBalloonGame(){			//Stop Baloon Game FUnction
	clearBGameBallUpdate();
	resetBaloonGame();
	playbBgroundSound(false);
	playbGameWonSound(false);
	$('#pg4HeaderBarLeftBtn').css('display','block');
	$('#startBallGame').css('visibility', 'visible'); // Easy Button
	$('#startBallGameHard').css('visibility', 'visible'); // Hard Button
	$('#startBallGameCont').css('display', 'block');
	$('#colorRotate_burstBaloonCont').css('display', 'block'); 
	$('#gameTwoScoreBoard').css('display', 'none');
	$('#bGameBtnCont').css('display', 'none');
	$('#burstColorCont').css('display', 'none');
	
	CompletedL1 = false; CompletedL2 = false; CompletedL3 = false;
	CompletedL4 = false; CompletedL5 = false;
	var openClass = 'ui-btn ui-btn-inline ui-icon-lock ui-btn-icon-bottom';
	var openClass2 = 'ui-btn ui-btn-inline ui-icon-check ui-btn-icon-bottom';
	$('#gameTwoNextLevel1').attr('class', openClass2);
	$('#gameTwoNextLevel1').css('background-color', 'lightgray');
	$('#gameTwoNextLevel2').attr('class', openClass);
	$('#gameTwoNextLevel2').css('background-color', 'lightgray');
	$('#gameTwoNextLevel3').attr('class', openClass);
	$('#gameTwoNextLevel3').css('background-color', 'lightgray');
	$('#gameTwoNextLevel4').attr('class', openClass);
	$('#gameTwoNextLevel4').css('background-color', 'lightgray');
	$('#gameTwoNextLevel5').attr('class', openClass);
	$('#gameTwoNextLevel5').css('background-color', 'lightgray');
}

$(function(){  							//Exit Baloon Game. Attache Stop to a button
	$('#exitBGameBtn').click(function(){
		if(confirm('You want to exit game?')){
			exitBalloonGame();
		}
	});
});
$(function(){  							//Game Level back
	$('#pg4HeaderBarRightBtn').click(function(){
		$('#gameTwoLevelGenCont').css('display', 'none'); //Levels container
		$('#pg4HeaderBarRightBtn').css('display', 'none'); //Back button
		$('#startBallGame').css('visibility', 'visible'); // Easy Button
		$('#startBallGameHard').css('visibility', 'visible'); // Hard Button
		$('#startBallGameCont').css('display', 'block'); // Easy & Hard Button Cont
		$('#colorRotate_burstBaloonCont').css('display', 'block');
	});
});

var balGameTypeEasy = true;
var bGameCurrentLevel;
function baloonGameSelect(type){
	//$('#pg4HeaderBarLeftBtn').css('display','none');
	if(type == 'Easy'){
		$('#pg4HeaderBarRightBtn').css('display', 'block'); //Back button
		$('#startBallGameHard').css('visibility', 'hidden'); //Hide Hard Button
		$('#colorRotate_burstBaloonCont').css('display', 'none'); //Hide
		$('#gameTwoLevelGenCont').css('display', 'block'); //Levels container
		balGameTypeEasy = true;
	}

	if(type == 'Hard'){
		$('#pg4HeaderBarRightBtn').css('display', 'block'); //Back button
		$('#startBallGame').css('visibility', 'hidden'); //Hide Easy Button
		$('#colorRotate_burstBaloonCont').css('display', 'none'); //Hide 
		$('#gameTwoLevelGenCont').css('display', 'block'); //Levels container
		balGameTypeEasy = false;
	}
}
function bGameLevelSelect(){
	if(balGameTypeEasy == true){
		$('#gameTwoLevelGenCont').css('display', 'none'); //Levels container
		$('#pg4HeaderBarRightBtn').css('display', 'none'); //Back button
		bGameCurrentLevel = 1;
		bGameEasyStart();
	}
	if(balGameTypeEasy == false){
		$('#gameTwoLevelGenCont').css('display', 'none'); //Levels container
		$('#pg4HeaderBarRightBtn').css('display', 'none'); //Back button
		bGameCurrentLevel = 1;
		bGameHardStart();
	}
}

function  bGameEasyStart(){  					//Baloon Game start- Easy
	//$('#startBallGame1').text();
		$('#pg4HeaderBarLeftBtn').css('display','none');
		$('#startBallGameCont').css('display', 'none');
		$('#colorRotate_burstBaloonCont').css('display', 'none'); 
		$('#gameTwoScoreBoard').css('display', 'block');
		$('#bGameBtnCont').css('display', 'block');
		$('#burstColorCont').css('display', 'flex');
		$('#burstColorCont').css('display', 'flex');
		$('#gameTwoLevelCount').text(1); //Start with Level1
		$('#bGamenextLevel').text(2); //Next Level is 2

		$('#gameTwoScoreCount').text('0');
		$('#gameTwoLifeCount').text('0');
		balGameTypeEasy = true;
		responsiveBallonListSize();
		startBaloonGame();
}

function  bGameHardStart(){  				//Baloon Game start- Hard
		$('#pg4HeaderBarLeftBtn').css('display','none');
		$('#startBallGameCont').css('display', 'none');
		$('#colorRotate_burstBaloonCont').css('display', 'none'); 
		$('#gameTwoScoreBoard').css('display', 'block');
		$('#bGameBtnCont').css('display', 'block');
		$('#burstColorCont').css('display', 'flex');
		$('#burstColorCont').css('display', 'flex');
		$('#gameTwoLevelCount').text(1); //Start with Level1
		$('#bGamenextLevel').text(2); //Next Level is 2

		$('#gameTwoScoreCount').text('0');
		$('#gameTwoLifeCount').text('0');
		balGameTypeEasy = false;
		responsiveBallonListSize();
		startBaloonGame();
}

function bGameNextLevelSelect(level){	//Change Level from Level Completed Display
	if(level == 1){
			$('#gameTwoLevelCount').text(1);
			generateNewBalInterval = 4000;
			changeBGameLevel();
			//$('#gameTwoNextLevel2').attr('class', 'ui-btn ui-btn-inline ui-icon-carat-r ui-btn-icon-bottom');
	}
	if(level == 2 && CompletedL1 == true){
		$('#gameTwoLevelCount').text(2);
		generateNewBalInterval = 3000;  //3000
		changeBGameLevel();
	}
	if(level == 3 && CompletedL2 == true){
		$('#gameTwoLevelCount').text(3);
		generateNewBalInterval = 1500;  //1500
		changeBGameLevel();
	}
	if(level == 4 && CompletedL3 == true){
		$('#gameTwoLevelCount').text(4);
		generateNewBalInterval = 700;  //700
		changeBGameLevel();
	}
	if(level == 5 && CompletedL4 == true){
		$('#gameTwoLevelCount').text(5);
		generateNewBalInterval = 500;  //500
		changeBGameLevel();
	}

}

function changeBGameLevel(){				//Change Game Level
 	resetBaloonGame(); 	//Reset list, gameTimer
	$('#gameTwoScoreCount').text('0');
	$('#gameTwoLifeCount').text('0');
	playbBgroundSound(false);
	startBaloonGame();
}

function bGameNextLevelSet(){   //Function to be called from BalExhaustedCheck Function
	var openClass = 'ui-btn ui-btn-inline ui-icon-carat-r ui-btn-icon-bottom';
	var openClassFull = 'ui-btn ui-btn-inline ui-icon-check ui-btn-icon-bottom';
	
	if(CompletedL1 == true){$('#gameTwoNextLevel2').attr('class', openClass);
		//$('#gameTwoNextLevel2').css('background-color', 'cyan');
		$('#gameTwoNextLevel1').attr('class', openClassFull);
		$('#gameTwoNextLevel1').css('background-color', 'lime');
	}
	if(CompletedL2 == true){$('#gameTwoNextLevel3').attr('class', openClass);
		//$('#gameTwoNextLevel3').css('background-color', 'cyan');
		$('#gameTwoNextLevel2').attr('class', openClassFull);
		$('#gameTwoNextLevel2').css('background-color', 'lime');
	}
	if(CompletedL3 == true){$('#gameTwoNextLevel4').attr('class', openClass);
		//$('#gameTwoNextLevel4').css('background-color', 'cyan');
		$('#gameTwoNextLevel3').attr('class', openClassFull);
		$('#gameTwoNextLevel3').css('background-color', 'lime');
	}
	if(CompletedL4 == true){$('#gameTwoNextLevel5').attr('class', openClass);
		//$('#gameTwoNextLevel5').css('background-color', 'cyan');
		$('#gameTwoNextLevel4').attr('class', openClassFull);
		$('#gameTwoNextLevel4').css('background-color', 'lime');
	}
	if(CompletedL5 == true){
		$('#gameTwoNextLevel5').attr('class', openClassFull);
		$('#gameTwoNextLevel5').css('background-color', 'lime');
	}
}

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
	//noOfBalsToRelease = 1;

}

function ballsExhaustedStatus(){   //Check Game Status
	var checkList = [];
	var baloonsList = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 
				'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 
				'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen','turquoise', 'sienna'];
	var bgStatus;
	for(var i = 0; i < baloonsList.length; i++){
		var ballDisplayCheck = $('#'+baloonsList[i]).css('display');
		var viewListLen = viewList.length;
		var baloonsListLen = baloonsList.length;
		checkList.push(ballDisplayCheck);
	}
	if(checkList.includes('none')){ //ie, all baloons NOT in display
		if(viewListLen == 0){ //If True, YOU WON;
			
			resetBaloonGame();
			var presentLevel = parseInt($('#gameTwoLevelCount').text());	
			$('#bGameOverCall').text('Good Job!');
			if(presentLevel < 5){
				$('#bGameOverCall2').text('Level '+presentLevel+' Completed');				
			}else{
				$('#bGameOverCall').text('Waooooo! Good Job');
				$('#bGameOverCall2').text('All Levels Completed');
			} 
			$('#balBusrtCountNo').text($('#gameTwoLifeCount').text());
			$('#balBusrtCountTime').text(min+'m '+sec+'s');
			//$('#bGameOver').css('visibility', 'visible');
			$('#bGameOverContPry').css('display', 'block');	
			$('#burstColorCont').css('display', 'none');
			playbBgroundSound(false);
			playbGameWonSound(true);
			clearBGameBallUpdate();
			
			if(presentLevel == 1){CompletedL1 = true; bGameNextLevelSet()}
			if(presentLevel == 2){CompletedL2 = true; bGameNextLevelSet()}
			if(presentLevel == 3){CompletedL3 = true; bGameNextLevelSet()}
			if(presentLevel == 4){CompletedL4 = true; bGameNextLevelSet()}
			if(presentLevel == 5){CompletedL5 = true; bGameNextLevelSet()}
		}
	}else{
		setTimeout(gameOver_Baloon, 300);
	}
}

function youWonBaloonGame(){
	var baloonsList = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 
				'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 
				'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen','turquoise', 'sienna'];
	for(var i = 0; i < baloonsList.length; i++){
		var ballDisplayCheck = $('#'+baloonsList[i]).css('display');
		if(ballDisplayCheck == 'none' && viewList.length == 0){
		resetBaloonGame();	
		$('#bGameOverCall').text('Good Job! You Won!'); //YOU WON;
		$('#balBusrtCountNo').text($('#gameTwoLifeCount').text());
		$('#balBusrtCountTime').text(min+'m '+sec+'s');
		$('#bGameOverContPry').css('display', 'block');	
		$('#burstColorCont').css('display', 'none');
		playbBgroundSound(false);
		playbGameWonSound(true);
		clearBGameBallUpdate(); 
		}			
	}
}

function youWonBaloonGame2(){
	resetBaloonGame();	
	$('#bGameOverCall').text('Good Job! You Won!'); //YOU WON;
	$('#balBusrtCountNo').text($('#gameTwoLifeCount').text());
	$('#balBusrtCountTime').text(min+'m '+sec+'s');
	$('#bGameOverContPry').css('display', 'block');	
	$('#burstColorCont').css('display', 'none');
	playbBgroundSound(false);
	playbGameWonSound(true); 
}

function gameOver_Baloon(){ 		//GAME OVER !!
	youWonBaloonGame();
	if(viewList.length > 29 ){
		//$('#bGameOver').text('GAME OVER!!!');
		$('#bGameOverCall').text('GAME OVER!!!');
		$('#bGameOverCall2').text('');
		$('#balBusrtCountNo').text($('#gameTwoLifeCount').text());
		$('#balBusrtCountTime').text(min+'m '+sec+'s');
		$('#bGameOverContPry').css('display', 'block');  
		$('#burstColorCont').css('display', 'none');
		clearBGameBallUpdate(); 
		bBgroundSound.pause(); 
		bGameOverSound.play();
		stopGameTimer();
	}
}

function  restartGameCall(){  					
	//$('#pulseBGameBtn1').click(function(){
	resetBaloonGame();
	$('#bGameBtn').css('background-color','dodgerblue');
	$('#bGameBtn').css('transform', 'rotate(0deg)');
	$("#exitCont").fadeOut(700);
	$('#gameTwoScoreCount').text('0');  //Sec count
	$('#gameTwoLifeCount').text('0'); //Bursted count
	playbBgroundSound(false);
	playbGameWonSound(false);
	bGameOverSound.currentTime = 0;
	/*startBaloonGame();*/
	$('#gameTwoScore').text('0'); //mins count
}
$(function(){  					//Reset Baloon Game Button- Restart Game
	$('#pulseBGameBtn').click(function(){
	
	CompletedL1 = false; CompletedL2 = false; CompletedL3 = false;
	CompletedL4 = false; CompletedL5 = false;
	var openClass = 'ui-btn ui-btn-inline ui-icon-lock ui-btn-icon-bottom';
	var openClass2 = 'ui-btn ui-btn-inline ui-icon-check ui-btn-icon-bottom';
	$('#gameTwoNextLevel1').attr('class', openClass2);
	$('#gameTwoNextLevel1').css('background-color', 'lightgray');
	$('#gameTwoNextLevel2').attr('class', openClass);
	$('#gameTwoNextLevel2').css('background-color', 'lightgray');
	$('#gameTwoNextLevel3').attr('class', openClass);
	$('#gameTwoNextLevel3').css('background-color', 'lightgray');
	$('#gameTwoNextLevel4').attr('class', openClass);
	$('#gameTwoNextLevel4').css('background-color', 'lightgray');
	$('#gameTwoNextLevel5').attr('class', openClass);
	$('#gameTwoNextLevel5').css('background-color', 'lightgray');
	
	$('#bGameOverContPry').css('display', 'block');	
	$('#bGameOver').css('visibility', 'visible');
	

	$('#gameTwoLevelCount').text(1);  //Level count
	$('#gameTwoLevelGenCont').css('display', 'block'); //Levels container
	
	restartGameCall();
	});
});


/*-------Start Baloon Game ------------*/
var gameDeviceWidth= screen.width;   //To set ball size

var viewList = []; var hiddenList = [];
var noOfBalsToRelease = 1;
var scaleList1 = [1, 3, 1.5, 2, 3, 2.5, 4, 1, 4.5, 3.5];
var scaleListExtraBig = [1, 6, 1.5, 2, 3, 2.5, 8, 4, 7, 1, 4.5, 5, 7, 5.5, 3.5, 8];
var scaleListBig = [1, 6, 1.5, 2, 3, 2.5, 5, 4, 7, 1, 4.5, 5, 7, 5.5, 3.5];
var scaleListSmall = [1, 3, 1.5, 2, 3, 2.5, 5, 4, 1, 4.5, 5, 3.5];
var scaleListSelected = [];
/*if(gameDeviceWidth <= 350){scaleListSelected = scaleListSmall}
else if(gameDeviceWidth > 350 && gameDeviceWidth <= 500 ){scaleListSelected = scaleListBig}
else if(gameDeviceWidth > 500 ){scaleListSelected = scaleListExtraBig};*/

/* -------- Responsive Page Definition ---------- */
function responsiveBallonListSize(){
	smallBaloonList(a);
	bigBaloonList(b);
	extraBigBaloonList(c);
}

function smallBaloonList(a){
	if (a.matches){
		scaleListSelected = scaleListSmall;
	}
}
var a = window.matchMedia("(max-width: 350px)") //For small devices. Phones 350px and down
smallBaloonList(a);
a.addListener(smallBaloonList);

function bigBaloonList(b){
	if (b.matches){
		scaleListSelected = scaleListBig;
	}
}
var b = window.matchMedia("(min-width: 350px)") //For medium devices. Phones 350px and up
bigBaloonList(b);
b.addListener(bigBaloonList);

function extraBigBaloonList(c){
	if (c.matches){
		scaleListSelected = scaleListExtraBig;
	}
}
var c = window.matchMedia("(min-width: 500px)") //For large devices. Phones 500px and up
extraBigBaloonList(c);
c.addListener(extraBigBaloonList);
/* -------- /Responsive Page Definition ---------- */

function startBaloonGame(){
	var baloonsList = ['aqua', 'gold', 'skyblue', 'magenta', 'maroon', 'crimson', 'pink', 'violet', 'indigo', 'blue', 
				'white', 'black', 'gray', 'chocolate', 'teal', 'green', 'red', 'yellow', 'purple', 'lime', 'coral', 
				'orange', 'khaki', 'navy', 'seagreen', 'olive', 'wheat', 'linen','turquoise', 'sienna'];
	clearBGameBallUpdate();
	startGameTimer();
	bBgroundSound.pause();	//Stop background sound
	bBgroundSound.currentTime = 0;

	bGameWonSound.pause();	//Stop WonSound if playing
	bGameWonSound.currentTime = 0;

	bGameOverSound.pause();	//Stop gameOver sound if playing
	bGameOverSound.currentTime = 0;
	//playbGameWonSound(false);
	//playbBgroundSound(false);
	playbBgroundSound(true);
	//resetBaloonGame();
	//bgameOn = true;
	viewList = []; hiddenList = [];  //Reset these  lists again
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
		//var scaleSize = randomNumbers(1, 6);
		var scaleSize = randomListColorsFunction(scaleList1);
		$('#'+addBalls).css('transform', 'scale('+scaleSize+')'); //Resize Ball
		$('#'+addBalls).css('left', pos+'vw'); //Change position

		//$('#'+addBalls).css('color', addBalls); //Set tail color to baloon color
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
		//ballsExhaustedStatus();
		var nextRandColor = randomListColorsFunction(viewList);
		$('#burstColorSp').text(nextRandColor); //Select a new ball and display
		if(balGameTypeEasy == true){ //For easy Game
			$('#burstColor').css('background-color', nextRandColor);
			}else{$('#burstColor').css('background-color', '');
		}
	}
	ballsExhaustedStatus();
	//alert($('#'+ballToRemove).css('transform'));
}

$(function(){ //Change Next display ball
	$('#burstColor').click(function(){
	if(balGameTypeEasy){
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
function clearBGameBallUpdate(){
	clearInterval(baloonUpdateInterval)} //Stop the update

function setBalGameBallInterval(){	//Start update
	baloonUpdateInterval = setInterval(releaseNewBal, generateNewBalInterval);
}

function releaseNewBal(){
	if(hiddenList.length != 0){  //Stop release when hiddenList List is empty
		//for(var i = 0; i <= noOfBalsToRelease ; i++){
		var newBallToAdd = randomListColorsFunction(hiddenList); //Select a new ball
		hiddenList.splice(hiddenList.indexOf(newBallToAdd), 1); //Delete the ball from hiddenCol List
		//var scaleSize = randomNumbers(1, 7);
		var scaleSize = randomListColorsFunction(scaleListSelected);
		var pos = randomNumbers(0, 92);
		//var ballSpeed = randomListColorsFunction(animatSpeedList);
		$('#'+newBallToAdd).css('transform', 'scale('+scaleSize+')'); //Resize Ball
		$('#'+newBallToAdd).css('left', pos+'vw'); //Change position
		//$('#'+newBallToAdd).css('animation-duration', ballSpeed+'s'); //Animate
		//$('#'+newBallToAdd).css('color', newBallToAdd); //Set tail color to baloon color
		viewList.push(newBallToAdd); //Add it to viewList List
		$('#'+newBallToAdd).css('display', 'block'); //Change display to block
		$('#gameTwoScoreBoard').css('background-color', newBallToAdd);
	}
	ballsExhaustedStatus();
	setTimeout(function(){$('#gameTwoScoreBoard').css('background-color', '')}, 500);
}

function stopAllGames(){						//STOP ALL GAMES WHILE AT HOME
	//Game1: What Color is this?
	back2MenuGameOne();
	
	//Game2: Name the Color
	stopNameTheColorGame();

	//Game3: Burst the ballons
	exitBalloonGame();
}

/*------ Testing Game ------*/
$(function(){  				
	$('#gameTwoNextLevel2-42').click(function(){
	$('#gameTwoNextLevel2').attr('class', 'ui-btn ui-btn-inline ui-icon-carat-r ui-btn-icon-bottom');
	});
});

//$(function(){  				
//	$('#gameTwoScoreBoard').click(function(){
//	alert(viewList+'. Length- '+viewList.length +'\n .HiddenList: '+hiddenList+'. Length- '+hiddenList.length);
//	//ballsExhaustedStatus();
//	});
//});

/*
function selBall(ballID){
	//alert($('#'+addBalls).css('transform'));
	var size = $('#'+ballID).css('transform');
	alert(size);
}*/
