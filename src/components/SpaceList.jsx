import React from 'react';
import { spaces } from '../data/spaces';

export default function SpaceList({ onReserveClick }) {
  return (
    <div className="space-list">
      <h2>Espacios Disponibles</h2>
      <div className="spaces-grid">
        {spaces.map(space => (
          <div key={space.id} className="space-card">
            <h3>{space.name}</h3>
            <p>Capacidad: {space.capacity} personas</p>
            <p>Ubicación: {space.location}</p>
            <ul>
              {space.amenities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button 
              className="reserve-btn"
              onClick={() => onReserveClick(space.id)}
            >
              Reservar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}