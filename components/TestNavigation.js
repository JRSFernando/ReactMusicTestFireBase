import React, { Component } from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

export default class TestNavigation extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}
