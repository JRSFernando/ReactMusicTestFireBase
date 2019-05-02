import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { db } from './firebase_conf';
import * as Progress from 'react-native-progress';

let Ref = db.ref('/progress');

export default class ProgressBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            progress: 0,
        };
    }

    static navigationOptions = {
      title:'Stress Indicator',
      headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'rgb(24, 40, 66)'
        },
    }

    componentDidMount(){
        Ref.on('value', snapshot => {
            snapshot.forEach((child) => {
              prediction = child.val().percentage;
              this.setState({progress: prediction})
            });
            console.log(prediction);
        });
    }
  render() {
    return (
      <View style={styles.container}>
        <Progress.Circle size={300} indeterminate={false} progress={this.state.progress} showsText={true} thickness={20}
        strokeCap={"round"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 55,
    backgroundColor: 'rgb(24, 40, 66)',
  },
});