// Array para almacenar la lista de amigos
const amigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
    const amigo = document.getElementById("amigo").value.trim();

    // Verificamos que el nombre sea válido
    if (!amigo) {
        alert("Por favor, el campo no puede estar vacio");
        return;
    }

    // Evitamos nombres duplicados
    if (amigos.includes(amigo)) {
        alert("Este amigo ya está en la lista");
        return;
    }

    // Validación de campo vacío
    if (amigo === "" || amigo === null) {
        alert("El campo no puede estar vacío");
        return;
    }

    // Agregamos el amigo y limpiamos el campo
    amigos.push(amigo);
    document.getElementById("amigo").value = "";

    //Validamos que el amigo no sea de tipo numerico
    if (/^\d+$/.test(amigo)) {
        alert("El nombre no puede ser un número");
        return;
    }

    actualizarListaAmigos();

    console.log("Lista actualizada:", amigos);
}
// Función para mostrar la lista de amigos en pantalla
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borramos el contenido anterior

    // Creamos un elemento de lista para cada amigo
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    const resultadoElement = document.getElementById("resultado");

    // Verificamos que haya amigos en la lista
    if (amigos.length === 0) {
        resultadoElement.innerHTML = "No hay amigos en la lista para sortear";
        alert("No hay amigos en la lista para sortear");
        return;
    }

    // Seleccionamos y mostramos un amigo al azar
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultadoElement.innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;


}
// Función para reiniciar el juego
function reiniciarJuego() {
    const confirmar = confirm("¿Estás seguro que deseas reiniciar el juego? Se borrarán todos los amigos de la lista.");

    if (confirmar) {
        // Limpiar el array de amigos
        amigos.length = 0;

        // Limpiar el input
        document.getElementById("amigo").value = "";

        // Limpiar la lista visual
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        // Limpiar el resultado del sorteo
        let resultadoSorteo = document.getElementById("resultado");
        resultadoSorteo.innerHTML = "";

        alert("El juego ha sido reiniciado exitosamente");
    }
}







