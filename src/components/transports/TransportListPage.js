import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';
import CircleTransportInfo from './CircleTransportInfo'

const transportList = [
  {number: '1',info: '', count: '10'},
  {number: '15',info: '', count: '15'},
  {number: '3',info: '', count: '20'},
];

class TransportListPage extends React.Component {
  render() {
    return (
      <View style={styles.containerTransportsList}>
        {
          transportList.map((item) => <CircleTransportInfo transport={item} />)
        }

        <Text style={styles.textLight}>
          This is the transports list!
        </Text>
      </View>
    );
  }
}


TransportListPage.navigationOptions = {
  drawer: {}
};

export default TransportListPage;
