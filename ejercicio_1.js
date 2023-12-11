function sumaSerie(numero, terminos) {
    let suma = 0;
    let numeroRepetido = 0;
  
    for (let i = 1; i <= terminos; i++) {
      numeroRepetido = numeroRepetido * 10 + numero;
      suma += numeroRepetido;
    }
  
    return suma;
  }
  
  console.log(sumaSerie(3, 5));  