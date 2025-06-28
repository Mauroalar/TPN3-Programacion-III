// Desarrollar una página web utilizando HTML y React que contenga un formulario para realizar
// operaciones entre dos números ingresados mediante campos <input>. La operación a realizar
// (suma, resta, multiplicación o división) debe seleccionarse mediante un elemento <select>. Al hacer
// clic en el botón "Calcular", se debe ejecutar la operación seleccionada y mostrar el resultado.
// Condición especial: Si el usuario selecciona la operación de división, el botón "Calcular" debe
// deshabilitarse, impidiendo que se realice la operación.

const {useState} = React

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operaciones, setOperaciones] = useState("")
  const [resultado, setResultado] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!numero1 && !numero2) {
      alert("Los campos estan vacios");
      return
    }

    let resultado 
     

    switch (operaciones) {
      case "sumar" : resultado = numero1 + numero2
        break
      case "restar" : resultado = numero1 - numero2
        break
      case "dividir" : resultado = numero1 / numero2
        break
      case "multiplicar": resultado = numero1 * numero2
        break
      default: 
      alert("Seleccione una opcion")
      return        
    }

    setResultado(resultado)

  }
    return (
      <div>
          <h1>EJERCICIO N°5</h1>
          <h2>Calcular operaciones</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="numero1">Numero ° 1</label>
            <input type="number" name="numero1" value={numero1} onChange={(e) => setNumero1(Number(e.target.value))}/>
            <label htmlFor="numero2">Numero ° 2</label>
            <input type="number" name="numero2" value={numero2} onChange={(e) => setNumero2(Number(e.target.value))}/>
            <select name="operaciones"  value={operaciones} onChange={(e) => setOperaciones(e.target.value)}>
              <option value="sumar">SUMAR</option>
              <option value="restar">RESTAR</option>
              <option value="dividir">DIVIDIR</option>
              <option value="multiplicar">MULTIPLICAR</option>
            </select>
            <button type="submit" disabled={numero2 < 1 && operaciones === "dividir"}>OPERACIONES</button>
          </form>
          {resultado}
      </div>

      
  );
};