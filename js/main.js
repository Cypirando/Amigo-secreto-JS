
let arrayEmbaralhado = []

// codigo retirado do site http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/
function embaralha(participantes){
    lista = participantes.slice()
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
    arrayEmbaralhado = lista
}

verificaSeIndicesSaoOsMesmos = (arrayOriginal, arrayEmbaralhado) => {
    for (let index = 0; index < arrayOriginal.length; index++) {
        while (arrayOriginal[index] == arrayEmbaralhado[index]) {
            return true;
        }
    }
}

function AmigoSecreto(participantes) {
    if(participantes.length == 0){
        console.log('Fantamas não são aceitos na brincadeira !!!')
        return;
    }

    if(participantes.length % 2 != 0){
        console.log('Poxa, dessa maneira uma pessoa vai ficar sem presente !!!')
        return;
    }

    if(arrayEmbaralhado.length == 0){
        embaralha(participantes)
    }
    while (verificaSeIndicesSaoOsMesmos(participantes, arrayEmbaralhado)) {
        embaralha(participantes)
    }

    for (let index = 0; index < participantes.length; index++) {
        console.log(`${participantes[index]} tirou ${arrayEmbaralhado[index]}`)
    }
}

module.exports = AmigoSecreto