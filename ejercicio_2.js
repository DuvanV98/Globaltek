function numeros_condicion(lista) {
    let salida = [];
  
    for (let i = 0; i < lista.length; i++) {
      let numero = lista[i];
  
      if (numero % 5 === 0 && numero <= 600) {
        salida.push(numero);
      }
  
      if (numero > 1000) {
        break;
      }
    }
  
    return salida;
  }
  
  console.log(numeros_condicion([24, 150, 300, 660, 295, 1050, 50])); 
  //console.log(numeros_condicion([110, 720, 307, 555, 1095, 12, 300, 1000])); 