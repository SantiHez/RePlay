import './Profile.css';
import iconProfile from '../../imagenes/iconprofile.jpg';
import iconReplay from '../../imagenes/iconReplay.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Profile() {
    return (
        <Router>
            <div className='contenedorPrincipal'>
                <nav>
                    <img src={iconReplay} width= "150px" alt="Imagen 1" style={{marginTop : 0}}/>
                </nav>

                <div className='contenedorSecundario'>
                    <p>Elige tu perfil</p>
                    <div className='contenedorFlex'>
                        <div className='contenedoresHijos'>
                            <img src={iconProfile} width= "200px" alt="Imagen 1" /> 
                            <p className='nombresT'>Nombre 1</p>
                        </div>
                        <div className='contenedoresHijos'>
                            <img src={iconProfile} width= "200px"  alt="Imagen 2" />
                            <p className='nombresT'>Nombre 2</p>
                        </div>
                        <div className='contenedoresHijos'>
                            <img src={iconProfile} width= "200px"  alt="Imagen 3" />
                            <p className='nombresT'>Nombre 3</p>
                        </div>
                        <div className='contenedoresHijos'>
                            <img src={iconProfile} width= "200px"  alt="Imagen 4" />
                            <p className='nombresT'>Nombre 4</p>
                        </div>
                        <div className='contenedoresHijos'>
                            <Link to="/nuevo-perfil">
                                <img src="URL" alt="Imagen 5" />
                                <p className='nombresT'>Añade un perfil</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Profile;