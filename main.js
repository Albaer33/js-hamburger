// importo tasti su javascript
const myHamburgher = document.querySelector('.header-right > a');
myHamburgher.addEventListener('click',
    function() {
        // al click sovrascrivo la classe active
        const hiddenMenu = document.querySelector('.hamburger-menu');
        console.log(hiddenMenu);
        hiddenMenu.classList.add('active');
    }
);

const myCross = document.querySelector('.close');
myCross.addEventListener('click',
    function() {
        // chiudo il menù
        const hiddenMenu = document.querySelector('.hamburger-menu');
        hiddenMenu.classList.remove('active');
    }
);