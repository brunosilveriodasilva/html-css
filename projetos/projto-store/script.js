const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item'); 
const dots = document.querySelectorAll('.dot');
const numbersIndicator = document.querySelector('.numbers');
const list = document.querySelectorAll('.list');
const smButtons = document.querySelectorAll('.btn');
const urls = [
    'https://www.apple.com/br/watch/?afid=p240%7Cgo~cmp-22996552056~adg-186624687753~ad-778108676591_kwd-52218226~dev-c~ext-~prd-~mca-~nt-search&cid=wwa-br-kwgo-watch-core-watchfam-watchfamily_hero_avail_100825-AppleWatch-Core-Exact-AppleWatch-Exact-apple+watch',
    'https://www.apple.com/br/airpods/?afid=p240%7Cgo~cmp-23006674489~adg-188742252161~ad-778112783723_kwd-50006603375~dev-c~ext-~prd-~mca-~nt-search&cid=wwa-br-kwgo-airpods-noncore_airpodsfamily-airpodsfamily-airpodsfamily_hero_avail_100825-AirPods-AirPods-airpods',
    'https://www.apple.com/br/airpods-max/?afid=p240%7Cgo~cmp-23006674489~adg-188742252161~ad-778112783723_kwd-50006603375~dev-c~ext-286846637157~prd-~mca-~nt-search&cid=wwa-br-kwgo-airpods-noncore_airpodsfamily-airpodsfamily-airpodsfamily_hero_avail_100825-AirPods-AirPods-airpods',
];

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

smButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === active) { 
            const url = urls[active];
            if (url) window.open(url, '_blank');
        }
    })
});

