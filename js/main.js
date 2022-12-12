
/*infos de get e post */

const nomeDoSorteio = document.getElementById('input-one') 
let printNomeDoSorteio = document.getElementById('nome-sorteio')
const btnAncancar = document.getElementById('btn-avancar')

btnAncancar.addEventListener('click', ()=> {
    printNomeDoSorteio = nomeDoSorteio.value
    alert(nomeDoSorteio)
    
}
    
)
