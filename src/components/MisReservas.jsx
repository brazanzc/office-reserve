// src/components/MisReservas.js
import React from 'react';
import './MisReservas.css'; // Asegúrate de crear el archivo de estilos

// Datos ficticios de reservas
const reservasUsuario = [
  {
    id: 1,
    sala: "Sala A",
    fecha: "2025-04-28",
    horaInicio: "10:00",
    horaFin: "11:00",
    estado: "Confirmada"
  },
  {
    id: 2,
    sala: "Sala B",
    fecha: "2025-04-30",
    horaInicio: "15:00",
    horaFin: "16:00",
    estado: "Pendiente"
  }
];

const MisReservas = () => {
  return (
    <div className="mis-reservas">
      <h1 className="titulo">Mis Reservas</h1>
      <div className="reservas-container">
        {reservasUsuario.map((reserva) => (
          <div key={reserva.id} className={`reserva-item ${reserva.estado.toLowerCase()}`}>
            <div className="reserva-header">
              <strong className="sala">{reserva.sala}</strong>
              <span className="estado">{reserva.estado}</span>
            </div>
            <p className="detalle">
              <span>{reserva.fecha}</span> | {reserva.horaInicio} - {reserva.horaFin}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisReservas;
