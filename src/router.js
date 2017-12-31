import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from './screens/Home'
import Profile from './screens/Profile'
import SignIn from './screens/SignIn'

export const SignedOut = StackNavigator(
  {
    SignIn: {
      screen: SignIn
    }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
)

export const SignedIn = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home'
      // tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name='home' size={30} color={tintColor} />
      // )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile'
      // tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name='user' size={30} color={tintColor} />
      // )
    }
  }
})

export const createRootNavigator = (signedIn = false, fontsLoaded = false) => {
  const StackNav = StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  )

  console.log('Layout FontsLoaded: ', fontsLoaded)

  return <StackNav screenProps={{ fontsLoaded }} />
}
