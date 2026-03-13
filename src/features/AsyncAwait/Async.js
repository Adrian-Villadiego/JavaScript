// Función que retorna una promesa
function esperarYDuplicar(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 2);
        }, 2000);
    });
}

// Función async usando await
async function calcularDoble() {
    const numero = document.getElementById("numeroInput").value;
    const resultadoElemento = document.getElementById("resultadoAsync");

    if (numero === "") {
        resultadoElemento.innerHTML = "Por favor ingrese un número.";
        return;
    }

    resultadoElemento.innerHTML = "Calculando... ";

    try {
        const resultado = await esperarYDuplicar(Number(numero));
        resultadoElemento.innerHTML = "Resultado: " + resultado;
    } catch (error) {
        resultadoElemento.innerHTML = "Ocurrió un error.";
    }
}