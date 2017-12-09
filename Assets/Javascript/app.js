var gameInfo = {
	correct: 0,
	incorrect: 0,
	timeLeft: 90,
	countDown: function() {
					gameInfo.timeLeft--;
					$("#timeLeft").html("<h3>" + "Timer:" + " " + gameInfo.timeLeft);

					if (timeLeft === 0) {
						alert("Times Up!");
						stop();
					}
				}
			};

var timer;

 //====>This Code is Not Working.<=====
function stop(){
    	clearInterval(gameInfo.timeLeft); // stops the timer
    }

// Questions, Choices, Answer
var questions = [{
			question: "What is the Capital city of Indonesia?",
			choices: ["Jakarta", "Bali", "Java", "Seoul"],
			validAnswer: "Jakarta"
		}, { question: "Pteronophobia is the fear of being tickled by?",
			choices: ["Hair", "Feather", "Ice", "Nails"],
			validAnswer: "Feather"
		}, { question: "Banana fruits are curved because they grow?",
			choices: ["towards the sun", "in tiers", "from the banana heart", "at the tropical place"],
			validAnswer: "towards the sun"
		}, { question: "Heart attacks are more likely to happen on a?",
			choices: ["Sunday", "Wednesday", "Monday", "Friday"],
			validAnswer: "Monday"
		}];

//Start Game, Display Questions and Choices

		function startGame() {
			for (var i = 0; i < questions.length; i++) {
			$("#trivia-questions").append("<h3>" + questions[i].question);

			for (var j = 0; j < questions.length; j++) {
			$("#trivia-questions").append("<button id = 'button-choices'>" + questions[i].choices[j]);
			}
		}
	 // Timer Interval, Count down 1000 = 1 sec
		timer = setInterval(gameInfo.countDown, 1000)
	};

// // //====>This Code is Not Working.<=====
// 	function finish(){						
//     	clearInterval(gameInfo.counter); // stops the timer
//     	timer();						
    

	startGame();

// Comparing userGuess to Answer, then Print Score. 
//====>This Code is Not Working.<=====
		function endGame() {
			$("button").on("click", function() {
				var userGuess = $(this).html();

				if (userGuess === questions[0].validAnswer || questions[1].validAnswer ||
					question[2].validAnswer || questions[3].validAnswer) {
					gameInfo.correct++;
					$("#correct-answer").text("<h3>" + "Correct:" + " " + gameInfo.correct);
				} else {
					gameInfo.incorrect++;
					$("#incorrect-answer").text("<h3>" + "Incorrect:" + " " + gameInfo.incorrect);
				}
			})
		};
		
	// Submit answers
	$("#submit").on("click", finish);  // submits answers and finishes the game

		


	