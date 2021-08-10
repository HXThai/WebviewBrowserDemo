import {StatusBar, StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';
import Metric from '../../Theme/Metric';

export default StyleSheet.create({
  ...AppStyles,
  contend: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#F2F2F2',
    // alignItems: 'center',
    // alignContent: 'center',
  },
  itemList: {
    flexDirection: 'row',
    margin: 7,
    justifyContent: 'space-around',
    borderColor: 'grey',
    borderBottomWidth: 0.5,
  },
  viewTag: {
    width: '90%',
    // alignSelf: 'center',
    flexDirection: 'row',
  },
  Vtag: {
    width: '100%',
    borderRadius: 10,
    padding: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tag: {
    height: 26,
    // width: 95,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Color.main,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    padding: 5,
    marginBottom: 10,
  },
  txtTag: {
    color: Color.main,
    marginRight: 10,
    fontSize: 10,
  },
});
