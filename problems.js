

let range1 = [];
let range2 = [];
let range3 = [];
let range4 = [];

for (let i = 0; i < 50; i++) {
    let innerArray = [];
    innerArray.push(Math.floor(Math.random() * 5) + 1);
    innerArray.push(Math.floor(Math.random() * 5) + 1);
    range1.push(innerArray);
}

for (let j = 0; j < 50; j++) {
    let innerArray = [];
    innerArray.push(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
    innerArray.push(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
    range2.push(innerArray);
}


for (let k = 0; k < 50; k++) {
    let innerArray = [];
    innerArray.push(Math.floor(Math.random() * (15 - 10 + 1)) + 10);
    innerArray.push(Math.floor(Math.random() * (15 - 10 + 1)) + 10);
    range3.push(innerArray);
}


for (let l = 0; l < 50; l++) {
    let innerArray = [];
    innerArray.push(Math.floor(Math.random() * (20 - 15 + 1)) + 15);
    innerArray.push(Math.floor(Math.random() * (20 - 15 + 1)) + 15);
    range4.push(innerArray);
}



//Creating a multiplucation table problems array

let multi = [];

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        multi.push([i, j]);
    }
}

multi = [...multi];


