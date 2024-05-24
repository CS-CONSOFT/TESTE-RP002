import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../submodule/COMPONENTES/src/Componente_Header';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificar credenciais aqui
    // Simplesmente vamos verificar se ambos username e password estão preenchidos
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Por favor, insira um nome de usuário e senha.');
    }
  };

  if (loggedIn) {
    return <Redirect to="/frutas" />;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
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
  );
}

export default Login;
