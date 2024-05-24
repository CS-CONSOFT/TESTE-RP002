import React, { useState } from 'react';
import Header from './submodule/COMPONENTE/src/Componente_Header';
import './Login.css'; // Importe o arquivo CSS para aplicar estilos

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Por favor, insira um nome de usuário e senha.');
    }
  };

  if (loggedIn) {
    console.log('ok');
  }

  return (
    <div className="login-page">
      <Header />

      <div className="login-container">

        <div className="login-content">
          <h2>Tela de Login</h2>
          <form>
            <label>
              Usuário:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Senha:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
