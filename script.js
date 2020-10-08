var header = document.querySelector("#indexcontent");
var score = document.querySelector("#view-header");
var highScore = document.querySelector(".high-score");
var time = document.querySelector("#time-header");
var mainQuiz = document.querySelector(".container-fluid");

var secondsLeft = 100;
var score = 100;

var quesAns = [
    {
        ques: "What are JavaScript Data Types?",
        option: ["Variable", "String", "score", "button"],
        ans: "String"
    },
    {
        ques: "Inside which HTML element do we put the javaScript?",
        option: ["<javaScript>", "<js>", "<script>", "<scripting>"],
        ans: "<script>"
    },
    {
        ques: "Where is the correct place to insert a javaScript?",
        option: ["Both the <head> and the <body> section correct", "The <body> section", "The <head> section"],
        ans: "Both the <head> and the <body> section correct"
    },
    {
        ques: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        option: ["<script href='xxx.js'>", "<script src='xxx.js'>", "<script name='xxx.js'>"],
        ans: "<script src='xxx.js'>"
    },
    {
        ques: "The external JavaScript file must contain the <script> tag?",
        option: ["True", "False"],
        ans: "False"
    }
];

var headerH2 = document.createElement("h1");
headerH2.textContent = "Coding quiz challenge"
mainQuiz.appendChild(headerH2);
headerH2.setAttribute("class", "header1");

var headerH5 = document.createElement("h5");
headerH5.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answer will penalize your score time by ten second";
mainQuiz.appendChild(headerH5);
headerH5.setAttribute("class", "header2");

var startButton = document.createElement("button")
startButton.textContent = "Start Quiz";
mainQuiz.appendChild(startButton);
startButton.setAttribute("id", "start-button");

var round = 0;

startButton.addEventListener("click", startgame)

function startgame() { 
    setTime();
    // round = 0;
    generateQuestions();
};

function generateQuestions() { 

    var question = quesAns[round].ques;
        mainQuiz.textContent = question;
    // console.log(mainQuiz.textContent = question);
    
    for (var j = 0; j < quesAns[round].option.length; j++) {
        var ansLi = document.createElement("div");
        var ansButton = document.createElement("button");

        ansButton.textContent = j + 1 + " " + quesAns[round].option[j];

        mainQuiz.appendChild(ansLi);
        mainQuiz.appendChild(ansButton);
        console.log(ansButton);

        ansLi.setAttribute("class", "ans-div")
        ansButton.setAttribute("class", "answer");
        
        ansButton.setAttribute("innertext", quesAns[round].option[j]);
        ansButton.addEventListener("click", checkAnswers);        

    };    
    
};

function checkAnswers(event) {
    var element = event.target;
    if (element.matches("button") === true) {
        // alert("question number 1");
        
        var actualresult = quesAns[round].ans;        
        var expectedValue = element.getAttribute("innertext");

        console.log(expectedValue);

        if (actualresult !== expectedValue) {
            score = score - 20;
            console.log("Fail");
            
        } else { 
            console.log("Pass");
        }
    }
    round++;
    if (round < quesAns.length) {
        generateQuestions();
    } else { 
        // round++;
        gameOver();
    }
        
};

function gameOver() {

    var alldone = document.createElement("h1");
    mainQuiz.textContent = "All Done!"
    mainQuiz.appendChild(alldone);
    alldone.setAttribute("class", "all-done");

    var finalScore = document.createElement("h6");
    finalScore.textContent = "Your Final Score is : " + score;
    mainQuiz.appendChild(finalScore);
    finalScore.setAttribute("class", "final-score");

    var initialE = document.createElement("input");
    initialE.setAttribute("type", "text");
    initialE.setAttribute("class", "fname");
    initialE.setAttribute("placeholder", "Your Name");
    mainQuiz.appendChild(initialE);

    
    var submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submit-button");
    submitButton.setAttribute("value", "Submit");
    // submitButton.setAttribute("href", "./score.html");
    mainQuiz.appendChild(submitButton);

    submitButton.addEventListener("click", function (event) {
        
        event.preventDefault();
        var initial = document.querySelector(".fname").value;
        // console.log(initial);

        if (initial == "") {
            var paragraph = document.createElement("p");
            paragraph.textContent = "Please enter your name to get the score";
            mainQuiz.appendChild(paragraph);
            paragraph.setAttribute("class", "initial-miss");
        } else {
            var scoreObject = {
                name: initial,
                score: score
            };

            localStorage.setItem('score', JSON.stringify(scoreObject));
            location.href = "./score.html";
        }
    });    
};


function setTime() {
    var timerInterval = setInterval(function () {
         secondsLeft--;
    var timeLeft = document.querySelector(".time-left");
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0 ) {
            clearInterval(timerInterval);            
        }
    }, 1000);
}


