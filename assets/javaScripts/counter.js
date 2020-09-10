let decrement = document.querySelector("#decrement");
let increment = document.querySelector("#increment");
let counter = document.querySelector("#count");
let header = document.querySelector("#header");
let count = 0;
counter.innerHTML = count;

decrement.addEventListener("click", function () {
  if (count != 0) {
    count -= 1;
    counter.innerHTML = count;
  } else {
    document.body.style.color = "white";
    document.getElementById("header").style.backgroundColor = "red";
  }
  if (count > 10) {
    document.body.style.color = "white";
    document.getElementById("header").style.backgroundColor = "red";
  } else if (count < 10 && count > 0) {
    document.body.style.color = "black";
    document.getElementById("header").style.backgroundColor = "silver";
  }
});

increment.addEventListener("click", function () {
  if (count >= 0) {
    count += 1;
    counter.innerHTML = count;
  }

  if (count > 10) {
    document.body.style.color = "white";
    document.getElementById("header").style.backgroundColor = "red";
  } else {
    document.body.style.color = "black";
    document.getElementById("header").style.backgroundColor = "silver";
  }
});
