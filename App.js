import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import Main from './src/main'
import client from './src/config/apolloClient'
import { Font } from 'expo'

const store = createStore(
  combineReducers({
    apollo: client.reducer()
  }),
  {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fontsLoaded: false
    }
  }

  async componentDidMount () {
    await Font.loadAsync({
      'adellesans-bold': require('./src/assets/fonts/adellesans-bold.ttf'),
      'adellesans-extrabold': require('./src/assets/fonts/adellesans-extrabold.ttf'),
      'adellesans-italic': require('./src/assets/fonts/adellesans-italic.ttf'),
      'adellesans-regular': require('./src/assets/fonts/adellesans-regular.ttf')
    })

    this.setState({ fontsLoaded: true })
  }

  render () {
    return (
      <ApolloProvider store={store} client={client}>
        <Main fontsLoaded={this.state.fontsLoaded} />
      </ApolloProvider>
    )
  }
}
