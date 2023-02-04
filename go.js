const containerText = document.querySelector("div#container");

/*Selecting the input from the html doc*/
const inputAge = document.querySelector(".input");
const nextAge = document.querySelector(".container > p > span");

inputAge.addEventListener("keyup", () => {
  let val = inputAge.value;
  if (val === '') {
    return 0;
  }
  
  nextAge.textContent = 2023 - Number.parseInt(val, 10) + ' ' + 'years.';
});

let num = Math.floor(2.6);
let count = "x";
let answer = num + count; //Number.parseInt(count, 10);
console.log(num);

/*
document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );
  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};
*/
