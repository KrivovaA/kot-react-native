import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';

export default class CircleTransportInfo extends React.Component {
  render() {
    return (
      <View style={styles.circle}>
        <Text style={styles.textCircle}>
          235
        </Text>
      </View>
    );
  }
}

