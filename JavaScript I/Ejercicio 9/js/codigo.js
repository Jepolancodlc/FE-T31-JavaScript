function Determinador(cadena) {
    var mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    var minusculas = mayusculas.toLocaleLowerCase();
    var hayMayusculas = false;
    var hayMinusculas = false;
 
    for (let i = 0; i < mayusculas.length; i++) {
       if (cadena.indexOf(mayusculas.charAt(i)) != -1) {
          hayMayusculas = true;
       }
 
       if (cadena.indexOf(minusculas.charAt(i)) != -1) {
          hayMinusculas = true;
       }
    }
 
    if (hayMayusculas && !hayMinusculas) {
       return "La cadena esta formada sólo por mayúsculas";
    } else if (!hayMayusculas && hayMinusculas) {
       return "La cadena esta formada sólo por minúsculas";
    } else if (hayMayusculas && hayMinusculas) {
       return "La cadena esta formada por mayúsculas y por minúsculas";
    } else {
       return "La cadena no contiene mayúsculas y minúsculas";
    }
 }
 
 console.log(Determinador("adadwdwadawda"));
 console.log(Determinador("Dadqi123i213wqweDDFDWD"));
 console.log(Determinador("DADADADADADAADA"));
 console.log(Determinador("0123456789"));
 