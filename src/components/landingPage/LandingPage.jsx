import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


export const LandingPage = () => {

    const [Language,setLanguage] = useState('es');

    const handleLanguage = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <>
            <header>
                
                {/* Pendiente el logo*/}
                <Link to='/'><img alt="logo" /></Link>

                <select value={Language} onChange={handleLanguage}>
                    <option value="es" >Español</option>
                    <option value="en" >English</option>
                </select>
                {Language === 'es' ? <Link to='/login'><button>Iniciar Sesión</button></Link> : <Link to='/login'><button>Sign In</button></Link>}

            </header>

            <main>

                {Language === 'es' ? <h2>Películas y series ilimitadas y mucho más</h2> : <h2>Unlimited movies, TV shows, and more</h2>}
                
                {Language === 'es' ? <p>Disfruta donde quieras. Cancela cuando quieras.</p> : <p>Watch anywhere. Cancel anytime.</p>}

                {Language === 'es' ? <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p> : <p>Ready to watch? Enter your email to create or restart your membership.</p> }

                <form>
                    {Language === 'es' ? <input type="email" placeholder="Email" /> : <input type="email" placeholder="Email address" />}
                    
                    {Language === 'es' ? <button>Comenzar</button> : <button>Get Started</button>}
                </form>
            </main>

            <footer>

            </footer>

        </>
    )
}