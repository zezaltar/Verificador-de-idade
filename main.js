function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade < 4){
                img.setAttribute('src', 'bebe.png') 
            }
            else if(idade >= 4 && idade < 10){
                img.setAttribute('src', 'menino.png') 
            } else if (idade < 21){
                img.setAttribute('src', 'garoto.png')
            }else if (idade < 50){
                img.setAttribute('src', 'homem.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade < 4){
                img.setAttribute('src', 'bebe.png') 
            }
            else if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'garota.png')
            }else if (idade < 50){
                img.setAttribute('src', 'mulher.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}