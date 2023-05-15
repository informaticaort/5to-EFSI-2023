import React, { useState, useEffect } from 'react';

function FormExample() {
    const [name, setName] = useState('');  // Declaro una variable de estado llamada name y la inicializo en ''
    const [lastName, setLastName] = useState(''); // Declaro una variable de estado llamada lastName y la inicializo en ''
    useEffect(() => { // El hook useEffect se ejecuta cada vez que se renderiza el componente name
        console.log('se ha ejecutado el hook');
    }, [name]); // Si el valor de name cambia, se ejecuta el hook useEffect

    return (
        <div>
            <input value={name} onChange={(event) => setName(event.target.value)} />
            <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </div>
    );
}

export default FormExample;


