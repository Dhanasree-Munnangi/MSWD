import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'

const cli = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8081/graphql',
  })
})

ReactDOM.render(
  <ApolloProvider cli={cli}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
