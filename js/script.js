let btnMenuMobile = document.getElementById('btnMenuMobile');
let btnMenuClose = document.getElementById('btnMenuClose');

let header = document.getElementById('header');


// adiciona e remove cor de fundo do elemento ehader quando ativa o scroll da pagina
window.addEventListener('scroll', function() {
    if(window.scrollY > 10) {
        header.classList.add("headerScrolled")
    } else {
        header.classList.remove("headerScrolled")
    }
})
// ***


// mostra menu e troca o icone do botão e cor do background do header
btnMenuMobile.addEventListener('click', ()=> {
    $(btnMenuClose).slideDown();
    $(btnMenuMobile).hide();

    // navbarHeader show
    $('#navbarHeader').slideToggle();

    header.classList.add('headerBgColor');
    
})


btnMenuClose.addEventListener('click', ()=>{
    $(btnMenuClose).hide();
    $(btnMenuMobile).slideDown();

    // navbarHeader hide
    $('#navbarHeader').slideToggle();

    header.classList.remove('headerBgColor')
})