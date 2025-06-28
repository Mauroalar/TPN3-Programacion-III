// Escribir un programa con HTML+React con formulario que permita calcular el IMC de una
// persona. Luego de realizar el cálculo, mostrar un mensaje con las siguientes características:
// • Si IMC < 18.5 mostrar un mensaje en tono amarillo indicando que se trata un nivel bajo.
// • Si IMC está entre 18.5 y 24.9 mostrar un mensaje en tono verde indicando que se trata de un
// nivel normal.
// • Si IMC está entre 25 y 29.9 mostrar un mensaje en tono naranja indicando que se trata de un
// nivel de sobrepeso.
// • Si IMC es mayor o igual a 30 mostrar un mensaje en tono rojo indicando que se trata de un
// nivel de obesidad.


const {useState} = React

function App() {
  const [peso, setPeso] = useState("");
  const [estatura, setEstatura] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!peso && !estatura) {
      alert("No pueden estar vacios los campos")
      return
    }

    let resultado = estatura
    if (!estatura.toString().includes(".")) {
      resultado = resultado/100
    
    }
    let imc = peso/Math.pow(resultado,2)
    setResultado(imc.toFixed(1))

  }
  
    return (
      <div>
        <h1>EJERCICIO N°6</h1>
        <h2>Calculo de IMC</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="peso">PESO</label>
          <input type="number" name="peso" id="" value={peso} onChange={(e) => setPeso(Number(e.target.value))} />
          <label htmlFor="estatura">ESTATURA</label>
          <input type="number" name="estatura" id="" value={estatura} onChange={(e) => setEstatura(Number(e.target.value))}/>
          <button type="submit">CALCULAR</button> 
        </form>
         
        {<p style={resultado < 18.5 ? 
          {color:"yellow"}:
          resultado < 24.9 ?
          {color:"green"}:
          resultado < 29.9 ?
          {color:"orange"}:
          {color: "red"} }>
            {resultado < 18.5 ?
             "NIVEL BAJO" :
             resultado < 24.9 ?
             "NIVEL NORMAL" :
             resultado <29.9 ?
             "NIVEL SOBREPESO" :
             "NIVEL DE OBESIDAD"} 
             {resultado}
         </p>}

      </div>



      
  );
};