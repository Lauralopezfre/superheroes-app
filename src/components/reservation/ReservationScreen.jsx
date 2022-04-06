import React from 'react'
import { heroesReservations } from '../../data/heroesReservations'
import { HeroCard } from '../hero/HeroCard'
import { ReservationCard } from '../reservation/ReservationCard'

export const ReservationScreen = () => {
  return (
    <div>
      <h1 style={
        {
          marginTop: 20,
        }
      }>Superheroes reservados</h1>

      <div className='col-7'>
          <h4>Resultados</h4>
          <hr />

          {
              heroesReservations.map(hero => (
                  <ReservationCard
                      key={hero.id}
                      {...hero}/>
              ))
          }
        </div>
    </div>
    
  )
}
