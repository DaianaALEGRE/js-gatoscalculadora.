/*saludo al usuario*/
alert("HOLA");
let nombre = prompt('¿Cuál es tu nombre?',);
/*  bucle while para permitir al usuario ingresar varias veces   */
let tieneGatos = true;
while (tieneGatos) {
    let respuesta = prompt((nombre) + "¿Tienes gatos? (Sí/No)").toLowerCase();
    /* switch para manejar las diferentes respuestas del usuario */
    switch (respuesta) {
        case "sí":
        case "si":
            let edadGato = prompt("¿Cuántos años tiene tu gato?");
            edadGato = parseInt(edadGato);
            if (isNaN(edadGato)) {
                alert("La edad de tu gato no es válida.");
            } else {
                let edadEnCiclosDeVida = calcularEdadEnCiclosDeVida(edadGato);
                alert("La edad de tu gato es " + edadGato + " años humanos y " + edadEnCiclosDeVida + " años gatunos.");
            }
            break;
        case "no":
            tieneGatos = false;
            alert("Gracias por utilizar nuestro servicio.");
            break;
        default:
            alert("Por favor, responde 'Sí' o 'No'.");
            break;
    }
}
/* seccion para dar nombre al gato */
let mascota = prompt("ingresa el nombre de tu gato")

let anios = prompt("ingresa la edad de" + (mascota));

/*funcion para calcular la edad del gato en caso de tener uno*/
function calcularEdadEnCiclosDeVida(edadEnAnios) {
    if (edadEnAnios === 1) {
        return 15;
    } else if (edadEnAnios === 2) {
        return 25;
    } else {
        return 25 + ((edadEnAnios - 2) * 4);
    }
}
/*condicional */
if (anios <= 0) {
    alert("La edad de " + mascota + " no es válida.");
} else {
    let edadEnCiclosDeVida = calcularEdadEnCiclosDeVida(anios);
    alert("La edad de " + mascota + " es " + anios + " años humanos y " + edadEnCiclosDeVida + " años gatunos.");
}



