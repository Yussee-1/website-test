const yes = document.getElementById('Yes');
const no = document.getElementById('No');
let yesFontSize = 120;
let noFontSize = 120;
let yesSize = 250;
let noSize = 250;

no.addEventListener('click', () => {
    noFontSize *= 0.75;
    yesFontSize *= 1.25;
    noSize *= 0.75;
    yesSize *= 1.25;
    yes.style.fontSize = `${yesFontSize}px`;
    no.style.fontSize = `${noFontSize}px`;
    yes.style.width = `${yesSize}px`;
    yes.style.height = `${yesSize}px`;
    no.style.width = `${noSize}px`;
    no.style.height = `${noSize}px`;
});