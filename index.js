/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

// import Reverse from './src(reverse)/Reverse';
// import Router from './src(cityYelp)/Router';
import Main from './src/Main'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
