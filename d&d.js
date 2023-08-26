let main = document.getElementById('introA');
let meat = document.getElementById('meatA');
let end = document.getElementById('endA');
let intro = document.getElementById('intro');
let body = document.getElementById('meat');
let footer = document.getElementById('end');
let mainClick = main.addEventListener('click', mainGlow);
let meatClick = meat.addEventListener('click', meatGlow);
let endClick = end.addEventListener('click', endGlow);
mainClick;
meatClick;
endClick;
function mainGlow() {
    intro.classList.add('flash')
    setInterval(function() {
        intro.classList.remove('flash')
    }, 1000)    
}
//Coulndt figure out how to tell the difference between ID's
function meatGlow() {
    body.classList.add('flash')
    setInterval(function() {
        body.classList.remove('flash')
    }, 1000)    
}
function endGlow() {
    footer.classList.add('flash')
    setInterval(function() {
        footer.classList.remove('flash')
    }, 1000)    
}