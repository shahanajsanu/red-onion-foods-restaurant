import React from 'react';
import logo from '../../Image/logo2.png';
import './Header.css';
import { Link, withRouter } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';


const Header = () => {
    const auth = useAuth();
    console.log(auth.user);
    
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col">
                    <div className="header">
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="header-right">
                        <div className="d-flex">
                            {
                                auth.user ? 
                                <span className="signIn">{auth.user.name}</span>
                                : <a href="/login">Sign In</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;