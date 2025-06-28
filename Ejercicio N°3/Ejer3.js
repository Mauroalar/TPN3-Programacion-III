// Realiza una petición GET a la API de JSONPlaceholder para obtener todos las "tareas" (/todos).
// Luego, utiliza forEach y filter para quedarte solo con las tareas que han sido completadas
// (completed: true) y mostrarlas en el HTML dentro de una lista <ul>.

const todasLastareas = "https://jsonplaceholder.typicode.com/todos";

const tareasListasDiv = document.getElementById("tareas-listas")
const cargarListasDiv = document.getElementById("cargando")
const errorListasDiv = document.getElementById("error-mensaje")


async function peticion () {
    tareasListasDiv.innerHTML = ""; //Limpiar resultados anteriores
    errorListasDiv.textContent = ""; //Limpiar errores anteriores
    //cargarListasDiv.

    const response = await fetch(todasLastareas);

    if (!response.ok) {
        errorListasDiv.textContent = `Hubo un problema: ${response.status} - ${response.statusText}`;
        return;
    }

    const data = await response.json();

    if (data && data.length > 0) {
      const filtrar = data.filter(tarea => tarea.completed)
      console.log(filtrar.length)
        filtrar.forEach((todo) => {
            const todoElement = document.createElement("div");
            todoElement.classList.add("tareas-listas");
            todoElement.classList.add(todo.completed ? "completed" : "pending");
            todoElement.innerHTML = `
              <p><strong>ID:</strong> ${todo.id}</p>
              <p><strong>Título:</strong> ${todo.title}</p>
              <p><strong>Completado:</strong> ${
                todo.completed ? "Sí" : "No"
              }</p>`;
            tareasListasDiv.appendChild(todoElement);
          });
        } else {
          todosListDiv.innerHTML = "<p>No se encontraron tareas.</p>";
        }
        
    
};

peticion()