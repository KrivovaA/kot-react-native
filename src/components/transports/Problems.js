import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';

export default class Problems extends React.Component {
  render() {
    return (
      <View style={styles.problemsView}>
        <Text style={styles.textLight}>
          Проблемы
        </Text>
        <View style={styles.yellowLabel}>
          <Text>0</Text>
        </View>
        <Text style={styles.textDark}>
          В данный момент проблем не обнаружено
        </Text>

      </View>
    );
  }
}

