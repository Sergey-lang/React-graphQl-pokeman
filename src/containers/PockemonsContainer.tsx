import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS, PokemonsData, PokemonVars} from '../graphql/get-pokemons';

export const PokemonsContainer: React.FC = () => {
    const {data: {pokemons = []} = {}} = useQuery<PokemonsData, PokemonVars>(GET_POKEMONS, {
        variables: {first: 9}
    })
    return (
        <div className='pokemons'>
            {pokemons.map(pokemon => JSON.stringify(pokemon))}
        </div>
    );
}

export const Pokemon: React.FC = () => {

    return (
        <div>
            <p>start</p>
        </div>
    );
}
