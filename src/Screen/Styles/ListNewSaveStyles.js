import {StyleSheet} from 'react-native';
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
  },
  viewTitle: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  leftTitle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  rightTitle: {
    fontSize: 11,
    color: 'gray',
  },
  item: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 60,
  },
  contendNotifi: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  btnSee: {
    backgroundColor: '#4AC200',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  txtBtnSee: {
    color: '#fff',
  },
  viewTag: {
    width: '90%',
    alignSelf: 'center',
  },
  Vtag: {
    width: '100%',
    borderRadius: 10,
    padding: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  tag: {
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Color.main,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    padding: 10,
    marginBottom: 10,
  },
  txtTag: {
    color: Color.main,
    marginRight: 10,
  },
});
