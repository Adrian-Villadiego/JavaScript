// Bases de datos
const baseDatos1 = [
    'Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'
];

const baseDatos2 = [
    'Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'
];

// Callback cuando se encuentra en BD1
function encontradoBD1() {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Se ha encontrado en la Base de Datos 1";
    resultado.className = "encontrado";
}

// Callback cuando se encuentra en BD2
function encontradoBD2() {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Se ha encontrado en la Base de Datos 2";
    resultado.className = "encontrado";
}

// Búsqueda en baseDatos2
function busquedaBaseDatos2(pais, callbackEncontradoBD2) {
    if (baseDatos2.includes(pais)) {
        callbackEncontradoBD2();
    } else {
        const resultado = document.getElementById("resultado");
        resultado.textContent = "Dato no encontrado";
        resultado.className = "no-encontrado";
    }
}

// Búsqueda en baseDatos1
function busquedaBaseDatos1(pais, callbackEncontradoBD1, callbackBuscarBD2) {
    if (baseDatos1.includes(pais)) {
        callbackEncontradoBD1();
    } else {
        callbackBuscarBD2(pais, encontradoBD2);
    }
}

// Función principal
function iniciarBusqueda() {
    const pais = document.getElementById("pais").value.trim();
    const resultado = document.getElementById("resultado");

    resultado.textContent = "";
    resultado.className = "";

    if (pais === "") {
        resultado.textContent = "Ingrese un país para buscar ";
        resultado.className = "advertencia";
        return;
    }

    busquedaBaseDatos1(
        pais,
        encontradoBD1,
        busquedaBaseDatos2
    );
}
