function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var img = document.getElementById('imagem')
    var fano = document.getElementById('txtano')
    var res = document.querySelector (`div#res`)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade  = ano - Number(fano.value)
    res.innerHTML = `Idade calculada : ${idade}`
    var gen = ''
    //var img = document.createElement('img')
   // img.setAttribute('id', 'foto')

    if (fsex[0].checked) { //HOMEM
        gen = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
                img.src = 'garotinho.png'
           // img.setAttribute('src', 'garotinho.png')
        }else if (idade < 21){
            //garoto
                img.src = 'garoto.png'
            //img.setAttribute('src', 'garoto.png')
        }else if (idade < 60) {
            //adulto
                 img.src = 'homem.png'
           // img.setAttribute('src', 'homem.png')
        }else {
            //idoso
                img.src = 'idoso.png'
            //img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked){ //MULHER
        gen = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
                img.src = 'garotinha.png'
            //img.setAttribute('src', 'garotinha.png')
        }else if (idade < 21){
            //garoto
                img.src = 'garota.png'
           // img.setAttribute('src', 'garota.png')
        }else if (idade < 60) {
            //adulto
                img.src = 'mulher.png'
           // img.setAttribute('src', 'mulher.png')
        }else {
            //idoso
                img.src = 'idosa.png'
            //img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${gen} com ${idade} anos.` 
   // var img2 = res.appendChild(img)
    
    
}
}