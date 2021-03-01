var n = 5;
var resultado = n;

for (let i = n; i > 0; i--) {
   console.log(i + " x " + (i-1) + " ");
   if ((i-1) != 0) {
      resultado *= i-1;
   }
}
alert("Resultado: " + resultado);
