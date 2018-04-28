import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';
import Chart from './chart/Chart';
import WorkingInfo from './WorkingInfo';

class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textLight}>
          Активность
        </Text>
        <WorkingInfo/>
        <Chart />
      </View>
    );
  }
}

MainPage.navigationOptions = {
  drawer: {}
};

export default MainPage;
