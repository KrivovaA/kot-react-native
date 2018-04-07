import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';

class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLight}>
          This is the main page!
        </Text>
      </View>
    );
  }
}

MainPage.navigationOptions = {
  drawer: {}
};

export default MainPage;