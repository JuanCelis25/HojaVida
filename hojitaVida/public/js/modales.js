const sobre = document.getElementById('sobre');
const abrir = document.getElementById('about');
sobre.addEventListener('click',()=>{
    abrir.classList.replace('about','about_show');
    abrir1.classList.replace('ge_show','ge');
    abrir2.classList.replace('contac_show','contac');
    abrir3.classList.replace('ban_show','ban');
});

const sobre1 = document.getElementById('habili');
const abrir1 = document.getElementById('ge');
sobre1.addEventListener('click',()=>{
    abrir1.classList.replace('ge','ge_show');
    abrir.classList.replace('about_show','about');
    abrir2.classList.replace('contac_show','contac');
    abrir3.classList.replace('ban_show','ban');
});

const sobre2 = document.getElementById('contacto');
const abrir2 = document.getElementById('contac');
sobre2.addEventListener('click',()=>{
    abrir2.classList.replace('contac','contac_show');
    abrir.classList.replace('about_show','about');
    abrir1.classList.replace('ge_show','ge');
    abrir3.classList.replace('ban_show','ban');
 
});

const sobre3 = document.getElementById('inicio');
const abrir3 = document.getElementById('ban');
sobre3.addEventListener('click',()=>{
    abrir3.classList.replace('ban','ban_show');
    abrir.classList.replace('about_show','about');
    abrir1.classList.replace('ge_show','ge');
    abrir2.classList.replace('contac_show','contac');
 
});