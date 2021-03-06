import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const navigate = useNavigate();


    const handleLogout = () => {
        
        dispatch({ type: types.logout });

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav
            style={{
                padding: 15,
                paddingLeft: 115, 
                paddingRight: 105
            }}  
            className="navbar navbar-expand-sm navbar-dark bg-success">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Sistema de Reservaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link btn ' + (isActive ? 'active' : '') }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link btn ' + (isActive ? 'active' : '') }
                        to="/reservations"
                    >
                        Carrito
                    </NavLink>

                    <span className="nav-item nav-link text-info">
                        { user.name }
                    </span>
                    
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}