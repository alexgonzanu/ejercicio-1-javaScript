let palabra = "deporte";

function ponerPrimeraLetraMayuscula() {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}

console.log(ponerPrimeraLetraMayuscula());


