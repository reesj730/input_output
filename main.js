
//Original Source Code: 'Mad Libs' Codepen by Mackenzie Turner//

var getStoryButton = document.querySelector("#getStory");
var resetButton = document.querySelector("#reset");
var getFormButton = document.querySelector("#getForm");
var chooseAgain = document.querySelector("#chooseAgain");

var saveButton = document.querySelector("#save");

var selectStory = document.querySelector("#selectStory");
var storyForm = document.querySelector("#storyForm");
var finshedStory = document.querySelector("#finishedStory");

var inputs = document.querySelector("#storyForm div");

var chosenStory = document.querySelector("select");

var storyVisible = false;

var story = {
	love: [
			[
				"Noun (plural)",
				"Noun",
				"Verb",
				"Noun",
				"Noun (plural)",
				"Color (plural)",
				"Part of the Body",
				"Part of the Body",
				"Noun (plural)",
				"Verb (plural)",
				"Noun",
				"Noun",
				"Verb",
				"Number",
				"Noun",
				"Verb (ending -ing)",
				"Name",
				"Adjective",
				"Adjective",
				"Noun",
				"Adverb"
			],
			"#loveText",
			"#loveText span"
		],
	fate: [
			[
				"Noun (plural)",
				"Verb",
				"Verb",
				"Verb",
				"Adjective",
				"Article of clothing",
				"Noun",
				"Verb (past tense)",
				"Noun",
				"Verb (past tense)",
				"Noun (plural)",
				"Noun",
				"Verb",
				"Adjective",
				"Noun",
				"Verb",
				"Place",
				"Noun",
				"Noun (plural)",
				"Noun"
			],
			"#fateText",
			"#fateText span"
		],
	destiny: [
			[
				"Adjective",
				"Noun (plural)",
				"Noun",
				"Noun",
				"Noun",
				"Verb",
				"Noun (plural)",
				"Noun",
				"Noun",
				"Color",
				"Noun",
				"Verb",
				"Verb",
				"Verb",
				"Noun (plural)",
				"Object",
				"Verb",
				"Noun",
				"Part of the Body",
				"Place"
			],
			"#destinyText",
			"#destinyText span"
		]
};


getFormButton.addEventListener("click", function(){
	makeForm();

	selectStory.classList.add("hidden");

    document.getElementById('crystal_ball').className = "hidden";
    document.getElementById('sparkle').className = "hidden";
    document.getElementById('frame_final').className = "hidden";
    document.getElementById('frame_input').className = "show";

	storyForm.classList.remove("hidden");
});

chooseAgain.addEventListener("click", function(){
	selectStory.classList.remove("hidden");
	document.getElementById('crystal_ball').className = "show";
	document.getElementById('sparkle').className = "show";
	document.getElementById('frame_input').className = "hidden";
	document.getElementById('frame_final').className = "hidden";
    
	storyForm.classList.add("hidden");

	inputs.innerHTML = "";
});


getStoryButton.addEventListener("click", function(){
	storyVisible = true;

	document.getElementById('frame_input').className = "hidden";
	document.getElementById('frame_final').className = "show";

	makeStory();
	showHideStory();
});


resetButton.addEventListener("click", function () {
	storyVisible = false;

	document.getElementById('frame_input').className = "hidden";
	document.getElementById('frame_final').className = "hidden";
	document.getElementById('crystal_ball').className = "show";
	document.getElementById('sparkle').className = "show";

	showHideStory();

	inputs.innerHTML = "";
});


function makeForm(){
		var storyChoice = story[chosenStory.value][0];

		for(var i = 0; i < storyChoice.length; i++){
			inputs.innerHTML += "<label>" + storyChoice[i] + '<br><input type="text"></label>';
		}
}


function makeStory(){
	var wordSlots = document.querySelectorAll(story[chosenStory.value][2]);
	var inputWords = document.querySelectorAll("input");

	for(var i = 0; i < wordSlots.length; i++){
		wordSlots[i].textContent = inputWords[i].value;
	}
}


function showHideStory(){
	var storyText = document.querySelector(story[chosenStory.value][1]);

	if(storyVisible) {
		storyText.classList.remove("hidden");
		finishedStory.classList.remove("hidden");
		storyForm.classList.add("hidden");
	}
	else {
		storyText.classList.add("hidden");
		finishedStory.classList.add("hidden");
		selectStory.classList.remove("hidden");
	}
}


// Sparkle Cursor 

var color = "#D6C79A"; 
var sparkles = 120; 

/****************************
*  Tinkerbell Magic Sparkle *
* (c) 2005 mf2fm web-design *
*  http://www.mf2fm.com/rv  *
****************************/

var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

colors=new Array('#FF3276','#DFFF2B','#2BD8FF')

n = 10;
y = 0;
x = 0;
n6=(document.getElementById&&!document.all);
ns=(document.layers);
ie=(document.all);
d=(ns||ie)?'document.':'document.getElementById("';
a=(ns||n6)?'':'all.';
n6r=(n6)?'")':'';
s=(ns)?'':'.style';

if (ns){
	for (i = 0; i < n; i++)
		document.write('<layer name="dots'+i+'" top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#444d5f></layer>');
}

if (ie)
	document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');

