import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/main';

class UsersPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLight}>
          This is the users page!
        </Text>
      </View>
    );
  }
}


UsersPage.navigationOptions = {
  drawer: {}
};

export default UsersPage;
