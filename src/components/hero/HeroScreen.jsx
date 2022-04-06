import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const params = useParams();
    const hero = getHeroById(params.heroId);
    const navigate = useNavigate();

    if(!hero){
        return <Navigate to={'/'}/>
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`/assets/${hero.id}.jpg`} alt={hero.superhero} className='img-thumbnail'/>
            </div>

            <div className='col-8'>
                <h3>{hero.superhero}</h3>
                <ul className='list-group'>
                    <li className='list-group-item'><b>Alter ego: {hero.alter_ego}</b></li>
                    <li className='list-group-item'><b>Publisher: {hero.publisher}</b></li>
                    <li className='list-group-item'><b>Firsst appearance: {hero.first_appearance}</b></li>
                </ul>

                <h5 className='mt-5'>Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className='btn btn-outline-info'
                    onClick={()=>{
                        navigate(-1);

                    }}>
                    Regresar
                </button>
            </div>
        </div>
    )
}
