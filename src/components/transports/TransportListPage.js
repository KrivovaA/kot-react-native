import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from '../../styles/main';
import CircleTransportInfo from './CircleTransportInfo'
import {transportCountList} from '../../data/transportList';
import Problems from './Problems';


class TransportListPage extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerTransportsListScroll}>
        <Text style={styles.textLight}>Транспорт</Text>
        <View style={styles.containerTransportsList}>
          {
            transportCountList.map((item) => <CircleTransportInfo transport={item} key={`CircleTransportInfo-${item.number}`}/>)
          }
        </View>
        <Problems/>
      </ScrollView>
    );
  }
}


TransportListPage.navigationOptions = {
  drawer: {}
};

export default TransportListPage;
