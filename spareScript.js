//code for a function that saves rows history
//********************************************************** */


// const rowArr = [];

// const rows = document.querySelectorAll(".result-add");
// for (const row of rows) {
//     rowArr.push(row.innerHTML);
// }

// localStorage.setItem("res", JSON.stringify(rowArr));
// console.log(rowArr);


//code for loading history score on refresh
//*********************************************************** */


// if (localStorage.res) {
//     const rows = JSON.parse(localStorage.res);

//     for (const row of rows) {
//         const div = document.createElement("div");
//         div.innerHTML = row;
//         div.classList.add("result-add")
//         document.querySelector("#add-result").appendChild(div)
//     }

// }