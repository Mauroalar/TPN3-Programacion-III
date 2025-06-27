// Ejercicio 1
// Desarrollar una página web utilizando HTML y JavaScript que contenga un formulario para realizar
// operaciones entre dos números ingresados mediante campos <input>. La operación a realizar
// (suma, resta, multiplicación o división) debe seleccionarse mediante un elemento <select>. Al hacer
// clic en el botón "Calcular", se debe ejecutar la operación seleccionada y mostrar el resultado.
// Condición especial: Si el usuario selecciona la operación de división, el botón "Calcular" debe
// deshabilitarse, impidiendo que se realice la operación.

const formulario = document.getElementById("formulario")
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const operaciones = document.getElementById("operaciones")
const boton = document.getElementById("botonn")

console.log("operaciones", operaciones.value)

operaciones.addEventListener("change", () => {
    if (operaciones.value === "division") {
        boton.disabled = Number(numero2.value) < 1
    } else {
        boton.disabled = false
    }
    
})

numero2.addEventListener("input", () => {
    if (operaciones.value === "division") {
        boton.disabled = Number(numero2.value) < 1
    }
})
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!numero1.value || !numero2.value) {
        alert("Los campos no pueden estar vacios")
        return 
    }
    
    let resultado = 0
    const num1 = Number(numero1.value)
    const num2 = Number(numero2.value)

    switch(operaciones.value) {

        case "suma" :
            resultado = `${num1} + ${num2} = ${num1 + num2}`
            break
        case "resta" :
            resultado = `${num1} - ${num2} = ${num1 - num2}`
            break
        case "multiplicacion" :
            resultado = `${num1} * ${num2} = ${num1 * num2}`
            break
        case "division" : 
            resultado = `${num1} / ${num2} = ${num1 / num2}`
            break
        
        default: 
            alert("SELECCIONE UNA OPERACION")
            return

    }
    console.log(resultado)

    const mostrar = document.getElementById("mostrar")

    mostrar.textContent = resultado

    
})