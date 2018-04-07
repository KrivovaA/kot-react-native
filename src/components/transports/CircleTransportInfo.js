import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';

export default class CircleTransportInfo extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <View style={styles.circle}>
        <Text style={styles.textCircle}>
          {this.props.transport.number}
        </Text>
        <Text style={styles.smallTextCircle}>
          {this.props.transport.count}
        </Text>
      </View>
    );
  }
}

