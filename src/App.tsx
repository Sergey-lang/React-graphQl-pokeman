import React from "react";
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import {PokemonsContainer} from './containers/PockemonsContainer';

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

