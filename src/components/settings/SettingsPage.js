import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';

class SettingsPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLight}>
          This is the settings page!
        </Text>
      </View>
    );
  }
}


SettingsPage.navigationOptions = {
  drawer: {}
};

export default SettingsPage;
