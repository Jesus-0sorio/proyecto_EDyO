import resolverCaso from './util.js'
 
const btnCaso = document.getElementById('enviar')

btnCaso.addEventListener('click', solucion)

function solucion(){
    let caso = document.getElementById('caso')
    let resultado = document.getElementById('resultado')
    let res =  resolverCaso(caso.value)
    res.forEach(x => {
        resultado.value += x;
    });
}
