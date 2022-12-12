
/*infos de get e post */

let nomeDoSorteio = document.getElementById('input-one') 
let printNomeDoSorteio = document.getElementById('ns')
let btnAncancar = document.getElementById('btn-avancar')

btnAncancar.addEventListener('click', ()=> {

    printNomeDoSorteio = ''

    printNomeDoSorteio.innerHTML = nomeDoSorteio.value

    
}
    
)
