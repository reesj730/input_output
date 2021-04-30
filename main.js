
//Original Source Code: 'Mad Libs' Codepen by Mackenzie Turner//

var getStoryButton = document.querySelector("#getStory");
var resetButton = document.querySelector("#reset");
var getFormButton = document.querySelector("#getForm");
var chooseAgain = document.querySelector("#chooseAgain");

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


getStoryButton.addEventListener("click", function(){
	storyVisible = true;

	makeStory();
	showHideStory();
});


resetButton.addEventListener("click", function () {
	storyVisible = false;

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

