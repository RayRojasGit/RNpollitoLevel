import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Screens
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';
import NewScreen from '../screens/NewScreen';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import SA from './modules/clasificacion';
import SB from './modules/clasificacion1';
import SC from './modules/clasificacion2';
import SD from './modules/clasificacion3';
import SE from './modules/clasificacion4';
import SF from './modules/clasificacion5';
import SG from './modules/clasificacion6';

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: LoginScreen,
      Drawer: createDrawerNavigator({
        Home: createStackNavigator(
          {
            Tab: createBottomTabNavigator({
              Tab1: Tab1Screen,
              Tab2: Tab2Screen
            }),
            SA: SA,
            SB: SB,
            SC: SC,
            SD: SD,
            SE: SE,
            SF: SF,
            SG: SG
          },
          {
            defaultNavigationOptions: {
              title: 'Welcome to Home Screen!'
            }
          }
        ),
        Drawer: NewScreen
      })
    },
    {
      initialRouteName: 'Auth'
    }
  )
);