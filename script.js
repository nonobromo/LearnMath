const question = document.querySelector("#show-qst");

let score = 0;
let totalscore = 0;

let num1 = 0;
let num2 = 0;



let isCorrect = false;
let showCorrect;

let signOp;

let questions = [];

let operator = document.getElementById("operator");
let rangeCheck = document.getElementById("range");



function pickRange() {
    if (rangeCheck.value === "1-5") {
        questions = questions = [...range1];
    } else if (rangeCheck.value === "5-10") {
        questions = questions = [...range2];
    } else if (rangeCheck.value === "10-15") {
        questions = questions.value = [...range3];
    } else if (rangeCheck.value === "15-20") {
        questions = questions = [...range4];
    }
    myFunc()
}




function myFunc() {
    signOp = operator.value;
    if (signOp === "+" || signOp === "-") {

        document.querySelector("#range").style.display = "block";
        document.querySelector("#range-leb").style.display = "block";


        const j = Math.floor(Math.random() * questions.length);
        num1 = questions[j][0];
        num2 = questions[j][1];

        result = eval(`${num1} ${signOp} ${num2}`);
        question.innerHTML = num1 + signOp + num2 + " = ";
    }


    const k = Math.floor(Math.random() * multi.length);
    let multiProb = multi[k];

    if (signOp === "*") {
        document.querySelector("#range").style.display = "none";
        document.querySelector("#range-leb").style.display = "none";

        num1 = multiProb[0]
        num2 = multiProb[1]
        result = eval(`${num1} ${signOp} ${num2}`);
        question.innerHTML = num1 + signOp + num2 + " = ";
    }
}


pickRange();
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
    document.getElementById("submit").value = "";
    document.getElementById("score-show").innerHTML = totalscore;
    pickRange()
    myFunc()
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

init()



