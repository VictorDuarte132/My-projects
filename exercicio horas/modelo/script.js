function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var data2 = new Date()
    var hora = data.getHours()
    var minutos = data2.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#d3a98b'
        //bom dia
    } else if ( hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#a45421'
        //boa tarde
    } else {
        img.src = 'fotonoite.png'
        document.body.style.backgroud = '#271f31'
        //boa noite
    }
}
