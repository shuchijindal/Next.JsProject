// import { routeModule } from "next/dist/build/templates/app-page";

// export default routeModule

// import React from 'react';

// export default function Signup(){
//   return(
//     <div>Signup</div>
//   )
// }
"use client";
import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (username === '' || password === '') {
      setError('All fields are required.');
      return;
    }

    // Simulate success
    setSuccess('Registration successful!');
    setUsername('');
    setPassword('');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    },
    form: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center' as const,
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#0070f3',
      color: '#fff',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
    success: {
      color: 'green',
      marginBottom: '10px',
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Register</h2>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;