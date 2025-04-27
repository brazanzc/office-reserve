// src/components/Home.js
import React, { useState } from 'react';
import CalendarView from './CalendarView';
import SpaceList from './SpaceList';
import ReservationForm from './ReservationForm';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const handleReserveClick = (spaceId) => {
    setSelectedSpace(spaceId);
    setShowForm(true);
  };

  const handleSubmitReservation = (reservationData) => {
    console.log("Reserva creada:", reservationData);
    alert(`Reserva creada para ${reservationData.spaceId} el ${reservationData.date}`);
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <ReservationForm
          initialSpace={selectedSpace}
          onSubmit={handleSubmitReservation}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <>
          <CalendarView />
          <SpaceList onReserveClick={handleReserveClick} />
        </>
      )}
    </div>
  );
};

export default Home;
