var valores = [true, 5, false, "hola", "adios", 2];

// Determinar cual de los dos elemntos de texto es mayor
var masLargo;
var x = valores.filter(esString);

function esString(st){
        return typeof(st) === 'string';
}

x.forEach( (elemento) => {
    if(masLargo){
        if ( elemento.length > masLargo.length ){
            masLargo = elemento;
        }
    }
    else {
        masLargo = elemento;
    }
} );

document.write("El texto mas largo es "+ masLargo +"<br>");


/* Determinar los operadores necesarios para obtener un resultado
true y otro falso con los valores booleanos del array*/
var booleanoEs = valores.filter(esBool);

function esBool(bool){
    return typeof(bool) === 'boolean';
}

document.write("Operador OR: ");
if (booleanoEs[0] || booleanoEs[1]){
    document.write(true+"<br>");
}else{
    document.write(false+"<br>");
}
document.write("Operador AND: ");
if (booleanoEs[0] && booleanoEs[1]){
    document.write(true +"<br>" );
}else{
    document.write(false +"<br>" );
}



/* Determinar el resultado de las cinco operaciones matematicas
realizadas con los dos elementos numerico*/
var Num = valores.filter(esNum);

function esNum(Num){
    return typeof(Num) === 'number';
}
document.write(Num[0] + "+" + Num[1] + " = " + (Num[0]+Num[1])+"<br>");
document.write(Num[0] + "-" + Num[1] + " = " + (Num[0]-Num[1])+"<br>");
document.write(Num[0] + "*" + Num[1] + " = " + (Num[0]*Num[1])+"<br>");
document.write(Num[0] + "/" + Num[1] + " = " + (Num[0]/Num[1])+"<br>");
document.write(Num[0] + "%" + Num[1] + " = " + (Num[0]%Num[1])+"<br>");
