// importo tasto hamburgher
const myHamburgher = document.getElementById('hamburgher');
myHamburgher.addEventListener('click',
    function() {
        // importo menu nascosto e al click gli sovrascrivo la classe active
        const hiddenMenu = document.getElementById('hidden-menu');
        hiddenMenu.classList.add('active')
    }
);