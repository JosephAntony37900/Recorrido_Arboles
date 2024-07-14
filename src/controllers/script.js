import { bst } from "./dependencies.js";
import Music from "../models/Music.js";

//Añadir canción
document.getElementById("btn-agregar").addEventListener("click", () => {
    const title = document.getElementById("AgregarNombre").value;
    const author = document.getElementById("Autor").value;
    const gender = document.getElementById("Genero").value;

    if (title && author && gender) {
        const newSong = new Music(title, author, gender);
        bst.add(newSong);
        alert("Canción agregada correctamente.");
    } else {
        alert("Por favor, complete todos los campos.");
    }
});

//Buscar canción
document.getElementById("btn-buscar").addEventListener("click", () => {
    const title = document.getElementById("busqueda").value;
    const resultadosBusqueda = document.getElementById("resultadosBusqueda");

    const result = bst.search(title);
    if (result) {
        resultadosBusqueda.innerHTML = `
            <p>Canción encontrada.</p>
            <p>Nombre: ${result.title}</p>
            <p>Autor: ${result.author}</p>
            <p>Género: ${result.gender}</p>
        `;
    } else {
        resultadosBusqueda.textContent = "Canción no encontrada.";
    }
});

//Buscar canción (valor min)
document.getElementById("btn-min").addEventListener("click", () => {
    const busquedaMin = document.getElementById("busquedaMin");
    const minNode = bst.min();
    if (minNode) {
        busquedaMin.innerHTML = `
            <p>Canción con el valor min.</p>
            <p>Nombre: ${minNode.title}</p>
            <p>Autor: ${minNode.author}</p>
            <p>Género: ${minNode.gender}</p>
        `;
    } else {
        busquedaMin.textContent = "No se encontraron canciones.";
    }
});

//Buscar canción (valor max)
document.getElementById("btn-max").addEventListener("click", () => {
    const busquedaMax = document.getElementById("busquedaMax");
    const maxNode = bst.max();
    if (maxNode) {
        busquedaMax.innerHTML = `
            <p>Canción con el valor max.</p>
            <p>Nombre: ${maxNode.title}</p>
            <p>Autor: ${maxNode.author}</p>
            <p>Género: ${maxNode.gender}</p>
        `;
    } else {
        busquedaMax.textContent = "No se encontraron canciones.";
    }
});

// Mostrar todas las canciones
document.getElementById("visualizar").addEventListener("click", () => {
    const visualizarContainer = document.getElementById("visualizar");
    visualizarContainer.innerHTML = `<h2>Visualizar todas tus canciones: </h2>`;
    bst.inOrder(song => {
        visualizarContainer.innerHTML += `
            <p>Nombre: ${song.title}</p>
            <p>Autor: ${song.author}</p>
            <p>Género: ${song.gender}</p>
            <hr>
        `;
    });
});
