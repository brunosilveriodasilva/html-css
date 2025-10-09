const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item'); 
const dots = document.querySelectorAll('.dot');
const numbersIndicator = document.querySelector('.numbers');
const list = document.querySelectorAll('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');
    
    if (direction > 0) {
        active = active + 1;
        if (active === total) {
            active = 0;
        }
    } else if (direction < 0) {
        active = active -1;
        if (active < 0) {
            active = total -1;
        }
    }
    
    items[active].classList.add('active');
    dots[active].classList.add('active');
    
    numbersIndicator.textContent = `0${active + 1}`;
}

function startInterval() {
    timer = setInterval(() => {
        update(1);
    }, 5000);
}

function stopInterval() {
    clearInterval(timer);
} 

prevButton.addEventListener('click', () => {
    update(-1);
    stopInterval();
    startInterval();   
});

nextButton.addEventListener('click', () => {
    update(1);
    stopInterval();
    startInterval();
});

startInterval();