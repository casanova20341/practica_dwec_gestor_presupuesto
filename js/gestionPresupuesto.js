// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;

function actualizarPresupuesto(numero) {
    // TODO
    if (numero > 0) {
        presupuesto = numero;
    } else {
        return -1;
    }
}

function mostrarPresupuesto() {
    // TODO
    return "Tu presupuesto actual es de " + presupuesto + " €";
}

function CrearGasto() {
    var Gasto = {
        descripcion: "",
        valor: 0
    };

    function mostrarGasto() {
        return "Gasto correspondiente a " + Gasto.descripcion + " con valor " + Gasto.valor + " €";
    }

    function actualizarDescripcion(dato) {
        Gasto.descripcion = dato;
    }

    function actualizarValor(dato) {
        if (dato > 0) {
            Gasto.valor = dato;
        }
    }
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
