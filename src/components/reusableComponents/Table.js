import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from '../../styles/main';

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
        <Text style={styles.cellText}>{this.props.cell}</Text>
      </View>
    );
  }
}

class Column extends React.Component {
  render() {
    return (<Cell cell={this.props.user[this.props.entity]}/>);
  }
}

class Table extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {this.props.header.map((item) => {
            return (<View key={`table-${item.id}`}>
              <CellHeader cell={item}/>
              <View>
                {this.props.users.map((user) => {
                  return <Column entity={item.entity} user={user} key={`column-key${item.id}-${user.id}`}/>
                })}
              </View>
            </View>)
          })}
        </ScrollView>

      </View>
    );
  }
}



Table.navigationOptions = {
  drawer: {}
};

export default Table;
