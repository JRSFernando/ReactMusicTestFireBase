'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import AlertInput from 'react-native-dialog-input';
const firebase = require('firebase');
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const styles = require('../styles')

const {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Button,
} = ReactNative;

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDZ6XtTeTBalKyLmPV1Dzw1k1Q3kYq_AYM",
    authDomain: "react-native-db-9ee53.firebaseapp.com",
    databaseURL: "https://react-native-db-9ee53.firebaseio.com",
    storageBucket: "react-native-db-9ee53.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class GroceryApp extends Component {

    state = {
        isDialogVisible:false
    }

    showDialog = () => {
        this.setState({ isDialogVisible: true });
    }

    closeDialog = () => {
        this.setState({ isDialogVisible: false });
    }

    static navigationOptions = {
        header: null
    }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Items" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

        <ActionButton
          title="Back to home"
          onPress={() =>
            this.props.navigation.goBack()
          }
        />

        <ActionButton onPress={this.showDialog}
            title="Add" />
            <AlertInput isDialogVisible={this.state.isDialogVisible}
                title={"Add Item"}
                dialogStyle={{marginBottom: 120}}
                message={"Sends Entered Item to DB"}
                hintInput ={"Enter Item"}
                submitInput={ (inputText) => {this.sendInput(inputText)} }
                closeDialog={this.closeDialog}>
            </AlertInput>

      </View>
    )
  }

  sendInput(text) {
    this.itemsRef.push({ title: text})
    this.closeDialog();
  }

  _renderItem(item) {

    const onPress = () => {
      Alert.alert(
        'Remove',
        'Remove Selected Item?',
        [
          {text: 'Remove', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }
}