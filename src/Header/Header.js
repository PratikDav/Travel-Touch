import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faSignOutAlt, faUserAlt} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand col-lg-6 siteName" to="#"> <FontAwesomeIcon icon={faGlobeAsia} /><span className="travel">Travel</span>Touch </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/booking">Destination</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="#" tabIndex="-1" aria-disabled="true">Contact</Link>
                        </li>
                    </ul>
                  <button className="logOut" onClick={() => setLoggedInUser({})}><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</button>
                    
                    
                    {
                        loggedInUser ? <p className="user"><FontAwesomeIcon icon={faUserAlt} /> {loggedInUser.email}</p>
                                     : ''   
                    }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;