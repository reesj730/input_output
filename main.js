
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
	bear: [
			[
				"Adjective",
				"Noun",
				"Plural noun",
				"Adjective",
				"Adjective",
				"Verb (ending -ing)",
				"Verb (ending -ing)",
				"Adjective",
				"Adjective",
				"Noun",
				"Food (plural)",
				"Part of the body (plural)",
				"Adjective",
				"Vehicle",
				"Food (plural)",
				"Food (plural)",
				"Something alive (plural)",
				"Something alive (plural)",
				"Adverb",
				"Noun"
			],
			"#bearText",
			"#bearText span"
		],
	book: [
			[
				"Adjective",
				"Noun",
				"Plural noun",
				"Person in room (female)",
				"Adjective",
				"Article of clothing",
				"Noun",
				"City",
				"Plural noun",
				"Adjective",
				"Part of the body",
				"Letter of the alphabet",
				"Celebrity",
				"Plural Noun",
				"Adjective",
				"Place",
				"Part of the body",
				"Adjective",
				"Genre"
			],
			"#bookText",
			"#bookText span"
		],
	dentist: [
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
			"#dentistText",
			"#dentistText span"
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

