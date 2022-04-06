import React from 'react'
import { HeroCard } from './HeroCard';
import 'animate.css';
import { Heroes } from '../../data/heroes';

export const HeroList = () => {

    const heroes = Heroes()

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInLeft'>
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}/>
                ))
            }
        </div>
    )
}
