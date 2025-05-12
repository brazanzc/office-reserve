import React from 'react';

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease'
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  },
  button: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      transform: 'translateY(-2px)'
    }
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    border: 'none',
    '&:hover': {
      backgroundColor: '#c0392b'
    }
  },
  userInfo: {
    margin: '0 1rem',
    fontWeight: '500',
    fontSize: '0.95rem'
  }
};

export default function Header({ user, onLogout, onChangeView }) {
  return (
    <header style={styles.header}>
      <h1 
        style={styles.title}
        onClick={() => onChangeView('home')} // Usa onChangeView en lugar de navigate
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        OfficeReserve
      </h1>
      
      {user && (
        <div style={styles.actionsContainer}>
          <button
            style={styles.button}
            onClick={() => onChangeView('calendar')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Calendario
          </button>
          
          <button
            style={styles.button}
            onClick={() => onChangeView('myReservations')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Mis Reservas
          </button>
          
          <span style={styles.userInfo}>{user.name}</span>
          
          <button
            style={{ ...styles.button, ...styles.logoutButton }}
            onClick={onLogout}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c0392b';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#e74c3c';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </header>
  );
}