import React from 'react';
import {IPokemon} from '../graphql/get-pokemons';

type PropsType = {
    pokemon: IPokemon
}

export const Pokemon: React.FC<PropsType> = ({pokemon}) => {

    const attacks = pokemon &&
        pokemon.attacks &&
        pokemon.attacks.special
            .slice(0, 3)
            .map((attack: { __typename: string, name: string, damage: number }) => (
                <span key={attack.damage}>{attack.name}</span>
            ))

    return (
        <div className='pokemon'>
            <div className="pokemon__name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon__meta">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name}/>
            </div>
            {pokemon.attacks.special &&
            <div className="pokemon__attacks">
                {attacks}
            </div>
            }
        </div>
    );
}
