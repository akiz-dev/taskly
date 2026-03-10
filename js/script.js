var btnMenuMobile = document.getElementById('btnMenuMobile');
var btnMenuClose = document.getElementById('btnMenuClose');

var body = document.querySelector('body');

// show navbar and hide menu button mobile and show close menu button
$('#btnMenuMobile').on('click', ()=>{
    $('#navbarHeader').toggle('slow')

    btnMenuMobile.style.display = 'none';
    btnMenuClose.style.display = 'block';
    btnMenuClose.style.color = '#0F172A';
})

$('#btnMenuClose').on('click', ()=> {
    $('#navbarHeader').toggle('slow')

    btnMenuClose.style.display = 'none';
    btnMenuMobile.style.display = 'block'

})