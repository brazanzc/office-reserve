import React, { useState } from 'react';
import { spaces } from '../data/spaces';

export default function ReservationForm({ onSubmit, onCancel, initialSpace }) {
  const [formData, setFormData] = useState({
    spaceId: initialSpace || '',
    date: '',
    startTime: '',
    endTime: '',
    purpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <h2>Nueva Reserva</h2>
      <div className="form-group">
        <label>Espacio:</label>
        <select 
          name="spaceId" 
          value={formData.spaceId} 
          onChange={handleChange} 
          required
        >
          <option value="">Seleccionar espacio</option>
          {spaces.map(space => (
            <option key={space.id} value={space.id}>
              {space.name} - {space.location}
            </option>
          ))}
        </select>
      </div>
      {/* Resto del formulario */}
      <div className="form-buttons">
        <button type="button" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="submit-btn">Confirmar Reserva</button>
      </div>
    </form>
  );
}