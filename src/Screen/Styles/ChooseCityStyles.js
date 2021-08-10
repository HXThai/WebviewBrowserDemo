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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: Metric.width / 3,
  },
});
