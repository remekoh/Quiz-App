'use strict'

$(document).ready(function() {
  var currentQuestionIndex = 0;
  var userCorrectTotal = 0;
  var questions = [
    {
      questionText: 'What is the current season of Big Bang Theory?',
      options: ['Season 14', 'Season 25', 'Season 8', 'Season 9'],
      correctAnswer: 'Season 9'
    },
    {
      questionText: 'How many episodes of Big Bang Theory are there?',
      options: ['350', '206', '400', '207'],
      correctAnswer: '207'
    },
    {
      questionText: 'Who is Sheldon\'s roommate?',
      options: ['Penny', 'Amy', 'Howard', 'Leonard'],
      correctAnswer: 'Leonard'
    },
    {
      questionText: 'Which of these is not a character in Big Bang Theory',
      options: ['Penny', 'Amy', 'Howard', 'Leonard','Eleanor'],
      correctAnswer: 'Eleanor'
    },
    {
      questionText: 'What age did Sheldon begin college?',
      options: ['8', '16', '12', '11'],
      correctAnswer: '11'
    }];

    // When triggered this listener calls the new game function
    $('.start-game').click(function() {
      currentQuestionIndex = newGame(questions[0], questions.length);
    });

    // Loads first question when page loads
    currentQuestionIndex = userCorrectTotal = newGame(questions[0], questions.length);

    $('form').submit(function(event) {
      event.preventDefault();

      var userAnswer = $('input[type = "radio"]:checked');

      if (userAnswer.length === 1) {
        // Checks if user answr is correct
        if (isAnswerCorrect(questions[currentQuestionIndex], userAnswer)) {
          userCorrectTotal++;
        }
        //Setup for the next question
        currentQuestionIndex++;
        console.log('currentQuestionIndex: ' + currentQuestionIndex);
        loadQuestion(questions[currentQuestionIndex], currentQuestionIndex + 1);
        diplayQuestionTotal(currentQuestionIndex + 1, questions.length);
        $('input[type = "radio"]').prop('checked', false); // Clear previous answer
      } else {
        alert("Please choose an Answer, any answer!");
      }
    });
});

// Given a question object returns true if user presents correct
// answer
function isAnswerCorrect(currentQuestion, usersAnswer) {
  

}

// Displays number questions answered out of total
function diplayQuestionTotal(currentQuestionNum, totalNumQuestion) {
 $('.question-out-of-total').text('You are on '+currentQuestionNum + ' out of ' + totalNumQuestion);
}

// Given a question object loads the next question on screen
function loadQuestion(currentQuestion, currentIndex) {
  console.log('index: ' + currentIndex);
  $('.question-header').text(currentIndex + '. ' + currentQuestion.questionText);
  console.log(currentQuestion.questionText);
  for(var i = 0; i < 4; i++) {
    console.log(currentQuestion.options[i]);
    $('#' + i + ' span').text(currentQuestion.options[i]);
  }
}

// Updates the user's score
function updateScore() {

}

// Reset for a new game
function newGame(firstQuestion, totalNumQuestion) {
  loadQuestion(firstQuestion, 1);
  diplayQuestionTotal(1, totalNumQuestion);
  $('input[type = "radio"]').prop('checked', false); // Clear previous answer
  return 0;
}


