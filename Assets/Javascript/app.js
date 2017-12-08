    
    var questions = [
            new Question("What is the Capital city of Indonesia?", ["Jakarta", "Bali", "Java", "Seoul"], "Jakarta"),
            new Question("Pteronophobia is the fear of being tickled by?",["Hair", "Feather", "Ice", "Nails"], "Feather"),
            new Question("Banana fruits are curved because they grow?", ["towards the sun", "in tiers", "from the banana heart", "at the tropical place"], "towards the sun"),
            new Question("Heart attacks are more likely to happen on a?",["Sunday", "Wednesday", "Monday", "Friday"], "Monday")
            ];

    function Question(text, choices, answer) {
      this.text=text;
      this.choices=choices;
      this.answer=answer;
    }

     function Quiz(questions) {
      this.questions = questions;
      this.questionIndex = 0;
    }

    var quiz = new Quiz(questions);

    //  populate();

   
    Quiz.prototype.getQuestionIndex = function() {
      return this.questions[this.questionIndex];
    }

    Quiz.prototype.isEnded = function() {
      return this.questions.length === this.questionIndex;
    }

    Quiz.prototype.guess = function(answer) {
      this.questionIndex++;
    }

    Question.prototype.correctAnswer = function(choice) {
      return choice === this.answer;
    }

     function populate(){

        if (quiz.isEnded()) {
      //Show Questions
        var element = document.getElementBybyID("question");
        $ (element).html(quiz.getQuestionIndex().text);

      // Show Choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i=0; i<choices.length; i++) {
          var element = $("choice" + i);
          element.innerHTML = choices(i);
          guess("btn" + i, coices [i]);
        }
      }
    };

    function guess(id, guess) {
      var button = $(".button").on("click", quiz.guess);
      populate();
    };

