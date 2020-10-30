/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

// import Reverse from './src(reverse)/Reverse';
// import Router from './src(cityYelp)/Router';
import Makeup from './src(Makeup)/Makeup'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Makeup);
