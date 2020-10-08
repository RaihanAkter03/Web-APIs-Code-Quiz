var container = document.querySelector(".container-fluid")
var scoreContainer = document.getElementById("scoreContainer");
var goBack = document.querySelector(".GO-Back");
var clear = document.querySelector(".clear");


// function for get score on score page for showing highscore..
function getScore() {
    var scoreObject = JSON.parse(localStorage.getItem('score'));
    if (scoreObject) {
        console.log(scoreObject)
        scoreContainer.textContent = "1. "+ scoreObject.name + "  highest score  " + scoreObject.score;
    }

    goBack.setAttribute("value", "Go Back");
    clear.setAttribute("value", "Clear HighScore");

    container.appendChild(goBack);
    container.appendChild(clear);
}

getScore(); // function calling

// click on go back to start game again
goBack.addEventListener("click", function (event) {
    event.preventDefault();
    location.href = "./index.html";

});

// clear score button will clear the content..
clear.addEventListener("click", function (event) { 
    event.preventDefault();
    scoreContainer.textContent = "";

})



