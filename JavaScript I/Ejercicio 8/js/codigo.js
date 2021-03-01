var numero = parseInt(prompt("Introduce un numero: "));

function parOimpar(numero){
  var resultado = "";
  if(numero %2 == 0){
    resultado = "El numero seleccionado es: PAR";
    return resultado;
  }else{
    resultado = "El numero seleccionado es: IMPAR";
    return resultado;
  }
}

alert(parOimpar(numero))
