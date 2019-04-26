import { createStackNavigator,createAppContainer } from 'react-navigation';
import TestNavigation from './TestNavigation';
import Friends from './Friends';
import GroceryApp from './GroceryApp';
import SplashScreen from './SplashScreen'
import Player from '../components_player/App'

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: SplashScreen},
  Player: {screen: Player},
  GroceryApp: { screen: GroceryApp },
  TestNavigation: { screen: TestNavigation },
  Friends: {screen: Friends}
});

const App = createAppContainer(AppNavigator);

export default App;