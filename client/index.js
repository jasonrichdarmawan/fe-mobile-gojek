/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import GoridecarSummary from './src/features/goridecar/summary';

import MyApp from './src/MyApp';

AppRegistry.registerComponent(appName, () => MyApp);
