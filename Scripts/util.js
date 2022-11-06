// Funcion para calcular la diferencia de horas
const calcularHora = (a, b) => {
  let horas = a.slice(0, 2) - b.slice(0, 2);
  let minutos = a.slice(3, 5) - b.slice(3, 5);
  let res;
  if (minutos < 0) {
      minutos += 60;
      horas -= 1;
  }
  res = horas + ":" + minutos;
  return res;
};

export default function resolverCaso(caso) {    
    caso  = caso.split('--')

    const db = []
    for (let i = 0; i < caso.length; i++) {
      let dia = caso[i].split(',').sort()
    
      // se compara compara con la primera diferencia horario
      let res = {
      resultado: calcularHora(dia[0].slice(0, 5), "08:00"),
      hora: dia[0].slice(0, 5),
      };
      let final = calcularHora("50:00", dia[dia.length - 1].slice(6, 11));

      // se evalua con la ultima hora laboral
      if (res.resultado < final) {
      res = {
          resultado: final,
          hora: dia[dia.length - 1].slice(6, 11),
      };
      }

      // se evaluan todas las horas
      for (let i = 0; i < dia.length; i++) {
      let opc = "";
      try {
          opc = calcularHora(dia[i + 1].slice(0, 5), dia[i].slice(6, 11));
      } catch (e) {
          opc = "0";
      }
      if (parseInt(opc) > parseInt(res.resultado)) {
          res = {
          resultado: opc,
          hora: dia[i].slice(6, 11),
          };
      }else if ((parseInt(opc) == parseInt(res.resultado) && (parseInt((opc.split(':')[1])) > parseInt(res.resultado.split(':')[1])))) {
          res = {
            resultado: opc,
            hora: dia[i].slice(6, 11),
          };
        }
      }
      if(parseInt(res.resultado.split(':')[0]) == 0){
        db.push(`Día #${i+1}: La siesta es a las ${res.hora} y será de ${res.resultado.split(':')[1]} minutos \n\n`);
      }else{
        db.push(`Día #${i+1}: La siesta es a las ${res.hora} y será de ${parseInt(res.resultado.split(':')[0])} horas y ${res.resultado.split(':')[1]} minutos \n\n`);
      }
    }
    return db; 
}