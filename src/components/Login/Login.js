import React from 'react';
import './Login.css';

function Login() {
  return (
    <div>
      <h1 className='titulo'>RePlay</h1>
      <div className="login-box">
        <h2>Registro</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Nombre</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Contraseña</label>
          </div>
          <button type="submit">
            siguiente
          </button>
        </form>
        <a href="#" className="olvidar-contraseña">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
}

export default Login;

