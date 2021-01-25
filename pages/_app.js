import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/api/graphql',
  cache: new InMemoryCache(),
  onError: ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        // handle errors differently based on its error code
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            // old token has expired throwing AuthenticationError,
            // one way to handle is to obtain a new token and 
            // add it to the operation context
            const headers = operation.getContext().headers
            operation.setContext({
              headers: {
                ...headers,
                authorization: getNewToken(),
              },
            });
            // Now, pass the modified operation to the next link
            // in the chain. This effectively intercepts the old
            // failed request, and retries it with a new token
            return forward(operation);
          
          // handle other errors
          case 'ANOTHER_ERROR_CODE':
            // ...
        }
      }
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
