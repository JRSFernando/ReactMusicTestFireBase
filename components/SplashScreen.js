import React from 'react';
import { View, Text, Image } from 'react-native';

class SplashScreen extends React.Component {

  static navigationOptions = {
    header: null
  }
    
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Player');
    }
  }

  render() {
    return (
      <Image source={require('../img/Splash.png')}  style={{flex: 1, height:undefined, width:undefined}}/>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;