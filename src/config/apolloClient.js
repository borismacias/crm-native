import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({
  uri: 'http://crm.dev.propertysimple.com'
})

const getUserToken = () => {
  return '1'
  // TODO: Replace by AsyncStorage
  // if (window.localStorage.getItem('user')) {
  //   return JSON.parse(window.localStorage.getItem('user')).jwt
  // }
  return false
}

networkInterface.use([
  {
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      const token = getUserToken()
      req.options.headers.authorization = token ? `${token}` : null
      next()
    }
  }
])

const client = new ApolloClient({
  networkInterface,
  addTypeName: true,
  dataIdFromObject: o => o.id
})

export default client
