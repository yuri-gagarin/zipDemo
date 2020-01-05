/**
 * @format
 */
import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// warnings config // 
YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => App);