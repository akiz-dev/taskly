var btnMenuMobile = document.getElementById('btnMenuMobile');
var btnMenuClose = document.getElementById('btnMenuClose');

var body = document.querySelector('body');

// show navbar and hide menu button mobile and show close menu button
$('#btnMenuMobile').on('click', ()=>{
    $('#navbarHeader').toggle('slow')
    body.style.background = '#1E293B80'

    btnMenuMobile.style.display = 'none';
    btnMenuClose.style.display = 'block';
    btnMenuClose.style.color = '#F8FAFC';
})

$('#btnMenuClose').on('click', ()=> {
    $('#navbarHeader').toggle('slow')
    body.style.background = '#F8FAFC'

    btnMenuClose.style.display = 'none';
    btnMenuMobile.style.display = 'block'

})