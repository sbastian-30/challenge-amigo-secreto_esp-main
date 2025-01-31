// Array para almacenar la lista de amigos
const amigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
    const amigo = document.getElementById("amigo").value.trim();
    
    // Verificamos que el nombre sea válido
    if (!amigo) {
        alert("Por favor, ingresa un nombre válido");
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
    
    // Cuando pulsemos sortear amigo, reiniciamos todas las listas y el formulario
    amigos.splice(amigos.indexOf(amigoSorteado), 1);
    actualizarListaAmigos();
    document.getElementById("amigo").value = "";
    


}
