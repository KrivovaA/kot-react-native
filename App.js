import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
// import store from './src/store';
import {createStore} from 'redux';
import reducers from './src/reducers';
import styles from './src/styles/main';

const initialState = {};
const store = createStore(reducers, initialState);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.textLight}>
            А это заголовок
          </Text>
          <Text style={styles.textDark}>
            Здесь будет главная страница
          </Text>
          <View style={styles.circle}>
            <Text style={styles.textCircle}>
              235
            </Text>
          </View>
        </View>
      </Provider>

    );
  }
}

