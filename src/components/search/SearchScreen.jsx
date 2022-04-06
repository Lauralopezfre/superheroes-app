import React from 'react'
import { useForm } from '../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard'
import {useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);


    const [ formValues, handleInputChange ] = useForm( {
        searchText: q,
    } );

    const {searchText} = formValues;
    const heroesFilter = getHeroByName(q);

    return (
        <div style={{
            marginTop: 35
        }}>
            <h1>Search Screen</h1>

            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Formulario</h4>
                    <hr />
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        console.log(searchText);
                        navigate(`?q=${searchText}`)
                    }}>
                        <input 
                            type="text"
                            placeholder='Buscar un heroe' 
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}/>

                            <button
                                type='submit'
                                className='btn btn-outline-success mt-20'
                                style={{
                                    marginTop: 30
                                }}>
                                    Buscar...
                                </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    {
                        heroesFilter.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
