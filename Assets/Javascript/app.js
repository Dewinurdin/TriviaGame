var gameInfo = {
	correct: 0,
	incorrect: 0,
	timeLeft: 5,
	countDown: function() {
					gameInfo.timeLeft--;
					$("#timeLeft").html(gameInfo.timeLeft);

					if (timeLeft === 0) {
						alert("Times Up!");
						stop();
					}
				}
			};

var timer;

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
			$("#trivia-questions").append("<button>" + questions[i].choices[j]);
			}
		}
	 // Timer Interval, Count down 1000 = 1 sec
		timer = setInterval(gameInfo.countDown, 1000)
	};

	function finish(){
    	clearInterval(gameInfo.counter); // stops the timer
    	timer();
    }

	startGame();

		function endGame() {
			$("button").on("click", function() {
				var userGuess = $(this).html();

				if (userGuess === questions[0].validAnswer || questions[1].validAnswer ||
					question[2].validAnswer || questions[3].validAnswer) {
					gameInfo.correct++;
					$(".correct-answer").text(gameInfo.correct);
				} else {
					gameInfo.incorrect++;
					$(".incorrect-answer").text(gameInfo.incorrect);
				}
			})
		};
		
	// Submit answers
	$("#submit").on("click", finish);  // submits answers and finishes the game

		


	