const answers = [
    [1, 1], [2, 2], [4, 4], [3, 2], [6, 12], [5, 7], [18, 12], [17, 17], [24, 16], [7, 8], [12, 7], [11, 13], [15, 12], [24, 32], [25, 15], [35, 45], [65, 35], [19, 19], [16, 16], [15, 15][24, 24], [27, 35], [9, 5], [18, 19], [31, 45], [3, 3], [2, 3]
];

const opts = ["+", "-"]

const question = document.querySelector("#show-qst");

let score = 0;
let totalscore = 0;

let num1 = 0;
let num2 = 0;

let isCorrect = false;
let showCorrect;

let signOp;


function myFunc() {
    const j = Math.floor(Math.random() * answers.length);
    const k = Math.floor(Math.random() * opts.length)
    for (let i = 0; i < 1; i++) {
        num1 = answers[j][0];
        num2 = answers[j][1];
        signOp = opts[k]
        result = eval(`${num1} ${signOp} ${num2}`);
        question.innerHTML = num1 + opts[k] + num2 + " = ";
    }
}

myFunc()


const btnCheck = document.getElementById("btn");

btnCheck.addEventListener("click", function () {
    let input = document.getElementById("submit").value;
    let btnCheck = document.getElementById("btn");

    if (+input === result) {
        btnCheck.innerHTML = "Correct!";
        btnCheck.style.backgroundColor = "#2BD400";
        isCorrect = true;
        showCorrect = setTimeout(statusUpdate, 1500);
        score = 10;
        totalscore += 10;
    } else if (+input != result || +input === "") {
        btnCheck.innerHTML = "Incorrect!"
        btnCheck.style.backgroundColor = "#F28F1A";
        isCorrect = false;
        showCorrect = setTimeout(statusUpdate, 1500);
        score = 0;
    }
    generateResult(input);
    myFunc();
    document.getElementById("submit").value = "";
    document.getElementById("score-show").innerHTML = totalscore;
    saveScore();
});



function generateResult() {
    let input = document.getElementById("submit").value;
    const resultAdd = document.querySelector("#add-result");
    const divAdd = document.createElement("div");
    divAdd.classList.add("result-add");
    divAdd.style.textAlign = "left";
    resultAdd.appendChild(divAdd);

    const probelm = document.createElement("span");
    const correct = document.createElement("span");
    const givenAnswer = document.createElement("span");
    const scoreGiven = document.createElement("span");

    probelm.innerHTML = num1 + signOp + num2;
    correct.innerHTML = result;
    givenAnswer.innerHTML = input;
    scoreGiven.innerHTML = score;



    if (isCorrect === true) {
        givenAnswer.style.color = "#2BD400";
    } else {
        givenAnswer.style.color = "#F28F1A"
    }

    if (input === "") {
        givenAnswer.innerHTML = "Empty ";
    }


    divAdd.appendChild(probelm);
    divAdd.appendChild(correct);
    divAdd.appendChild(givenAnswer);
    divAdd.appendChild(scoreGiven);

}


function statusUpdate() {
    btnCheck.innerHTML = "Check";
    btnCheck.style.backgroundColor = "#0019FF";
    btnCheck.style.transition = "400ms";
}


let gameHistory = [];

function saveScore() {
    const score = +document.querySelector("#score-show").innerHTML;
    localStorage.setItem('score', JSON.stringify(score));


}

function init() {
    if (localStorage.score) {
        const scores = JSON.parse(localStorage.score);

        document.querySelector("#score-show").innerHTML = "Your last score was " + scores;
    }

}

