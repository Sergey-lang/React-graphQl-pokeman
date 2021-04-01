import React from 'react';
import './App.css'
import {PokemonsContainer} from './containers/PockemonsContainer';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';

export const link = createHttpLink({
    uri: 'https://graphql-pokemon2.now.sh'
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div>
                <PokemonsContainer/>
            </div>
        </ApolloProvider>
    );
}

