import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import React from 'react'


export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext )
    const [name, setName] = React.useState('');


    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: { name: name }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';


        navigate( lastPath, {
            replace: true
        });
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <p>Inicie sesión para comenzar a reservar SupersHeroes</p>
            <hr />

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={event => setName(event.target.value)}/>
            </div>

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
                >
                    Login
            </button>
        </div>
    )
}