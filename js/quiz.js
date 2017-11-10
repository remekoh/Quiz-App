'use strict'
var currentQuestionIndex = 0;
var userCorrectTotal = 0;
$(document).ready(function() {
    var questions = [{
        questionText: 'What is the current season of Big Bang Theory?',
        options: ['Season 14', 'Season 25', 'Season 11', 'Season 12'],
        correctAnswer: 'Season 11'
    }, {
        questionText: 'How many episodes of Big Bang Theory are there?',
        options: ['238', '358', '250', '300'],
        correctAnswer: '238'
    }, {
        questionText: 'What\'s is the name of Sheldon\'s former roommate?',
        options: ['Penny', 'Amy', 'Howard', 'Leonard'],
        correctAnswer: 'Leonard'
    }, {
        questionText: 'Which of these is not a character in Big Bang Theory?',
        options: ['Raj', 'Bernadette', 'Stuart', 'Eleanor'],
        correctAnswer: 'Eleanor'
    }, {
        questionText: 'What is Amy\'s last name?',
        options: ['Farrah', 'Wolowitz', 'Fowler', 'Winkle'],
        correctAnswer: 'Fowler'
    }, {
        questionText: 'What is Raj\'s occupation?',
        options: ['Microbiologist', 'Experimental Physicist', 'Astrophysicist', 'Aerospace Engineer'],
        correctAnswer: 'Astrophysicist'
    }, {
        questionText: 'What\'s the name of the actress that plays Penny? ',
        options: ['Mayim Bialik', 'Melissa Rauch', 'Laura Spencer', 'Kaley Cuoco'],
        correctAnswer: 'Kaley Cuoco'
    }, {
        questionText: 'What age did Sheldon begin college?',
        options: ['8', '16', '12', '11'],
        correctAnswer: '11'
    }];

    // When triggered this listener calls the new game function
    $('.start-game').click(function() {
        newGame(questions[currentQuestionIndex], questions.length);
    });

    // Loads first question when page loads
    newGame(questions[currentQuestionIndex], questions.length);

    $('form').submit(function(event) {
        event.preventDefault();

        var userAnswer = $('input[type = "radio"]:checked + span');

        if (userAnswer.length === 1) {
            // Checks if user answer is correct
            if (isAnswerCorrect(questions[currentQuestionIndex], userAnswer.text())) {
                userCorrectTotal++;
                console.log('userCorrectTotal:' + userCorrectTotal);
            }
            if (currentQuestionIndex === questions.length - 1) {
                $('.quiz-area').hide();
                $('.answer-display').show();
                $('.answer-display').text('You answered ' + userCorrectTotal + ' out of ' + questions.length + ' questions correctly. ');
                $('.question-out-of-total').empty();
            } else {
                //Setup for the next question
                currentQuestionIndex++;
                console.log('currentQuestionIndex: ' + currentQuestionIndex);
                loadQuestion(questions[currentQuestionIndex], currentQuestionIndex + 1);
                diplayQuestionTotal(currentQuestionIndex + 1, questions.length);
                $('input[type = "radio"]').prop('checked', false); // Clear previous answer
            }
        } else {
            alert("Please choose an Answer, any answer!");
        }
    });
});

// Given a question object returns true if user presents correct
// answer
function isAnswerCorrect(currentQuestion, uAns) {
    console.log(uAns);
    if (uAns === currentQuestion.correctAnswer) {
        // alert('CORRECT!');
        return true;
    } else {
        return false;
    }
}

// Displays number questions answered out of total
function diplayQuestionTotal(currentQuestionNum, totalNumQuestion) {
    $('.question-out-of-total').text('You are on ' + currentQuestionNum + ' out of ' + totalNumQuestion);
}

// Given a question object loads the next question on screen
function loadQuestion(currentQuestion, currentIndex) {
    $('.quiz-area').show();
    $('.answer-display').hide();
    console.log('index: ' + currentIndex);
    $('.question-header').text('Question' + '#' + currentIndex + '. ' + currentQuestion.questionText);
    console.log(currentQuestion.questionText);
    for (var i = 0; i < 4; i++) {
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
    userCorrectTotal = 0;
    currentQuestionIndex = 0;
    return 0;

}