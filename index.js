/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

// import Reverse from './src(reverse)/Reverse';
// import Router from './src(cityYelp)/Router';
// import Router from './src(famuosOnes)/Router'
// import Main from './src/Main'
// import  Makeup from './src(Makeup)/Makeup'
// import Router from './src(JobApi)/Router'
import  Router from './src(myJopApi)/Router'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
