import {StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Metric from '../../Theme/Metric';
export default StyleSheet.create({
  ...AppStyles,
  contend: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#F2F2F2',
  },
  viewToggle: {
    width: '90%',
    borderRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 20,
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
});
