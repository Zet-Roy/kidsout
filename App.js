import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RootStack from './src/router';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

import { Provider } from 'react-redux'
import Store from './src/store'

let storeInstance = Store()

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={storeInstance}>
        <RootStack />
      </Provider>
    );
  }
}