if (ie||n6){
	for (i = 0; i < n; i++)
		document.write('<div id="dots'+i+'" style="position:absolute;top:0px;left:0px;width:'+i/2+'px;height:'+i/2+'px;background:#444d5f;font-size:'+i/2+'"></div>');
}

if (ie)
	document.write('</div></div>');
(ns||n6)?window.captureEvents(Event.MOUSEMOVE):0;

function Mouse(evnt){

	y = (ns||n6)?evnt.pageY+4 - window.pageYOffset:event.y+4;
	x = (ns||n6)?evnt.pageX+1:event.x+1;
}

(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;
  

window.onload=function() { if (document.getElementById) {
	var i, rats, rlef, rdow;
	for (var i=0; i<sparkles; i++) {
		var rats=createDiv(3, 3);
		rats.style.visibility="hidden";
		rats.style.zIndex="999";
		document.body.appendChild(tiny[i]=rats);
		starv[i]=0;
		tinyv[i]=0;
		var rats=createDiv(5, 5);
		rats.style.backgroundColor="transparent";
		rats.style.visibility="hidden";
		rats.style.zIndex="999";
		var rlef=createDiv(1, 5);
		var rdow=createDiv(5, 1);
		rats.appendChild(rlef);
		rats.appendChild(rdow);
		rlef.style.top="2px";
		rlef.style.left="0px";
		rdow.style.top="0px";
		rdow.style.left="2px";
		document.body.appendChild(star[i]=rats);
	}
	set_width();
	sparkle();
}}

function sparkle() {
	var c;
	if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
		ox=x;
		oy=y;
		for (c=0; c<sparkles; c++) if (!starv[c]) {
			star[c].style.left=(starx[c]=x)+"px";
			star[c].style.top=(stary[c]=y+1)+"px";
			star[c].style.clip="rect(0px, 5px, 5px, 0px)";
			star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(color=="random")?newColor():color;
			star[c].style.visibility="visible";
			starv[c]=50;
			break;
		}
	}
	for (c=0; c<sparkles; c++) {
		if (starv[c]) update_star(c);
		if (tinyv[c]) update_tiny(c);
	}
	setTimeout("sparkle()", 40);
}

function update_star(i) {
	if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
	if (starv[i]) {
		stary[i]+=1+Math.random()*3;
		starx[i]+=(i%5-2)/5;
		if (stary[i]<shigh+sdown) {
			star[i].style.top=stary[i]+"px";
			star[i].style.left=starx[i]+"px";
		}
		else {
			star[i].style.visibility="hidden";
			starv[i]=0;
			return;
		}
	}
	else {
		tinyv[i]=50;
		tiny[i].style.top=(tinyy[i]=stary[i])+"px";
		tiny[i].style.left=(tinyx[i]=starx[i])+"px";
		tiny[i].style.width="2px";
		tiny[i].style.height="2px";
		tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
		star[i].style.visibility="hidden";
		tiny[i].style.visibility="visible"
	}
}

function update_tiny(i) {
	if (--tinyv[i]==25) {
		tiny[i].style.width="1px";
		tiny[i].style.height="1px";
	}
	if (tinyv[i]) {
		tinyy[i]+=1+Math.random()*3;
		tinyx[i]+=(i%5-2)/5;
		if (tinyy[i]<shigh+sdown) {
			tiny[i].style.top=tinyy[i]+"px";
			tiny[i].style.left=tinyx[i]+"px";
		}
		else {
			tiny[i].style.visibility="hidden";
			tinyv[i]=0;
			return;
		}
	}
	else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
	if (e) {
		y=e.pageY;
		x=e.pageX;
	}
	else {
		set_scroll();
		y=event.y+sdown;
		x=event.x+sleft;
	}
}

window.onscroll=set_scroll;
function set_scroll() {
	if (typeof(self.pageYOffset)=='number') {
		sdown=self.pageYOffset;
		sleft=self.pageXOffset;
	}
	else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
		sdown=document.body.scrollTop;
		sleft=document.body.scrollLeft;
	}
	else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
		sleft=document.documentElement.scrollLeft;
		sdown=document.documentElement.scrollTop;
	}
	else {
		sdown=0;
		sleft=0;
	}
}

window.onresize=set_width;
function set_width() {
	var sw_min=999999;
	var sh_min=999999;
	if (document.documentElement && document.documentElement.clientWidth) {
		if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
		if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
	}
	if (typeof(self.innerWidth)=='number' && self.innerWidth) {
		if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
		if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
	}
	if (document.body.clientWidth) {
		if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
		if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
	}
	if (sw_min==999999 || sh_min==999999) {
		sw_min=800;
		sh_min=600;
	}
	swide=sw_min;
	shigh=sh_min;
}

function createDiv(height, width) {
	var div=document.createElement("div");
	div.style.position="absolute";
	div.style.height=height+"px";
	div.style.width=width+"px";
	div.style.overflow="hidden";
	return (div);
}

function newColor() {
	var c=new Array();
	c[0]=255;
	c[1]=Math.floor(Math.random()*256);
	c[2]=Math.floor(Math.random()*(256-c[1]/2));
	c.sort(function(){return (0.5 - Math.random());});
	return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
}


//save
saveButton.addEventListener('click', function() {
        html2canvas(document.body, {
        	//html2canvas(document.querySelector("#finishedStory"), {
            onrendered: function(canvas) {
              return Canvas2Image.saveAsPNG(canvas);
            }
        });
    });

