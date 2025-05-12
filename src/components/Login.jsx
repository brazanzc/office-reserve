import React, { useState } from 'react';

const users = [
  { id: 1, name: 'Admin', role: 'admin', email: 'admin@test.com', password: 'admin123' },
  { id: 2, name: 'Usuario', role: 'user', email: 'user@test.com', password: 'user123' }
];

// Objeto con todos los estilos
const styles = {
  loginContainer: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  title: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.8rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  testCredentials: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    fontSize: '0.9rem',
    color: '#555'
  }
};

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      onLogin(user);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  // Manejo de estados para efectos hover y focus
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.title}>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            ...styles.input,
            ...(isFocused && {
              outline: 'none',
              borderColor: '#3498db',
              boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)'
            })
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            ...styles.input,
            ...(isFocused && {
              outline: 'none',
              borderColor: '#3498db',
              boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)'
            })
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button 
          type="submit"
          style={{
            ...styles.button,
            ...(isHovered && { backgroundColor: '#2980b9' })
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Ingresar
        </button>
      </form>
      <div style={styles.testCredentials}>
        <p>Datos de prueba:</p>
        <ul>
          <li>Admin: admin@test.com / admin123</li>
          <li>Usuario: user@test.com / user123</li>
        </ul>
      </div>
    </div>
  );
}