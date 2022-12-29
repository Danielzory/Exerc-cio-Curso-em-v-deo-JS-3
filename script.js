function contar() {
let ni = document.getElementById('txti')
let nf = document.getElementById('txtf')
let inter = document.getElementById('intervalo')
let res = document.getElementById('txtr')

    if(ni.value.length == 0 || nf.value.length == 0 || inter.value.length == 0){
        window.alert ('Verifique os dados')
    }else{
        res.innerHTML = 'Contando... <br>'
        let vi = Number (ni.value)
        let vf = Number (nf.value)
        let passo = Number (inter.value)
        if(passo <= 0 ){
            window.alert('Intervalo inválido, considerando INTERVALO 1')
            passo = 1
        }
        if (vi < vf) {
        for (let i = vi; i <= vf; i += passo){
            res.innerHTML += ` ${i} \u{1F596}`
        }
    } else {
        for (let i = vi; i >= vf; i -= passo){
            res.innerHTML += ` ${i} \u{1F596}`
        }
    } 
        res.innerHTML += ` \u{1F44C}`
    }
}    
    