// `Realizar una página web utilizando HTML y React con sólo dos botones llamados “izquierdo” y
// “derecho”. Inicialmente solamente el botón “izquierdo” se encuentra habilitado. Al presionar el
// botón “izquierdo”, se deshabilita a si mismo y luego habilita al botón “derecho”. Luego al presionar
// el botón “derecho”, se deshabilita a si mismo y luego habilita al botón “izquierdo”. Todo esto
// permite que solo un botón este habilitado al mismo tiempo.

function App() {
    const [izquierdo, setIzquierdo]= React.useState(false);
    const [derecho, setDerecho] = React.useState(true);

    const manejarIzquierdo = () => {
    setIzquierdo(true);
    setDerecho(false);
  };

    const manejarDerecho = () => {
    setDerecho(true);
    setIzquierdo(false);
  };

    return (
       <div>
          <h1>EJERCICIO N°4</h1>
          <h2>Habilitar y deshabilitar botones</h2>
            <button
                id="boton-izquierdo"
                onClick={manejarIzquierdo}
                disabled={izquierdo}
            >
            Izquierdo
            </button>
            <button
                id="boton-derecho"
                onClick={manejarDerecho}
                disabled={derecho}
            >
            Derecho
            </button>
        </div>
  );
};