var body = document.querySelector('body');
var flexContainerHeader = document.querySelector('.flex_container_header');

// adiciona uma classe que tem o efeito de vidro embassado no menu do header
window.addEventListener('scroll', ( )=> {
    if(window.scrollY > 10) {
        flexContainerHeader.classList.add("scrolled")
    } else {
        flexContainerHeader.classList.remove("scrolled")
    }
})

// esconde o botão de menu hamburguer e mostra o botao de fechar X
$('#btnMenuMobileBars').on('click', ()=> {
    $('#navbarHeader').slideToggle()
    $('#btnMenuMobileBars').hide();
    $('#btnMenuMobileX').slideDown()
    
    // adicona uma classe que escurece o fundo do menu
    flexContainerHeader.classList.add("menu_open");

})

// esconde o botao de fechar o menu mostra o botão de menu hamburguer
$('#btnMenuMobileX').on('click', ()=>{
    $('#navbarHeader').slideToggle()
    $('#btnMenuMobileX').hide();
    $('#btnMenuMobileBars').slideToggle();

    // remove a classe que escurece o fundo do menu
    flexContainerHeader.classList.remove("menu_open");

})