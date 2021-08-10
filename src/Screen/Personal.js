import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyles';

const Personal = (props) => {
  return (
    <View style={styles.container}>
      <Text>Personal</Text>
    </View>
  );
};

export default Personal;
