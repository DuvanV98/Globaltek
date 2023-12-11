function numerosIguales(lista) {
   let grupos = {};
  
    for (let i = 0; i < lista.length; i++) {
     let elemento = lista[i];
  
      if (grupos[elemento] === undefined) {
        grupos[elemento] = [elemento];
      } else {
        grupos[elemento].push(elemento);
      }
    }
  
   let salida = Object.values(grupos);
  
    return salida;
  }
  
  console.log(numerosIguales([12, 25, 1, 1, 7, 25])); 
  //console.log(numerosIguales([6, 7, 8, 9])); 