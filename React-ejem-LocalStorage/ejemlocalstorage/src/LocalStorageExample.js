import React, { useState, useEffect } from 'react';

function LocalStorageExample() {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');

  // Esta función se ejecuta cuando el componente se monta y carga el nombre desde localStorage (si existe).
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setStoredName(storedName);
    }
  }, []);

  // Esta función se ejecuta cuando se actualiza el nombre.
  useEffect(() => {
    localStorage.setItem('userName', name);
  }, [name]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>LocalStorage Example</h2>
      <p>Nombre almacenado en localStorage: {storedName}</p>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={name}
        onChange={handleInputChange}
      />
     
    </div>
  );
}

export default LocalStorageExample;
