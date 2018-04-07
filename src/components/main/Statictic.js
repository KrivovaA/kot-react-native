import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from '../../styles/main';

class Statistic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLight}>
          THIS IS THE STATISTIC COMPONENT!
        </Text>
      </View>
    );
  }
}


Statistic.navigationOptions = {
  drawer: {}
};

export default Statistic