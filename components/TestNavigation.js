import React, { Component } from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';
import { db } from './firebase_conf';

let itemsRef = db.ref('/items');

export default class TestNavigation extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Firebase Connection Test</Text>
        <Text>{this.state.items}</Text>
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Player')
          }
        />
      </View>
    );
  }
}
