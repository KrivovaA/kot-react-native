import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../../styles/main';
import users from '../../data/users';
//  {id:'1', Login: 'Admin', Password: 'Admin', Gender: 'm', Phone: '+79999999999', Email: 'admin@kot.ru', LastVisit: 'Fri Nov 11 2011 00:00:00'},


class UsersPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLight}>Table</Text>
        <View style={styles.cellHeader}>
          <Text style={styles.cellHeaderText}>Table</Text>
        </View>
      </View>
    );
  }
}



UsersPage.navigationOptions = {
  drawer: {}
};

export default UsersPage;
