import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_POKEMONS, IPokemonsData, IPokemonVars} from '../graphql/get-pokemons';
import {Pokemon} from '../components/Pokemon';

export const PokemonsContainer: React.FC = () => {

    const {data: {pokemons = []} = {}} = useQuery<IPokemonsData, IPokemonVars>(GET_POKEMONS, {
        variables: {first: 9}
    })

    return (
        <div className='container'>
            {
                pokemons.map(p => {
                    return <Pokemon key={p.id} pokemon={p}/>
                })
            }
        </div>
    );
}
