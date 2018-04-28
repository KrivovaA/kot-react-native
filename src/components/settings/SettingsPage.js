import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../../styles/main';

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.settingsContainer}>
        <Text style={styles.textLight}>
          Настройки
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width:'100%', marginTop: '40%'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          keyboardType='numeric'
          placeholder='Количество транспорта в одном блоке на диаграмме'
        />
      </View>
    );
  }
}


SettingsPage.navigationOptions = {
  drawer: {}
};

export default SettingsPage;
