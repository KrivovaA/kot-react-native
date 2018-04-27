import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';
import CircleInfo from './CircleInfo';

class WorkingInfo extends React.Component {
  render() {
    return (
      <View style={styles.workingInfo}>
        <View style={styles.workingInfoData}>
          <CircleInfo count={193}/>
          <Text style={styles.textDark}>работающих автобусов</Text>
        </View>
        <View style={styles.workingInfoData}>
          <CircleInfo count={5}/>
          <Text style={styles.textDark}>неработающих автобусов</Text>
        </View>
        <View style={styles.workingInfoData}>
          <CircleInfo count={0}/>
          <Text style={styles.textDark}>проблемы</Text>
        </View>
      </View>
    );
  }
}

export default WorkingInfo;