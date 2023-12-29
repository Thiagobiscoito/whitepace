let ul = document.querySelector('nav .ul'); /* seleciona a nav e o ul do html */

/* função de abrir o menu*/
function openMenu(){
    ul.classList.add('open');
}

/* função de fechar o menu */
function closeMenu(){
    ul.classList.remove('open');
}