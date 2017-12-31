import React, { Component } from 'react'
import { SignedOut, SignedIn, createRootNavigator } from './router'
import { isSignedIn } from './auth'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  componentWillMount () {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('An error occurred'))
  }

  render () {
    const { checkedSignIn, signedIn } = this.state

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null
    }

    return createRootNavigator(signedIn, this.props.fontsLoaded)
  }
}
