import React from 'react';
import { Button, View, Text } from 'react-native'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="ВОЙТИ"
          color="#5dcb8d"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}


export default HomeScreen