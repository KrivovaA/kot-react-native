import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../../styles/main';
import users from '../../data/users';
import Table from '../reusableComponents/Table';

const header = [
  {id:'1', title: 'Логин', entity: 'Login'},
  {id:'2', title: 'Пол', entity: 'Gender'},
  {id:'3', title: 'Телефон', entity: 'Phone'},
  {id:'4', title: 'Email', entity: 'Email'},
  {id:'5', title: 'Последний визит', entity: 'LastVisit'},
];

class UsersPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLight}>Таблица пользователей</Text>
        <Table users={users} header={header}/>
      </View>
    );
  }
}



UsersPage.navigationOptions = {
  drawer: {}
};

export default UsersPage;
