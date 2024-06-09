import './Profile.css';
import iconProfile from '../../imagenes/iconprofile.jpg';
import iconReplay from '../../imagenes/iconReplay.png';
import agregarPerfil from '../../imagenes/agregarPerfil.png';
import iconProfile1 from '../../imagenes/iconprofile1.jpg';
import iconProfile2 from '../../imagenes/iconprofile2.jpg';
import iconProfile3 from '../../imagenes/iconprofile3.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/*import Home from "../components/home";*/

function Profile() {
    return (
        <Router>
            <div className='contenedorPrincipal'>
                <nav>
                    <img src={iconReplay} width= "150px" alt="Imagen 1" id='iconoReplay'/>
                </nav>

                <div className='contenedorSecundario'>
                    <strong id='tituloPerfiles'>ELIGE TU PERFIL</strong>
                    <div id='contenedorFlex'>
                        <div className='contenedoresHijos'>
                            <Link to={"../components/home"}>
                            <img src={iconProfile} width= "200px" alt="Imagen 1" /> 
                            <p className='nombresPerfiles'>PERFIL 1</p>
                            </Link>
                        </div>
                        <div className='contenedoresHijos'>
                            <Link to={"../components/home"}>
                            <img src={iconProfile1} width= "200px"  alt="Imagen 2" />
                            <p className='nombresPerfiles'>PERFIL 2</p>
                            </Link>
                        </div>
                        <div className='contenedoresHijos'>
                            <Link to={"../components/home"}>
                            <img src={iconProfile2} width= "200px"  alt="Imagen 3" />
                            <p className='nombresPerfiles'>PERFIL 3</p>
                            </Link>
                        </div>
                        <div className='contenedoresHijos'>
                            <Link to={"../components/home"}>
                            <img src={iconProfile3} width= "200px"  alt="Imagen 4" />
                            <p className='nombresPerfiles'>PERFIL 4</p>
                            </Link>
                        </div>
                        <div className='contenedoresHijos'>
                            <Link to="../components/Editarperfil.js">
                                <img src={agregarPerfil} width= "200px" alt="Imagen 5" />
                                <p className='nombresPerfiles'>EDITAR PERFILES</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/editar-perfiles">
                    <EditarPerfiles />
                </Route>
            </Switch>
            */}
        </Router>
    )
}

export default Profile;