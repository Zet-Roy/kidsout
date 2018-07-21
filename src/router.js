import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default RootStack;