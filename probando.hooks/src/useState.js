import React, { useState } from 'react';

function ShowTextExample() {
    const [showText, setShowText] = useState(false); // Declaro una variable de estado llamada showText y la inicializo en false

    return (
        <div>
            <button
                type="button"
                onClick={() => setShowText(true)} // Cuando se haga click en el botón, se ejecuta la función setShowText y se le pasa true como parámetro
            >
                Mostrar Texto
            </button>
            {
                // If showText is true, show the text
                showText && <h1>Muestro el Texto</h1> // Si showText es true, muestro el texto
            }
        </div>
    );
}

export default ShowTextExample;