// page swipe
//{
let spinWheelPage = document.querySelector('#spin-wheel-page');
let tossPage = document.querySelector('#toss-page');
let initX;

function p1handleTouchStart(e) {
    initX = e.touches[0].clientX;
};

function p1handleTouchMove(e) {
    let touch = e.touches[0];
    let coordinateChange = initX - touch.clientX;
    if (coordinateChange < 0) {
        return;
    }
    spinWheelPage.style.left = '-' + coordinateChange + 'px';
    tossPage.style.display = 'block';
    tossPage.style.left = (screen.width - coordinateChange) + 'px';
};

function p1handleTouchEnd(e) {
    let coordinateChange = initX - e.changedTouches[0].clientX;
    let threshold = screen.width / 3;
    if (coordinateChange < threshold) {
        spinWheelPage.style.left = 0;
        tossPage.style.left = '100%';
        tossPage.style.display = 'none';
    } else {
        spinWheelPage.style.transition = 'all .3s';
        tossPage.style.transition = 'all .3s';
        spinWheelPage.style.left = '-100%';
        tossPage.style.left = '0';
        tossPage.style.display = 'block';
    }
}

function p2handleTouchStart(e) {
    initX = e.touches[0].clientX;
    spinWheelPage.style.transition = '';
    tossPage.style.transition = '';
    spinWheelPage.style.display = 'none';
};

function p2handleTouchMove(e) {
    let touch = e.touches[0];
    let coordinateChange = touch.clientX - initX;
    if (coordinateChange < 0) {
        return;
    }
    spinWheelPage.style.display = 'flex';
    spinWheelPage.style.left = (coordinateChange - screen.width) + 'px';
    tossPage.style.left = coordinateChange + 'px';
};

function p2handleTouchEnd(e) {
    let coordinateChange = e.changedTouches[0].clientX - initX;
    let threshold = screen.width / 4;
    if (coordinateChange < threshold) {
        spinWheelPage.style.left = '-100%';
        spinWheelPage.style.display = 'none';
        tossPage.style.left = '0';
    } else {
        spinWheelPage.style.transition = 'all .3s';
        tossPage.style.transition = 'all .3s';
        spinWheelPage.style.left = '0';
        tossPage.style.left = '100%';
    }
}
//}