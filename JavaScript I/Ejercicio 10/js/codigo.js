var frase = prompt("Escribe una frase y sabrás si es un Palindromo").toLowerCase().replace(/\s/g, "");

function frasePalindromo(frase) {

    fraseAlreves = frase.split("").reverse().toString();

    for (var i = 0; i < ((fraseAlreves.length) - 1); i++) {
        fraseAlreves = fraseAlreves.replace(",", "");
    };

    if (frase == fraseAlreves) {
        resultado = "Su frase es un Palindromo";
    } else {
        resultado = "Su frase NO es un Palindromo";
    }
    alert(resultado);
}

frasePalindromo(frase);