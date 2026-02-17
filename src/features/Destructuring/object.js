// Objeto
const person = {
    name: 'Adrian Villadiego Berrio',
    age: 17,
    city: 'Medellín',
    profession: 'Desarrollador',
    hobbies: ['Programar', 'Jugar videojuegos', 'Viajar']

};

// Evento del botón
document.getElementById("btnMostrar").addEventListener("click", () => {

    // Destructuring
    const { name, age, profession, hobbies } = person;

    const resultadoHTML = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Edad:</strong> ${age}</p>
        <p><strong>Profesión:</strong> ${profession}</p>
        <p><strong>Hobbies:</strong> ${hobbies.join(', ')}</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
});
