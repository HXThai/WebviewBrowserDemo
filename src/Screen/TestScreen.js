import React, {useEffect} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {connect} from 'react-redux';

// Actions
import TestAction from '../Redux/TestRedux';
// Styles
import styles from './Styles/TestScreenStyles';

const TestScreen = (props) => {
  useEffect(() => {
    props.test('Hello');
  }, []);

  useEffect(() => {
    console.log(props.dataTest);
  }, [props.dataTest]);

  return (
    <View style={styles.container}>
      <Text>{props.dataTest.data || 'Test'}</Text>
      <Button title="Click" onPress={() => props.test('Custom')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);
