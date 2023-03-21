function contar() {
    var n = document.getElementById('txtn')
    var res = document.getElementById('res')
    var tab = document.getElementById('seltab')
    if (n.value.length == 0){
        window.alert('[ERRO] Por favor, digite um número!')

    }else {
       var n1 = Number(n.value)
       var c = 1
       while(c <=10){
        var item = document.createElement('option')
        item.text = `${n1} x ${c} = ${n1*c}`
        tab.appendChild(item)
        c++
       }
    }
   
}
//var sla = document.getElementById('res')
//sla.style.textAlign = 'center'