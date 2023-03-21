let nun = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []
function isnunmero(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}
function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
    
}


function adicionar(){
    if (isnunmero(nun.value) && !inlista(nun.value, valores)){
    // teste logico window.alert('tudo ok')
        valores.push(Number(nun.value))
        let item = document.createElement ('option')
        item.text = `Valor ${nun.value} foi adiconado`
        lista.appendChild(item)
        res.innerHTML = ''
}else {
    window.alert('Valor inválido ou já encontrado na lista.')
}
nun.value ='' // apagar
nun.focus() // o numero apos digitado
}
function finalizar(){
   if (valores.length == 0) {
   window.alert ('Adicione valores ante de finalizar!')
   } else {
    let tot = valores.length //total de valores
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior)
        maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]

        

    }
    media = soma / tot
    
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
    res.innerHTML += `<p> O maior valor informado ${maior}</p>`
    res.innerHTML += `<p>O menor valor inforrmado foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    res.innerHTML += `<p>A media dos valores é ${media}</p>`
   }
}
