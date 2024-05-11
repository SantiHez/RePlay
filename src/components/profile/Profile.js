import './Profile.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Profile() {
    return (
        <Router>
            <div className='principalContainerP'>
                <nav>
                    <p>Logo</p>
                </nav>

                <div>
                    <p>Elige tu perfil</p>
                    <div>
                        <div>
                            <img src={require('../imagenes/iconprofile.jpg').default} alt="Imagen 1" /> 
                            <p>Nombre 1</p>
                        </div>
                        <div>
                            <img src="URL" alt="Imagen 2" />
                            <p>Nombre 2</p>
                        </div>
                        <div>
                            <img src="URL" alt="Imagen 3" />
                            <p>Nombre 3</p>
                        </div>
                        <div>
                            <img src="URL" alt="Imagen 4" />
                            <p>Nombre 4</p>
                        </div>
                        <div>
                            <Link to="/nuevo-perfil">
                                <img src="URL" alt="Imagen 5" />
                                <p>Añade un perfil</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Profile;