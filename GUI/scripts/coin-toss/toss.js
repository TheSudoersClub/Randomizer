let heads = 0, tails = 0;
let tossButton = document.querySelector('#toss-btn');
let tossCoin = document.querySelector('.toss__coin-container');
let tossSfx = document.getElementById('toss-sfx');

tossButton.addEventListener('click', function () {
    let i = Math.floor(Math.random() * 2)

    tossCoin.style.animation = 'none'
    tossSfx.play();

    setTimeout(function () {
        if (i) {
            setTimeout(function () {
                tossCoin.style.animation = 'toss-spin-heads 3s forwards';
            }, 100);
            heads++;
        }
        else {
            setTimeout(function () {
                tossCoin.style.animation = 'toss-spin-tails 3s forwards';
            }, 100);
            tails++;
        }

        tossButton.disabled = true;
        setTimeout(function () {
            tossButton.disabled = false;
        }, 3000);

    }, 50);
})