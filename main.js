
//Source Code: 'Mad Libs' Codepen by Mackenzie Turner//

//select buttons for event listeners
var getStoryButton = document.querySelector("#getStory");
var resetButton = document.querySelector("#reset");
var getFormButton = document.querySelector("#getForm");
var chooseAgain = document.querySelector("#chooseAgain");

// select div sections for showing/hiding
var selectStory = document.querySelector("#selectStory");
var storyForm = document.querySelector("#storyForm");
var finshedStory = document.querySelector("#finishedStory");

//select input div for populating the list/clearing the list 
var inputs = document.querySelector("#storyForm div");

//select the user's choice for story from dropdown
var chosenStory = document.querySelector("select");

//establish visibity of story
var storyVisible = false;

//array containing data for each story
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
				"Plural noun",
				"Person in room<br>(last name)",
				"Adjective",
				"Noun",
				"Noun",
				"Part of the body",
				"Part of the body",
				"Plural noun",
				"Noun",
				"Noun",
				"Exclamation",
				"Noun",
				"Noun",
				"Noun",
				"Verb",
				"Noun",
				"Adjective",
				"Noun"
			],
			"#destinyText",
			"#destinyText span"
		]
};

//hide selection dropdown and show generated form for user word inputs
getFormButton.addEventListener("click", function(){
	makeForm();

	selectStory.classList.add("hidden");
	storyForm.classList.remove("hidden");
});

chooseAgain.addEventListener("click", function(){
	selectStory.classList.remove("hidden");
	storyForm.classList.add("hidden");

	inputs.innerHTML = "";
});

//generate story, hide form and show finished story
getStoryButton.addEventListener("click", function(){
	storyVisible = true;

	makeStory();
	showHideStory();
});

//reset button to try again!
resetButton.addEventListener("click", function () {
	storyVisible = false;

	showHideStory();

	inputs.innerHTML = "";
});

// generate form based on selected story from dropdown
function makeForm(){
		var storyChoice = story[chosenStory.value][0];

		for(var i = 0; i < storyChoice.length; i++){
			inputs.innerHTML += "<label>" + storyChoice[i] + '<br><input type="text"></label>';
		}
}

//use user inputted words to build story from base text 
function makeStory(){
	var wordSlots = document.querySelectorAll(story[chosenStory.value][2]);
	var inputWords = document.querySelectorAll("input");

	//set answers in the form to corresponding span slot in story
	for(var i = 0; i < wordSlots.length; i++){
		wordSlots[i].textContent = inputWords[i].value;
	}
}

//alter the visibility of text sections depending on if story shoud be seen or app reset 
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

