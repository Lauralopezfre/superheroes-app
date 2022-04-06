import React from 'react'
import { heroesReservations } from '../../data/heroesReservations';

export const ReservationCard = (hero) => {

    const handleRemove =()=>{
        // let hero = 
        console.log(heroesReservations.find(h => h.id === hero.id))
        const position = heroesReservations.indexOf(heroesReservations.find(h => h.id === hero.id))
        heroesReservations.splice(position, 1)
        console.log(heroesReservations)
        alert("Se ha eliminado el heroe " + hero.name);
    }

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


                            <button 
                                onClick={handleRemove}
                                className="btn btn-outline-success">
                                Eliminar
                            </button>

                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}
