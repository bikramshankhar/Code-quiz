//arrray of the quiz questions, avaialble choices, and correct answers
var questions = [{
        title: "What does HTML stands for?",
        choices: ["Hypertext markup language",
        "Hypertext machine language",
        "Hypertext and links markup language",
        "Hightext machine language"],
        answer: "Hypertext markup language"
    },
    {
        title: "If we want define style for an unique element, then which css selector will we use?",
        choices: ["Id",
         "text",
         "class",
          "name"],
        answer: "Id"
    },
    {
        title: "What does CSS stand for?",
        choices: ["Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function:myFunction()",
         "function = myFunction()",
         "function myFunction()",
           "None of the above"],
        answer: "function myFunction()"
    },
    {
        title: "Which property applies a color to text?",
        choices: ["text-color",
         "foreground-color",
          "background-color",
          "color"],
        answer: "color"
    }
]

//setting the numerical variables for the functions.. scores and timers..
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the countdown timer once user clicks the 'start' button
function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    next();
}

// //stop the timer to end the game
// function endGame() {
//     clearInterval(timer);

//     var quizContent = `<h2>Final Score ` + score +  `%</h2>
//     <h3>You got ` + score / 20 +  ` questions correct!</h3>
//     <input type="text" id="name" placeholder="First name">
//     <button onclick="setScore()">Save score!</button>`;

//     document.getElementById("quizBody").innerHTML = quizContent;

//     document.getElementById("")
// }

// //store the scores on local storage
// function setScore() {
//     localStorage.setItem("highscore", score);
//     localStorage.setItem("highscoreName",  document.getElementById('name').value);
//     getScore();
// }


// function getScore() {
//     var quizContent = `
//     <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
//     <h1>` + localStorage.getItem("highscore") + ` %</h1><br>

//     <button onclick="resetGame()">Play Again!</button>`;

//     document.getElementById("quizBody").innerHTML = quizContent;
// }


// //reset the game
// function resetGame() {
//     clearInterval(timer);
//     score = 0;
//     currentQuestion = -1;
//     timeLeft = 0;
//     timer = null;

//     document.getElementById("timeLeft").innerHTML = timeLeft;

//     var quizContent = `<h1> Code Quiz!</h1>
//     <h3> Click to play again! </h3>
//     <button onclick="start()">Start!</button>`

//     document.getElementById("quizBody").innerHTML = quizContent;
// }

// //deduct 15seconds from the timer if user chooses an incorrect answer
// function incorrect() {
//     timeLeft -= 15;
//     next();
// }

// //increases the score by 20points if the user chooses the correct answer
// function correct() {
//     score += 20;
//     next();
// }

// //loops through the questions
// function next() {
//     currentQuestion++;

//     if (currentQuestion > questions.length - 1) {
//         endGame();
//         return;
//     }

//     var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

//     for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
//         var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
//         buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
//         if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
//             buttonCode = buttonCode.replace("[ANS]", "correct()");
            
//         } else {
//             buttonCode = buttonCode.replace("[ANS]", "incorrect()");
//         }
//         quizContent += buttonCode
//     }


//     document.getElementById("quizBody").innerHTML = quizContent;
// }
