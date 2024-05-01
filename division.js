//Array Ranges

let divideProbs1 = [];

let numb2 = 100;

//Loops That create Division Problems and pushes the first index only if its modules = 0;

while (numb2 > 0) {
    if (numb2 % 2 === 0) {
        divideProbs1.push([numb2, 2])
    }
    numb2--
}


for (let i = 99; i > 0; i -= 3) {
    if (i % 3 === 0) {
        divideProbs1.push([i, 3])
    }
}

for (let i = 100; i > 0; i -= 4) {
    if (i % 4 === 0) {
        divideProbs1.push([i, 4])
    }
}


for (let i = 100; i > 0; i -= 5) {
    if (i % 5 === 0) {
        divideProbs1.push([i, 5])
    }
}

for (let j = 96; j > 0; j -= 6) {
    if (j % 6 === 0) {
        divideProbs1.push([j, 6])
    }
}


for (let j = 98; j > 0; j -= 7) {
    if (j % 7 === 0) {
        divideProbs1.push([j, 7])
    }
}

for (let j = 96; j > 0; j -= 8) {
    if (j % 8 === 0) {
        divideProbs1.push([j, 8])
    }
}

for (let j = 99; j > 0; j -= 9) {
    if (j % 9 === 0) {
        divideProbs1.push([j, 9])
    }
}

let multiArr = [...divideProbs1];
