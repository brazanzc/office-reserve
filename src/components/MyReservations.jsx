import React, {useState} from 'react';
import { spaces } from '../data/spaces';

// Objeto con todos los estilos
const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  title: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1.8rem'
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '1.1rem'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #ecf0f1',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#f8f9fa'
    }
  },
  spaceInfo: {
    flex: 1
  },
  spaceName: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    marginBottom: '0.5rem'
  },
  timeInfo: {
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#c0392b'
    }
  }
};

export default function MyReservations({ reservations, onCancel }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const getSpaceName = (id) => {
    return spaces.find(s => s.id === id)?.name || 'Espacio eliminado';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mis Reservas</h2>
      {reservations.length === 0 ? (
        <p style={styles.emptyMessage}>No tienes reservas activas</p>
      ) : (
        <ul style={styles.list}>
          {reservations.map(res => (
            <li 
              key={res.id}
              style={{
                ...styles.listItem,
                backgroundColor: hoveredItem === res.id ? '#f8f9fa' : 'transparent'
              }}
              onMouseEnter={() => setHoveredItem(res.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={styles.spaceInfo}>
                <strong style={styles.spaceName}>{getSpaceName(res.spaceId)}</strong>
                <p style={styles.timeInfo}>{res.date} - {res.startTime} a {res.endTime}</p>
              </div>
              <button 
                onClick={() => onCancel(res.id)}
                style={{
                  ...styles.cancelButton,
                  backgroundColor: hoveredButton === res.id ? '#c0392b' : '#e74c3c'
                }}
                onMouseEnter={() => setHoveredButton(res.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Cancelar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}