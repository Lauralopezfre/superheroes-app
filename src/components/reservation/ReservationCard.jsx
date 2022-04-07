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
        <div className='col'
        style={{
            margin: 30,
        }}>
            <div className='card'>
                <div className='row no-gutters'>

                    <div className='col-4'>
                        <img src={`${hero.images.sm}`} className='card-img-top' alt={hero.name} />
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>

                            <h5 className='card-tittle'
                                style={{
                                    fontSize: 27,
                                    display:'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                }}>
                                {hero.name}
                                <p class="fw-lighter">{hero.biography.publisher}</p>
                            </h5>

                            <p className='card-text'>
                                {hero.slug}
                            </p>

                            <p className='card-text'>
                                <small className='text-muted'>{hero.appearance.gender} | {hero.appearance.race}</small>
                            </p>

                            <p class="fw-lighter">{hero.biography.placeOfBirth}</p>
                            <p class="fw-lighter">{hero.biography.fullName}</p>


                            <button 
                                onClick={handleRemove}
                                className="btn btn-outline-success"
                                style={{
                                    position: 'absolute',
                                    bottom: 5,
                                    marginBottom: 20
                                }}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
