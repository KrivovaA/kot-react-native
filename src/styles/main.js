import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2934',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsContainer: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#2B2934',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 3
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#2B2934',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40
  },
  containerTransportsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#2B2934',
    justifyContent: 'space-around'
},
  containerTransportsListScroll: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2B2934'
},
  textDark: {
    color: '#74747E'
  },
  textLight: {
    fontSize: 24,
    color: 'white'
  },
  circle: {
    borderColor: '#d9d9d9',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80/2,
    borderWidth: 1,
    margin: 3
  },
  textCircle: {
    fontSize: 20,
    color: 'white'
  },
  smallTextCircle: {
    fontSize: 12,
    color: '#525460'
  },
  problemsView: {
    backgroundColor: '#2B2934',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  yellowLabel: {
    backgroundColor: '#fec201',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 50
  },
  chartBlock: {
    backgroundColor: '#eb1d65',
    width: 42,
    height: 10,
    margin: 1
  },
  chartTime: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  chartBody: {
    borderColor: '#4d4c51',
    borderBottomWidth: 2,
  },
  chartOut: {
    width: '100%',
  },
  chartColumn: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  time: {
    color: '#9da1a2',
  },
  workingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  workingInfoData: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});
// #453d09