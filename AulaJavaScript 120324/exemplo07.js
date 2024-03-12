let retornoimc
retornoimc = somarimc(68, 1.73)
console.log(retornoimc)
classificarimc(retornoimc)

function somarimc(argPeso, argAltura){
let imc
imc = argPeso / (argAltura ** 2)
return imc
}

function classificarimc(){
    if(imc < 18.5){
        console.log('Desnutrição')
    }

    else if(imc < 25){
        console.log('peso normal')
    }

    else if(imc < 30){
        console.log('sobrepeso')
    }

    else if(imc < 35){
        console.log('obesidade I')
    }

    else if(imc < 40){
        console.log('obesidade II')
    }

    else{
        console.log('Obresidade III')
    }


}