"use strict";

console.log("get started");

const btn = document.querySelector(".btn1");
const input1 = document.querySelector(".input--1");
const input2 = document.querySelector(".input--2");
const input3 = document.querySelector(".input--3");
const input4 = document.querySelector(".input--4");
const input5 = document.querySelector(".input--5");
const secret_details = document.querySelector(".secret-details");
const notify__1 = document.querySelector(".notify-name");
const notify__2 = document.querySelector(".notify-number");
const notify__3 = document.querySelector(".notify-date");
const notify__4 = document.querySelector(".notify-year");
const notify__5 = document.querySelector(".notify-cvc");
const cre__container = document.querySelector(".credential-container");
const greetings = document.querySelector(".greetings");

const hiddenRemover = function (x) {
  x.classList.remove("hidden");
};

btn.addEventListener("click", function () {
  const input01 = input1.value;
  const input02 = input2.value;
  const input03 = input3.value;
  const input04 = input4.value;
  const input05 = input5.value;
  const inpArr = [input01, input02, input03, input04, input05];
  console.log(inpArr);

  // inpArr.forEach(inp => {
  //   if(inp === '') hiddenRemover(inp)
  // })
  // console.log(input01);
  // const input01 = input1.value;
  // const p = document.createElement('p')
  // p.style.color = '#e03131';
  // p.style.fontsize = '100px'
  // p.textContent = 'fill the value of cardholder name'
  // if(input01 === '') {
  //   secret_details.append(p)
  // }

  if (input01 === "") hiddenRemover(notify__1);
  if (input02 === "") hiddenRemover(notify__2);
  if (input03 === "") hiddenRemover(notify__3);
  if (input04 === "") hiddenRemover(notify__4);
  if (input05 === "") hiddenRemover(notify__5);

  if (
    input01 !== "" &&
    input02 !== "" &&
    input03 !== "" &&
    input04 !== "" &&
    input05 !== ""
  ) {
    cre__container.classList.add("hidden");
    greetings.classList.remove("hidden");
    console.log("good");
  }
});
