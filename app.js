// Array para almacenar la lista de amigos
const amigos = [];

// Función para agregar un amigo a la lista
function addAmigo() {
    let nombreInput = document.getElementById("agregarAmigo").value;

    if (!nombreInput.value || nombreInput.value.length <= 1) {
        alert("Debes ingresar un nombre válido");
    } else {
        amigos.push(nombreInput.value);
        alert("El amigo ha sido agregado");
    }
    actualizarListaDeAmigos();
}

// Función para mostrar la lista de amigos en pantalla
function actualizarListaDeAmigos() {
    let listaAmigos = document.getElementById("sortearAmigo");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

// Función para sortear un amigo al azar
function sorteoAmigo() {
    if (amigos.length > 0) {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        alert("El amigo sorteado es: " + amigoSorteado);
    } else {
        alert("No hay amigos para sortear");
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const inputAmigo = document.getElementById("agregarAmigo");
    
    // Evento para tecla Enter
    inputAmigo.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addAmigo();
        }
    });

    // Evento para input en móviles
    inputAmigo.addEventListener("input", () => {
        const addButton = document.querySelector('.btn-agregar');
        addButton.disabled = !inputAmigo.value.trim();
    });

    // Actualizar vista inicial
    actualizarListaDeAmigos();
});