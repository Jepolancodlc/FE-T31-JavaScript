var caracter = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dniNum = parseInt(prompt("Escriba el codigo del DNI: *Solo Numeros*"));
var contarNum = dniNum.toString().length;

if (dniNum < 0 || dniNum > 99999999) {
    alert("El numero proporcionado no es valido");
} else if (contarNum != 8) {
    alert("El DNI ha de tener 8 numeros");
} else {
    var dniLetra = prompt("Seleccione una letra para el DNI: ");
    var letra = dniNum % 23;

    if (caracter[letra] == dniLetra.toUpperCase()) {
        alert("DNI correcto");
    } else {
        alert("La letra seleccionada es incorrecta");
    }
}