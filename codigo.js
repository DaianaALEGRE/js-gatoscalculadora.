//array de objetos (etapas)
const etapas = [
    { etapa: 1, nombre: "Cachorro", comienza: "0 años" },
    { etapa: 2, nombre: "Joven", comienza: "7 meses" },
    { etapa: 3, nombre: "Adulto", comienza: "3 años", años: 3},
    { etapa: 4, nombre: "Adulto mayor", comienza: "7 años", años: 7 },
    { etapa: 5, nombre: "Senior", comienza: "11 años" , años: 11 },
    { etapa: 6, nombre: "Geronte", comienza: "15 años", años: 15 },
]
console.log(etapas.length)
console.table(etapas)

/*saludo al usuario*/
alert("HOLA");
let invitado = prompt('¿Cuál es tu nombre?',);
/*  bucle while para permitir al usuario ingresar varias veces a calcular o cortar  */
let tieneGatos = true;

while (tieneGatos) {
    let respuesta = prompt(invitado + "¿Quieres calcular la edad de un michi? (Sí/No)".toLowerCase());

    /* switch para manejar las diferentes respuestas del usuario */
    switch (respuesta) {
        case "sí":
        case "si":
            /* seccion para dar nombre al gato */
            let mascota = prompt("ingresa el nombre de tu gato")
            let edadGato = prompt("¿Cuántos años tiene " + mascota + " ?");
            edadGato = parseInt(edadGato);
            if (isNaN(edadGato)) {
                alert("La edad de tu gato no es válida.");
            } else {
                let edadEnCiclosDeVida = calcularEdadEnCiclosDeVida(edadGato);
                alert("La edad de " + mascota + " es " + edadGato + " años humanos y " + edadEnCiclosDeVida + " años gatunos.");
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


/*funcion para calcular la edad del gato en caso de tener uno*/
function calcularEdadEnCiclosDeVida(edadEnAnios) {


    if (edadEnAnios === 1) {
        return 15;
    } else if (edadEnAnios === 2) {
        return 25;
    }
    else {
        return 25 + ((edadEnAnios - 2) * 4);
    }
}


//el primer elemento que cumple con una condicion





let etapaElegida = etapas.find((etapa)=>etapa.comienza == "7 años" );
console.log(etapaElegida)