"use strict";

const allBars = document.querySelectorAll(".bar");

let arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 32));

addNum();

function addNum() {
  const queueSize = Math.floor(Math.random() * 32);

  setTimeout(addNum, 1000);
  arr.shift();
  arr.push(queueSize);
  console.log(arr);
  height();
}

height();
function height() {
  for (let i = 0; i < 40; i++) {
    allBars[i].style.height = arr[i] + "vw";
  }
}
