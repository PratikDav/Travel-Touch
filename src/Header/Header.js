import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand col-lg-6" to="#">Travel Touch </Link>
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
                    <button onClick={() => setLoggedInUser({})}>Log Out</button>
                    {
                        loggedInUser ? <p>{loggedInUser.email}</p>
                                     : ''   
                    }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;