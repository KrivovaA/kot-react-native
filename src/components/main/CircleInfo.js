import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';

export default class CircleInfo extends React.Component {
  render() {
    return (
      <View style={styles.circle}>
        <Text style={styles.textCircle}>
          {this.props.count}
        </Text>
      </View>
    );
  }
}

