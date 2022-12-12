
/*infos de get e post */

let nomeDoSorteio = document.getElementById('input-one') 
let printNomeDoSorteio = document.getElementById('nome-sorteio')
let btnAncancar = document.getElementById('btn-avancar')

btnAncancar.addEventListener('click', ()=> {
    printNomeDoSorteio.innerHTML = nomeDoSorteio.value
    // alert(nomeDoSorteio.value)
    
}
    
)
