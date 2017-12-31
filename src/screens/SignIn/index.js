import React from 'react'
import styled from 'styled-components/native/'
import SvgUri from 'react-native-svg-uri';
import { View, Text, Image, StyleSheet } from 'react-native'
import { onSignIn } from '../../auth'
import LinearGradient from 'react-native-linear-gradient';

const Wrapper = styled.View`
  display: flex
  flex-direction: column
  height: 100%
  background-color: white
`

const Header = styled.View`
  flex-grow: 1
  background-color: white
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  margin-top: 20
`

const Body = styled.View`
  flex-grow: 10
`

const SignInText = styled.Text`
  margin-right: 21
  font-family: adellesans-regular;
	font-size: 16;
	text-align: left;
	color: #ff3867;
`

const styles = StyleSheet.create({
  linearGradient: {

  }
})

export default class SignIn extends React.Component {
  render() {
    console.log('Sign in screenProps: ', this.props.screenProps.fontsLoaded)

    const { navigate } = this.props.navigation
    if (!this.props.screenProps.fontsLoaded) {
      return <Text>Loading Fonts</Text>
    }

    return (
      <Wrapper>
        <Header>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={{ width: 75, height: 75, marginLeft: 21 }}
          />
          <SignInText>
            Sign In
          </SignInText>
        </Header>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Body>
            <SvgUri
              width="200"
              height="200"
              source={require('../../../public/icons/icons.svg')}
            />
          </Body>
        </LinearGradient>

        {/* <Card title='SIGN IN'>
        <FormLabel>Email</FormLabel>
        <FormInput placeholder='Email address...' />
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry placeholder='Password...' />

        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='#03A9F4'
          title='SIGN IN'
          onPress={() => {
            onSignIn().then(() => navigation.navigate('SignedIn'))
          }}
        />
      </Card> */}
      </Wrapper>
    )
  }
}
