import React from 'react'
import { HeroList } from '../hero/HeroList'

export const InitScreen = () => {
    return (
        <div style={{
            marginTop: 20
        }}>
            <h1>Superheroes</h1>
            <p>Seleccione el superheroe que desee reservar...</p>

            <HeroList/>

        </div>
    )
}
