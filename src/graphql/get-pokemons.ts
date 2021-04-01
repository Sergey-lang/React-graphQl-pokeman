import {gql} from '@apollo/client';

interface Attacks {
   special: {name: string, damage: number}
}

interface Pokemon {
    id: string,
    name: string,
    image: string,
    maxHP: number,
    maxCP: number,
    attacks: Attacks
}

export interface PokemonsData {
    pokemons: Pokemon[];
}

export interface PokemonVars {
    first: number;
}

export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`;
