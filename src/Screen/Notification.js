import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../Theme/Images';
import ToggleSwitch from 'toggle-switch-react-native';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NotificationStyles';
import Color from '../Theme/Color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout';

const Notification = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contend}></View>
    </View>
  );
};

export default Notification;
