
function randIntFun(min, max){
    return Math.floor(Math.random(min) * Math.floor(max));
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
	$('#mainHome').css('height', deviceWidth-48);
	$('#mainHome').css('background-color', $('#inputColor').val());
	});
	
});
$(function(){
	$('#inputColorPg2').keyup(function(){
	$('#mainPg2').css('height', deviceWidth-48);
	$('#mainPg2').css('background-color', $('#inputColorPg2').val());
	});
	
});
/*
var inputText = document.getElementById("inputColor");
inputText.addEventListener('onkeyup', getTheColor);
function getTheColor(){
	var inputColor = document.getElementById("inputColor");
	document.getElementById("mainHome").style.backgroundColor = inputColor.value;	
}
*/
function sheffleSong(){
	var selNum = hymnFunList2();
	var hrandom = randIntFun(0, selNum.length);
	var myNo =  hymnFun2();
	document.getElementById("hymnNoIndex").innerHTML= hrandom;
	document.getElementById("displayHymn").innerHTML= myNo[hrandom];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + hrandom;
	document.getElementById("suSongTitle").innerHTML= selNum[hrandom];
	
}

function goToPage2(){
	location.replace("#page2")
}

function songNoSearchFun(){
var songNumber = document.getElementById("songNoSearch");

if(songNumber.value > 0 && songNumber.value <=20){
	//Print song Number to Page 2 Screen
	var myNo =  hymnFun2();
	var selNum = hymnFunList2();
	document.getElementById("displayHymn").innerHTML= myNo[songNumber.value];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + songNumber.value;
	document.getElementById("suSongTitle").innerHTML= selNum[songNumber.value];

	//go to Song Display Page
	location.replace("#page3");
} }
/*
function showSearch(){
document.getElementById("songNoSearchDiv").style.display === "none";
}
*/

function add2FavouriteFun2(){
	var favSongsTitleList =[];

	document.getElementById("displayHymn").innerHTML= myNo[hrandom];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + hrandom;
	var currentSongTitle = document.getElementById("suSongTitle").innerHTML;
}

/*
function add2FavouriteFun(){
	var songID = document.getElementById("hymnNoIndex");
	var songTitle2 = document.getElementById("suSongTitle");
	var displayID = document.getElementById("favTest5");
	var songTitle2Id = document.getElementById("suSongTitle");
	$('#favouriteSongsListHead').append('<li class="ui-btn favListContainer">'+
		songTitle2.innerHTML+'<a class="favListIcons ui-icon-star ui-btn-icon-left favIcon" id="'+songID.innerHTML+
		'" onclick="location.replace("#page2")"></a><a id="'+songID.innerHTML+ '"class="favListIcons ui-icon-delete ui-btn-icon-right" onclick="favDeleteFun(this.id)"></a></li>');
	//displayID.innerHTML = songTitle2Id.style.id;
}

function favDeleteFun(songIndex){
	//var FavTest5 = document.getElementById("favTest5").innerHTML;
	if (confirm("Sure you want to remove from Favourite?")) {
    $("#songIndex").empty();
 }
}
*/
function showMyFavs(){
		//Clear all the exisitng list
		$('#favouriteSongsListHead').empty();

		//get runs object
		var myFavs = getmyFavsObject();
		//var myFavs2= ["hello", "Good", "Tested", "Nice"]

		//Check if empty
		if(myFavs !="" && myFavs != null){
			for(var i = 0; i < myFavs.length; i++){
		$('#favouriteSongsListHead').append('<li class="ui-btn favListContainer">'+myFavs[i]["title"]
		+'<a class="favListIcons ui-icon-star ui-btn-icon-left favIcon" id="'+myFavs[i]["songID"]
		+'" onclick=pHymnIndex2(this.id)></a><a href="#" id="deleteLink" data-title="'+myFavs[i]["title"]
		+'" class="favListIcons ui-icon-delete ui-btn-icon-right"></a></li>'); }
		}	//$('#home').bind('pageinit', function(){
			//	('#home').listview('refresh');
			//});
			//onclick= location.replace("#page2")
			//onclick="return confirm(\'Are you sure?\')"
			//<a id="'+myFavs[i]["songID"]
		//+'"onclick=deleteFav(this.id) class="favListIcons ui-icon-delete ui-btn-icon-right"></a></li>'); }
}


$(document).one('pageinit', function(){
	// Delete Handler
	$('#favouriteSongsListHead').on('click', '#deleteLink', deleteFavs);

	function deleteFavs(){
		//alert("wanan to delete?");}
	//Set LS items
	if(confirm('Are you sure?')){
    	localStorage.setItem('currentTitle', $(this).data('title'));

    	//Get current data
    	currentTitle = localStorage.getItem('currentTitle');

		var myFavs = getmyFavsObject();

    	//Loop through runs
        //&& runs[i].date == currentDate
    	for(var i = 0; i < myFavs.length; i++){
    		if(myFavs[i].title == currentTitle){
    			myFavs.splice(i, 1);
    		}
    		localStorage.setItem('myFavs', JSON.stringify(myFavs));
    		//call showFavs()
    			showMyFavs();
    	}

    	//alert(currentTitle);
    	

    	return false;
    }
	}
});

function addFav(){
		//Get Form Values
    	var title = $('#suSongTitle').text();
    	var solo = $('#displayHymn').text();
    	var songID = $('#hymnNoIndex').text();

    	
    	//Create 'myFav' object
    	var myFav = {
    		title: title,
    		solo: solo,
    		songID: songID};

    	var myFavs = getmyFavsObject();

    	// Add run to runs array
    	myFavs.push(myFav);

    	alert('Song Added Added');

    	//Set stringgified object to localStorage
    	localStorage.setItem('myFavs', JSON.stringify(myFavs));

    	//Redirect
    	window.location.href="#page4";
    	return false;
}

//Delete All Favourites
function clearAllFavFun(){
	//var testPoint = document.getElementById("clearAllFav");
	var clearFavs = document.getElementById("noFavLabel");
	if (confirm('Do you want to clear all Favourites?')){
		localStorage.removeItem('myFavs');
		clearFavs.innerHTML = "You Have No Favourites";
		showMyFavs();
	}
	else {
		alert("You pressed Cancel!");
	}
}

