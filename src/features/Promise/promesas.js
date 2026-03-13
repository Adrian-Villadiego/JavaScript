function verificar() {
    const texto = document.getElementById("cadena").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");

    if (texto === "") {
        resultado.innerHTML = `
            <div class="alert alert-danger">
                Ingresa una cadena válida
            </div>
        `;
        return;
    }

    const ultimaLetra = texto.charAt(texto.length - 1);
    const vocales = ["a", "e", "i", "o", "u"];

    if (vocales.includes(ultimaLetra)) {
        resultado.innerHTML = `
            <div class="alert alert-success">
                La palabra <strong>"${texto}"</strong> termina en vocal
            </div>
        `;
    } else {
        resultado.innerHTML = `
            <div class="alert alert-secondary">
                La palabra <strong>"${texto}"</strong> NO termina en vocal
            </div>
        `;
    }
}
