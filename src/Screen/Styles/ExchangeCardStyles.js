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
  profile: {
    width: '90%',
    elevation: 1,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 0.05 * Metric.width,
  },
  viewImg: {
    alignSelf: 'center',
    paddingTop: 10,
  },
  txtNamePro: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  btnPro: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: Color.main,
    borderRadius: 5,
  },
  phone: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },
  txtSavePro: {
    color: Color.main,
  },
  left: {
    width: '60%',
  },
  right: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txtAlert: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  btnTransfer: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    backgroundColor: Color.main,
    borderRadius: 20,
    width: 100,
    alignSelf: 'center',
    marginTop: 5,
  },
  txtTransfer: {
    color: '#fff',
    alignSelf: 'center',
  },
  txtDropDown: {
    fontWeight: 'bold',
    marginBottom: 7,
  },
  viewDropdown: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 15,
  },
});
