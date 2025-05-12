import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CalendarView from './components/CalendarView';
import SpaceList from './components/SpaceList';
import ReservationForm from './components/ReservationForm';
import MyReservations from './components/MyReservations';
import Login from './components/Login';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [currentView, setCurrentView] = useState('calendar'); // 'calendar' | 'myReservations'
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [user, setUser] = useState(null);

  // Cargar reservas al iniciar
  useEffect(() => {
    const saved = localStorage.getItem('reservations');
    if (saved) setReservations(JSON.parse(saved));
  }, []);

  // Guardar reservas cuando cambian
  useEffect(() => {
    localStorage.setItem('reservations', JSON.stringify(reservations));
  }, [reservations]);

  const handleReserveClick = (spaceId) => {
    setSelectedSpace(spaceId);
    setShowForm(true);
  };

  const handleSubmitReservation = (reservationData) => {
    const newReservation = {
      ...reservationData,
      id: Date.now(),
      userId: user?.id || 'guest',
      status: 'confirmed'
    };
    setReservations([...reservations, newReservation]);
    setShowForm(false);
    alert(`Reserva confirmada para el espacio ${reservationData.spaceId}`);
  };

  const cancelReservation = (id) => {
    setReservations(reservations.filter(res => res.id !== id));
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="App">
      <Header 
        user={user} 
        onLogout={() => setUser(null)} 
        onChangeView={setCurrentView} 
      />
      
      <main>
        {showForm ? (
          <ReservationForm 
            initialSpace={selectedSpace} 
            reservations={reservations}
            onSubmit={handleSubmitReservation} 
            onCancel={() => setShowForm(false)}
          />
        ) : currentView === 'calendar' ? (
          <>
            <CalendarView reservations={reservations} />
            <SpaceList onReserveClick={handleReserveClick} />
          </>
        ) : (
          <MyReservations 
            reservations={reservations.filter(res => res.userId === user?.id)} 
            onCancel={cancelReservation}
          />
        )}
      </main>
    </div>
  );
}

export default App;