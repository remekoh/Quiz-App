'use strict'

$(document).ready(function() {
  var currentQuestionIndex = 0;
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

    currentQuestionIndex = newGame(questions[0]);

    $('form').submit(function(event) {
      event.preventDefault();
      loadQuestion(questions[currentQuestionIndex]);
      currentQuestionIndex++;
    })

});

// Given a question object returns true if user presents correct
// answer
function checkIfCorrect(currentQuestion, usersAnswer) {

}

// Displays number questions answered out of total
function diplayQuestionTotal() {

}

// Given a question object loads the next question on screen
function loadQuestion(currentQuestion) {
  $('.question-header').text(currentQuestion.questionText);
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
function newGame(firstQuestion) {
  loadQuestion(firstQuestion);
  return 1;
}


