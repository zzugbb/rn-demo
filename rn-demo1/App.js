import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './page/Home.js';
import DetailsScreen from './page/Detail.js';
import ScrollScreen from './page/Scroll.js';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Scroll: ScrollScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}