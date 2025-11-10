const unit = document.getElementById("unit-num");
const btAdd = document.getElementById("add");
const btToDecrease = document.getElementById("to-decrease");

let unitNum = Number(unit.textContent);

btAdd.addEventListener("click", () => {
  unitNum++;
  unit.textContent = unitNum;
  unit.style.fontWeight = 'bolder'
});

btToDecrease.addEventListener("click", () => {
  if (unitNum > 1) {
    unitNum--;
    unit.textContent = unitNum;
    unit.style.fontWeight = 'bolder'
  }
});
