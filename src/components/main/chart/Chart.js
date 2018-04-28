import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles/main';
import {transportInTime} from '../../../data/transportInTime';
import ChartBlock from './ChartBlock';

const PieceOfChart = 50.0;

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.addBlockToChart = this.addBlockToChart.bind(this);
  }

  addBlockToChart(count) {
    let indents = [];
    for (let i = 0; i < Math.ceil(count/this.props.screenProps.countInBlock); i++) {
      indents.push(<ChartBlock />);
    }
    return indents;
  }
  render() {
    return (
      <View style={styles.chartOut}>
        <View style={styles.chartBody}>
          <View style={styles.chartColumn}>
              {transportInTime.map((item)=>{
                return (
                  <View key={`${item.time}-${item.countTransport}`}>
                    <View>{this.addBlockToChart(item.countTransport)}</View>
                  </View>)
              })}
          </View>
        </View>
        <View style={styles.chartTime}>
          {transportInTime.map((item) => {
            return <Text key={item.time} style={styles.time}>{item.time}</Text>
          })}
        </View>

      </View>

    );
  }
}

