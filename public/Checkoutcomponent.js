// CheckoutComponent.js
import React from 'react';
import '/Checkout.css';

const CheckoutComponent = () => {
  return (
    <div className="container">
      <div className="card">
        <button className="proceed">
          <svg className="sendicon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
        </button>
        <img src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png" className="logo-card" alt="Visa logo" />
        <label>Numero de la tarjeta:</label>
        <input id="user" type="text" className="input cardnumber" placeholder="xxxx xxxx xxxx xxxx" />
        <label>Nombre del titular:</label>
        <input className="input name" placeholder="Edgar Pérez" />
        <label className="toleft">CCV:</label>
        <input className="input toleft ccv" placeholder="321" />
      </div>
      <div className="receipt">
        <div className="col">
          <p>Precio final:</p>
          <h2 className="cost">$10</h2>
          <br />
          <p>Nombre vendedor:</p>
          <h2 className="seller">Replay</h2>
        </div>
        <div className="col">
          <p>Objetos en carrito:</p>
          <h3 className="bought-items">1 mes de suscripcion</h3>
          <p className="bought-items description">Reproduccion ilimitada mensual</p>
          <p className="bought-items price">$10 (Sin descuento)</p>
        </div>
        <p className="comprobe">¡Cuando se haya enviado tu producto sera enviado a tu correo!</p>
        <p className="comprobe">Gracias por confiar en nosotros</p>
      </div>
      <div className="cancelar">
        <a href="tienda.html" className="btn-neon">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          Cancelar
        </a>
      </div>
    </div>
  );
}

export default CheckoutComponent;
