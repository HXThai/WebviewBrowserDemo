import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import TestAction from '../Redux/TestRedux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../Theme/Color';
import Images from '../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeStyles';

const Home = (props) => {
  useEffect(() => {
    props.test('Hello');
  }, []);

  useEffect(() => {
    console.log(props.dataTest);
  }, [props.dataTest]);

  return (
    <View style={styles.container}>
      <View style={styles.contend}>
        {/* <Text>{props.dataTest.data || 'Test'}</Text> */}
        <Button title="Click" onPress={() => props.test('Custom')} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    dataTest: state.test,
  };
};

const mapDispatchToProps = (dispatch) => ({
  test: (text) => dispatch(TestAction.TestRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
