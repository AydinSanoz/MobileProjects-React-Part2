/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App';
import CityYelp from './src/CityYelp';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CityYelp);
