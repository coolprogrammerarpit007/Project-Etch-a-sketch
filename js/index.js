`use strict`;

let color = ``;
let index;
let flag = true;
// getting acess to the color buttons

const blackBtn = document.getElementById(`black`);
const colorBtn = document.getElementById(`colorful`);
const sizeBtn = document.getElementById(`size`);
const clearBtn = document.getElementById(`clear`);

const container = document.querySelector(`.container`);

// change to black color
function changeToBlack() {
  flag = true;
  color = `#000`;
  return color;
}

// function to change color
function changeColor() {
  color = `#`;
  let text = `0123456789ABCDEF`;
  for (let i = 0; i < 3; i++) {
    index = Math.floor(Math.random() * text.length);
    color += text[index];
  }
  flag = false;
  return color;
}

// function to clear
function clearAll(){
  color = ``;
  const gridBox = document.querySelectorAll(`.box`);
  if(gridBox){
    gridBox.forEach(grid =>{
      grid.style.backgroundColor = ``;
    })
  }
  
}

// Adding event listener to the size btn to create a N*N Grid

const gridSize = function () {
  const gridSize = Number(prompt(`Enter Size b/w 1 and 100`));
  if (gridSize <= 100) {
    container.innerHTML = ``;
    for (let i = 0; i < gridSize * gridSize; i++) {
      const div = document.createElement(`div`);
      div.classList.add(`box`);
      container.append(div);
      container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    }

    const gridBox = document.querySelectorAll(`.box`);
    gridBox.forEach((box) => {
      box.addEventListener(`mouseover`, function (e) {
        if (flag) {
          box.style.backgroundColor = `${changeToBlack()}`;
        } else {
          box.style.backgroundColor = `${changeColor()}`;
        }
      });
    });
  } else {
    alert(`Please enter a correct value!`);
  }
};

sizeBtn.addEventListener(`click`, gridSize);

// Adding event listener to the black btn

blackBtn.addEventListener(`click`, function (e) {
  changeToBlack();
});

// Adding event listener to the color btn

colorBtn.addEventListener(`click`, changeColor);


// now adding event listener to the clear btn

clearBtn.addEventListener(`click`,function(e){
  clearAll();
})
