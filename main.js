// importo tasti su javascript
const myHamburgher = document.getElementById('hamburgher');
const hiddenMenu = document.getElementById('hidden-menu');
const myCross = document.getElementById('cross');

myHamburgher.addEventListener('click',
    function() {
        // al click sovrascrivo la classe active
        hiddenMenu.classList.add('active');
    }
);
myCross.addEventListener('click',
    function() {
        // chiudo il menù
        hiddenMenu.classList.remove('active');
    }
);