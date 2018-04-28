import React from 'react';
import { Image, Text, View, AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import { StackNavigator } from 'react-navigation';
// import store from './src/store';
import {createStore} from 'redux';
import reducers from './src/reducers';
import MainPage from './src/components/main/MainPage';
import { DrawerNavigator } from 'react-navigation';
import TransportListPage from './src/components/transports/TransportListPage';
import SettingsPage from './src/components/settings/SettingsPage';
import UsersPage from './src/components/users/UsersPage';
import styles from "./src/styles/main";


const initialState = {};
const store = createStore(reducers, initialState);


export const AppWithMenu = DrawerNavigator({
  Главная: { screen: MainPage },
  Транспорт: { screen: TransportListPage },
  Пользователи: { screen: UsersPage },
  Настройки: { screen: SettingsPage }
}, {
  drawerBackgroundColor: '#2B2934',
  contentOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#5f6163',
  },
  }
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countInBlock: 50.0 };
    this.changeCountInBlock = this.changeCountInBlock.bind(this);
  }
  changeCountInBlock(count) {
    console.log('~~~~');
    console.log(count);
    console.log('~~~~');
    if (count < 200 && count > 20) {
      this.setState({countInBlock: count});
    }
  }
  render() {
    const prop = {
      countInBlock: this.state.countInBlock,
      changeCountInBlock: this.changeCountInBlock
    };
    return (
      <AppWithMenu screenProps={prop} //countInBlock={this.state.countInBlock} changeCountInBlock={this.changeCountInBlock}
      />
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View style={styles.container}>
//           <Text style={styles.textLight}>
//             А это заголовок
//           </Text>
//           <Text style={styles.textDark}>
//             Здесь будет главная страница
//           </Text>
//           <View style={styles.circle}>
//             <Text style={styles.textCircle}>
//               235
//             </Text>
//           </View>
//         </View>
//       </Provider>
//
//     );
//   }
// }
export default App

