import {gql} from '@apollo/client';

export interface IPokemon {
    id: number;
    name: string;
    maxCP: number;
    maxHP: number;
    image: string;
    attacks: {
        fast: Array<{ __typename: string, name: string, damage: number }>;
        special: Array<{ __typename: string, name: string, damage: number }>;
    };
    __typename: string;
}

export interface IPokemonsData {
    pokemons: IPokemon[];
}

export interface IPokemonVars {
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

