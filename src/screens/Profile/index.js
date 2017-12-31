import React from 'react'
import { View } from 'react-native'
import { onSignOut } from '../../auth'
import { SignedOut } from '../../router'
import Icon from '@expo/vector-icons/FontAwesome'

export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='user' size={30} color={tintColor} />
    )
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card title='John Doe'>
          <View
            style={{
              backgroundColor: '#bcbec1',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: 'center',
              marginBottom: 20
            }}
          >
            <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
          </View>
          <Button
            backgroundColor='#03A9F4'
            title='SIGN OUT'
            onPress={() => onSignOut().then(() => navigate('SignedOut'))}
          />
        </Card>
      </View>
    )
  }
}
