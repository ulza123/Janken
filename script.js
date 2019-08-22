function getComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'batu';
    if (comp >= 0.34 && 0.67) return 'gunting';
    return 'kertas';
}

function getResult(comp, ply) {
    if (ply == comp) return 'DRAW!';
    if (ply == 'batu') return (comp == 'gunting') ? 'WIN!' : 'LOSE!';
    if (ply == 'gunting') return (comp == 'batu') ? 'LOSE!' : 'WIN!';
    if (ply == 'kertas') return (comp == 'gunting') ? 'LOSE!' : 'WIN!';
}

function spin() {
    const imgComputer = document.querySelector('.img-computer');
    const image = ['batu', 'gunting', 'kertas'];
    let i = 0;
    const timePlay = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - timePlay > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + image[i++] + '.png');
        if (i == image.length) i = 0;
    }, 100);
}

const chose = document.querySelectorAll('li img');
chose.forEach(function (ch) {
    ch.addEventListener('click', function () {
        const chComputer = getComputer();
        const chPlayer = ch.className;
        const result = getResult(chComputer, chPlayer);

        spin();

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + chComputer + '.png');
            const info = document.querySelector('.info');
            info.innerHTML = result;
        }, 1000);
    });
});