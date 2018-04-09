import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../../styles/main';
import users from '../../data/users';
//  {id:'1', Login: 'Admin', Password: 'Admin', Gender: 'm', Phone: '+79999999999', Email: 'admin@kot.ru', LastVisit: 'Fri Nov 11 2011 00:00:00'},

const header = [
  {title: 'Логин', entity: 'Login'},
  {title: 'Пол', entity: 'Gender'},
  {title: 'Телефон', entity: 'Phone'},
  {title: 'Email', entity: 'Email'},
  {title: 'Последний визит', entity: 'LastVisit'},
];

class CellHeader extends React.Component {
  render() {
    return (
      <View style={styles.cellHeader}>
        <Text style={styles.cellHeaderText}>{this.props.cell.title}</Text>
      </View>
    );
  }
}

class Cell extends React.Component {
  render() {
    return (
      <View style={styles.cell}>
        <Text style={styles.cellText}>{this.props.cell.title}</Text>
      </View>
    );
  }
}


class Table extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textLight}>Таблица с пользователями</Text>
        <View style={styles.containerTable}>
          {header.map((item) => {
            return <CellHeader cell={item}/>
          })}
        </View>
        <View style={styles.containerTable}>
          {header.map((item) => {
            return <Cell cell={item}/>
          })}
        </View>
      </View>
    );
  }
}



Table.navigationOptions = {
  drawer: {}
};

export default Table;
