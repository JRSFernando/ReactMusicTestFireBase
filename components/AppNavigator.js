import { createStackNavigator,createAppContainer } from 'react-navigation';
import TestNavigation from './TestNavigation';
import GroceryApp from './GroceryApp';
import SplashScreen from './SplashScreen';
import Player from '../components_player/App';
import ProgressBar from './ProgressBar';

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: SplashScreen},
  Player: {screen: Player},
  GroceryApp: { screen: GroceryApp },
  TestNavigation: { screen: TestNavigation },
  ProgressBar: { screen: ProgressBar },
});

const App = createAppContainer(AppNavigator);

export default App;