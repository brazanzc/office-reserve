import React, { useState } from 'react';

import CalendarView from './components/CalendarView';
import SpaceList from './components/SpaceList';
import ReservationForm from './components/ReservationForm';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const handleReserveClick = (spaceId) => {
    setSelectedSpace(spaceId);
    setShowForm(true);
  };

  const handleSubmitReservation = (reservationData) => {
    // En una implementación real, aquí enviaríamos al backend
    console.log("Reserva creada:", reservationData);
    alert(`Reserva creada para ${reservationData.spaceId} el ${reservationData.date}`);
    setShowForm(false);
  };

  return (
    <div className="App">
      <main>
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
      </main>
    </div>
  );
}
export default App;