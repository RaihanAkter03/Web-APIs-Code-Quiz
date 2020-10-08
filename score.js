var container = document.querySelector(".container-fluid")
var scoreContainer = document.getElementById("scoreContainer");
var goBack = document.querySelector(".GO-Back");
var clear = document.querySelector(".clear");

function getScore() {
    var scoreObject = JSON.parse(localStorage.getItem('score'));
    if (scoreObject) {
        console.log(scoreObject)
        scoreContainer.textContent = "1. "+ scoreObject.name + "  score is = " + scoreObject.score;
    }

    goBack.setAttribute("value", "Go Back");
    clear.setAttribute("value", "Clear HighScore");

    container.appendChild(goBack);
    container.appendChild(clear);
}

getScore();

goBack.addEventListener("click", function (event) {
    event.preventDefault();
    location.href = "./index.html";

});

clear.addEventListener("click", function (event) { 
    event.preventDefault();
    scoreContainer.textContent = "";

})



