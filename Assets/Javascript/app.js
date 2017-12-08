var questionArr = ["What is the Capital city of Indonesia?", "Pteronophobia is the fear of being tickled by?", 
					"Banana fruits are curved because they grow?", "Heart attacks are more likely to happen on a?",];
var choicesArr = ["Jakarta", "Bali", "Java", "Seoul"],
				 ["Hair", "Feather", "Ice", "Nails"],
				 ["towards the sun", "in tiers", "from the banana heart", "at the tropical place"],
				 ["Sunday", "Wednesday", "Monday", "Friday"];
var answerArr = ["Jakarta", "Feather", "towards the sun", "Monday"];


$("#trivia-questions").html(questionArr);
console.log("#trivia-questions");

$(".button").html(
	("#choice1", choicesArr[0]);
	("#choice2", choicesArr[1]);
	("#choice3", choicesArr[2]);
	("#choice4", choicesArr[3]);
		);