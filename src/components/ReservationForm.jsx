import React, { useState } from 'react';
import { spaces } from '../data/spaces';

export default function ReservationForm({ 
  initialSpace, 
  reservations,
  onSubmit, 
  onCancel 
}) {
  const [formData, setFormData] = useState({
    spaceId: initialSpace || '',
    date: '',
    startTime: '',
    endTime: '',
    purpose: ''
  });

  const isSpaceAvailable = () => {
    const { spaceId, date, startTime, endTime } = formData;
    return !reservations.some(res => 
      res.spaceId == spaceId && 
      res.date === date && 
      !(endTime <= res.startTime || startTime >= res.endTime)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSpaceAvailable()) {
      alert('El espacio no está disponible en ese horario');
      return;
    }
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

      <div className="form-row">
        <div className="form-group">
          <label>Fecha:</label>
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Hora inicio:</label>
          <input 
            type="time" 
            name="startTime" 
            value={formData.startTime} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Hora fin:</label>
          <input 
            type="time" 
            name="endTime" 
            value={formData.endTime} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div className="form-group">
        <label>Propósito:</label>
        <textarea 
          name="purpose" 
          value={formData.purpose} 
          onChange={handleChange} 
          rows={3} 
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="primary">Confirmar</button>
      </div>
    </form>
  );
}