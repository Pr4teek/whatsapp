const mess = 'bhumika gets angry in faltu... :)';

document.getElementById('whatsapp_share').addEventListener('click', ()=> {
    let whatsappUrl = `whatsapp://send?text= ${encodeURIComponent(mess)}`; 
    window.location.href =  whatsappUrl;
});


