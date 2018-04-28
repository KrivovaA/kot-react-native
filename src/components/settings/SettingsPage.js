import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import styles from '../../styles/main';

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    //console.log(this.props)
    return (
      <View style={styles.settingsContainer}>
        <Text style={styles.textLight}>
          Настройки
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width:'100%', marginTop: '40%'}}
          onChangeText={(count) => {
            this.setState({count})
          }
          }
          value={this.state.count}
          keyboardType='numeric'
          placeholder='Количество транспорта в одном блоке на диаграмме'
        />
        <View style={{margin: 5}}>
          <Button
            onPress={() => this.props.screenProps.changeCountInBlock(this.state.count)}
            title="Сохранить"
            color="#4d4c51"
            accessibilityLabel="save"
          />
        </View>

      </View>
    );
  }
}


SettingsPage.navigationOptions = {
  drawer: {}
};

export default SettingsPage;
