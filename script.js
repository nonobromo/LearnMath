const question = document.querySelector("#show-qst");
const btnReset = document.querySelector(".clear-btn");
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


//Number ranges for addition and subtraction
rangeCheck.addEventListener("input", pickRange);
operator.addEventListener("input", randProblem);
btnReset.addEventListener("click", clearHistory);

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
    randProblem()
}

//Creates A Random problem to solve based on the operator that was chosen
function randProblem() {
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

    const divIndex = Math.floor(Math.random() * multiArr.length);
    let divProb = multiArr[divIndex]

    if (signOp === "/") {
        document.querySelector("#range").style.display = "none";
        document.querySelector("#range-leb").style.display = "none";

        num1 = divProb[0];
        num2 = divProb[1];
        result = eval(`${num1} ${signOp} ${num2}`);
        question.innerHTML = num1 + signOp + num2 + " = ";
    }
}

pickRange();
randProblem()

const btnCheck = document.getElementById("btn");
//Clicking on this button checks if the user has answered correctly and generets the result below in the history area
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
    document.getElementById("score-show").innerHTML = `Score: ${totalscore}`;
    pickRange()
    randProblem()
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

//Clears History and resets Game Score

function clearHistory() {
    const historyRows = document.querySelectorAll(".result-add");

    for (const history of historyRows) {
        history.remove();
    }
    totalscore = 0;
    document.querySelector("#score-show").innerHTML = `Score: ${totalscore}`
    localStorage.clear();
}


function statusUpdate() {
    btnCheck.innerHTML = "Check";
    btnCheck.style.backgroundColor = "#0019FF";
    btnCheck.style.transition = "400ms";
}

//Saves the last score you reached.
function saveScore() {

    localStorage.setItem('score', JSON.stringify(totalscore));
}


function init() {
    if (localStorage.score) {
        const scores = JSON.parse(localStorage.score);

        document.querySelector("#score-show").innerHTML = "Your last score was " + scores;
    }
}

init()



