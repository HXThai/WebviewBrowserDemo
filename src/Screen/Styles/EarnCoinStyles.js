import {StatusBar, StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';
import Metric from '../../Theme/Metric';

export default StyleSheet.create({
  ...AppStyles,
  btnTurn: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 15,
  },
  txtBtnTurn: {
    fontSize: 18,
    color: '#fff',
  },
  contend: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#F2F2F2',
  },
  txtTitle: {
    width: '90%',
    textAlign: 'center',
    color: Color.blackBackground,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  btnMoney: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    width: Metric.width * 0.5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'center',
  },
  leftBtn: {
    width: '30%',
    justifyContent: 'center',
  },
  imgMoney: {
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  rightBtn: {
    flex: 1,
    justifyContent: 'center',
  },
  btnCard: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.main,
    width: Metric.width * 0.5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  txtCard: {
    color: Color.main,
  },
  txtMoneyBtnMoney: {
    color: Color.main,
    fontSize: 17,
    fontWeight: 'bold',
  },
  txtTurnNumber: {
    marginTop: 20,
    alignSelf: 'center',
  },
  btnWatchVideo: {
    width: 0.6 * Metric.width,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.main,
    alignSelf: 'center',
    marginTop: 15,
    paddingVertical: 4,
  },
  btnLeftWatch: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalComplete: {
    width: 0.8 * Metric.width,
    height: 150,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    top: Metric.height / 2 - 60,
    alignSelf: 'center',
    margin: 0,
  },
  contentModal: {
    height: 110,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  txtContent: {
    textAlign: 'center',
  },
  foooter: {
    height: 40,
    borderBottomEndRadius: 8,
    flexDirection: 'row',
  },
  ok: {
    height: '100%',
    width: '50%',
    backgroundColor: Color.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnModal: {
    fontSize: 15,
    color: '#fff',
  },
  titleModal: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  titleWheel: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  viewTitleWheel: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 15,
  },
  underTitle: {
    flex: 0.5,
    height: 0.2,
    backgroundColor: '#333333',
    alignSelf: 'flex-end',
  },
});
