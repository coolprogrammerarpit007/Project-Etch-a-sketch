`use strict`;

// getting acess to all buttons

const blackBtn = document.getElementById(`black`);
const colorBtn = document.getElementById(`colorful`);
const sizeBtn = document.getElementById(`size`);
const clearBtn = document.getElementById(`clear`);
const container = document.querySelector(`.container`);

// state variable
let colorValue;
let flag = ``;

// Event listener to random color button

// Event Listener to the random color

const randomColorGenerator = function () {
  colorValue = `#`;
  const str = `0123456789ABCDEF`;
  for (let i = 0; i < 6; i++) {
    colorValue += str[Math.floor(Math.random() * str.length)];
  }
  return colorValue;
};

colorBtn.addEventListener(`click`, function (e) {
  flag = true;
  randomColorGenerator();
});

// Event listener to the black color button
blackBtn.addEventListener(`click`, function () {
  flag = false;
  colorValue = `#000`;
});

// Event listener to change size of grid

const changeSize = function () {
  container.innerHTML = ``;
  const grid = Number(prompt(`Enter Size b/w 1 and 100`));
  container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

  if (typeof grid === `number`) {
    for (let i = 0; i < grid * grid; i++) {
      const box = document.createElement(`div`);
      box.classList.add(`box`);
      container.append(box);
    }

    // Event listener to the clear button
    clearBtn.addEventListener(`click`, function (e) {
      console.log(`clear button working!`);
      colorValue = ``;

      document.querySelectorAll(`.box`).forEach((box) => {
        box.style.backgroundColor = colorValue;
      });
    });
    // color change over div element
    const boxes = document.querySelectorAll(`.box`);
    boxes.forEach((box) => {
      box.addEventListener("mouseover", (e) => {
        console.log(colorValue);
        if (flag === true) {
          box.style.backgroundColor = randomColorGenerator();
        }
        box.style.backgroundColor = colorValue;
      });
    });
  } else {
    alert(`Enter a valid value...`);
  }
};

sizeBtn.addEventListener(`click`, changeSize);
