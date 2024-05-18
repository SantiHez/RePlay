import React from 'react';
import './componetLogin.css';
import { Link } from 'react-router-dom';

function ComponetLogin() {
  return (
    <div className='container-login'>
      <Link to='/'><h1 className='titulo'>RePlay</h1></Link>
      <div className="login-box">
        <h2>Registro</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Correo</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Contraseña</label>
          </div>
          <button type="submit">
            siguiente
          </button>
        </form>
        <Link><p href="#" className="olvidar-contraseña">¿Olvidaste tu contraseña?</p></Link><p href="#" className="olvidar-contraseña">¿Olvidaste tu contraseña?</p>
        <Link><p href="#" className="Registrarse">Registrarse</p></Link>
      </div>
    </div>
  );
}

export default ComponetLogin;
