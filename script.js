function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-menino.png')
                document.body.style.background = '#838991'
            } else if(idade < 21) {
                //joven
                img.setAttribute('src', 'fotojovenhomem.png')
                document.body.style.background = '#9260b0'
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'fotohomemadulto.png')
                document.body.style.background = '#838991'
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosohomem.png')
                document.body.style.background = '#6ea4ef'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotomenina.png')
                document.body.style.background = '#6ea4ef'
            } else if(idade < 21) {
                //joven
                img.setAttribute('src', 'fotojovenmulher.png')
                document.body.style.background = '#838991'
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'fotomulheradulta.png')
                document.body.style.background = '#9260b0'
            } else {
                //idoso
                img.setAttribute('src', 'fotomulheridosa.png')
                document.body.style.background = '#6ea4ef'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 