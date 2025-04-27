// src/components/GestionEspacios.js
import React, { useState } from 'react';
import { spaces as initialSpaces } from '../data/spaces';  // 👈 Ahora usamos tu spaces.js
import { Link } from 'react-router-dom';
import './GestionEspacios.css'; // Asegúrate de tener este archivo CSS

const GestionEspacios = () => {
  const [spaces, setSpaces] = useState(initialSpaces);
  const [newSpace, setNewSpace] = useState({
    name: '',
    capacity: '',
    location: '',
    amenities: ''
  });

  const handleChange = (e) => {
    setNewSpace({
      ...newSpace,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (newSpace.name && newSpace.capacity && newSpace.location) {
      setSpaces([
        ...spaces,
        {
          id: spaces.length + 1,
          name: newSpace.name,
          capacity: parseInt(newSpace.capacity),
          location: newSpace.location,
          amenities: newSpace.amenities.split(',').map((a) => a.trim()),  // Amenidades como array
        },
      ]);
      setNewSpace({ name: '', capacity: '', location: '', amenities: '' });
    }
  };

  return (
    <div className="gestion-espacios">
      <h1 className="titulo">Gestión de Espacios</h1>
      <ul className="espacios-list">
        {spaces.map((space) => (
          <li key={space.id} className="espacio-item">
            <strong className="espacio-nombre">{space.name}</strong> - 
            <span className="espacio-capacidad">Capacidad: {space.capacity}</span> - 
            <span className="espacio-ubicacion">Ubicación: {space.location}</span>
            <br />
            <small className="espacio-amenidades">Amenidades: {space.amenities.join(', ')}</small>
            <hr />
          </li>
        ))}
      </ul>

      <h2 className="form-titulo">Agregar Nuevo Espacio</h2>
      <form className="form-agregar" onSubmit={handleAgregar}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del espacio"
          value={newSpace.name}
          onChange={handleChange}
          className="input-form"
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacidad"
          value={newSpace.capacity}
          onChange={handleChange}
          className="input-form"
        />
        <input
          type="text"
          name="location"
          placeholder="Ubicación"
          value={newSpace.location}
          onChange={handleChange}
          className="input-form"
        />
        <input
          type="text"
          name="amenities"
          placeholder="Amenidades (separadas por comas)"
          value={newSpace.amenities}
          onChange={handleChange}
          className="input-form"
        />
        <button type="submit" className="btn-agregar">Agregar</button>
      </form>

      <br />
      <Link to="/" className="link-volver">Volver al Inicio</Link>
    </div>
  );
};

export default GestionEspacios;
