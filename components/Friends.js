import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Friends extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Button
          title="Back"
          onPress={() =>
            this.props.navigation.navigate('TestNavigation')
          }
        />
      </View>
    );
  }
}
