// Crear una página web utilizando HTML y JavaScript que permita filtrar una lista de palabras
// predefinidas mediante un formulario.
// • El formulario debe incluir un campo de texto (<input>) para ingresar una palabra o parte de
// ella, y un botón "Filtrar" para ejecutar la acción.
// • Al hacer clic en el botón, deben mostrarse únicamente las palabras de la lista que contengan
// el texto ingresado, sin importar mayúsculas o minúsculas.
// • Si el campo de texto está vacío al presionar el botón "Filtrar", se debe mostrar un mensaje de
// error y no realizar el filtrado.
// Requisitos:
// • La lista de palabras debe estar precargada en el script (por ejemplo: [“manzana”, “banana”,
// “pera”, “durazno”, “frutilla”, “mango”]).
// • El filtrado debe actualizar el contenido mostrado en la página, sin recargarla.
// • Debe evitarse el filtrado si no se ingresó ningún texto

const formulario = document.getElementById("formulario");
const ingresar = document.getElementById("ingresar");
const mostrar = document.getElementById("listadepalabras");

const palabras = ["manzana", "banana", "pera", "durazno", "frutilla","mango"];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = ingresar.value.toLowerCase(); // texto ingresado en minúsculas
    mostrar.innerHTML = ''; // Limpiar lista actual 

    const filtradas = palabras.filter(palabra =>
        palabra.toLowerCase().includes(texto)
    );

    // Mostrar las palabras filtradas
    filtradas.forEach(palabra => {
        const li = document.createElement('li');
        li.textContent = palabra;
        mostrar.appendChild(li);
    });

    if (filtradas.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No se encontraron palabras.';
        mostrar.appendChild(li);
        
    }
});

