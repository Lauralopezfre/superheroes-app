import React from 'react'
import { Link } from 'react-router-dom'
import { heroesReservations } from '../../data/heroesReservations';

export const HeroCard = (hero) => {


    return (
        <div className='col'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={`${hero.images.sm}`} className='card-img-top' alt={hero.name} />
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-tittle'>
                                {hero.name}
                            </h5>
                            <p className='card-text'>
                                {hero.slug}
                            </p>

                            <p className='card-text'>
                                <small className='text-muted'>{hero.gender}</small>
                            </p>
                            
                            <Link to="/reservations" onClick={() => {
                                heroesReservations.push(hero)
                                alert("Se ha reservado el heroe " + hero.name);
                            }} className="btn btn-outline-success">Reservar</Link>

                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}
