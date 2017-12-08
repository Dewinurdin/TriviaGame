console.log("hello world");
var questionArr = ["What is the Capital city of Indonesia?", "Pteronophobia is the fear of being tickled by?", "Banana fruits are curved because they grow?", "Heart attacks are more likely to happen on a?",];
var choicesArr = {["Jakarta", "Bali", "Java", "Seoul"],
				 ["Hair", "Feather", "Ice", "Nails"],
				 ["towards the sun", "in tiers", "from the banana heart", "at the tropical place"],
				 ["Sunday", "Wednesday", "Monday", "Friday"]};
var answerArr = ["Jakarta", "Feather", "towards the sun", "Monday"];

var splitChoices = choicesArr.split(",");
console.log(splitChoices);

$("#trivia-questions").html(questionArr);
console.log("#trivia-questions");

$(".button").html(
	("#choice1", splitChoices[1]);
	("#choice2", splitChoices[2]);
	("#choice3", splitChoices[3]);
	("#choice4", splitChoices[4]);
		);
