import resolverCaso from './util.js'
 
const btnCaso = document.getElementById('enviar')
let caso = document.getElementById('caso')
caso.value = "16:59 18:23 Otras,45:35 46:34 Otras,28:22 28:54 Reunión,41:52 42:10 Almuerzo,21:53 22:50 Reunión,33:42 34:34 Reunión,08:30 09:24 Otras--44:56 45:23 Reunión,08:47 10:04 Reunión,24:45 24:57 Reunión,35:03 35:34 PrepaClase,28:34 29:31 Reunión,20:48 21:06 Almuerzo"

btnCaso.addEventListener('click', solucion)

function solucion(){
    let resultado = document.getElementById('resultado')
    resultado.value = ''
    let res =  resolverCaso(caso.value)
    res.forEach(x => {
        resultado.value += x;
    });
}
