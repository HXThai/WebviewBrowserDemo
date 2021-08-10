import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text as RNText,
  Dimensions,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as d3Shape from 'd3-shape';
import {snap} from '@popmotion/popcorn';
import Svg, {Path, G, Text, TSpan, TextPath} from 'react-native-svg';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EarnCoinStyles';
import Metric from '../Theme/Metric';
import Color from '../Theme/Color';
import Images from '../Theme/Images';
import Modal from 'react-native-modal';

const numberOfSegments = 12;
const wheelSize = Metric.width * 0.7;
const fontSize = 26;
const wheelBorder = Metric.width * 0.7 + 50;
const oneTurn = 360;
const angleBySegment = oneTurn / numberOfSegments;
const knoobSize = 70;
const angleOffset = angleBySegment / 2;

const makeWheel = () => {
  const data = Array.from({length: numberOfSegments}).fill(1);
  const arcs = d3Shape.pie()(data);
  const colors = data.map((item, index) => {
    const cl = index % 2 == 0 ? '#fff' : Color.main;
    return cl;
  });

  return arcs.map((arc, index) => {
    const instance = d3Shape
      .arc()
      .padAngle(0.01)
      .outerRadius(Metric.width / 2)
      .innerRadius(20);

    return {
      path: instance(arc),
      color: colors[index],
      value: Math.round(Math.random() * 10 + 1) * 200, //[200, 2200]
      centroid: instance.centroid(arc),
    };
  });
};

let _wheelPaths = makeWheel();
let _angle = new Animated.Value(0);
let angle = 0;

const EarnCoin = (props) => {
  const [enabled, setEnable] = useState(true);
  const [finished, setFinished] = useState(false);
  const [winner, setWinner] = useState(null);
  const [modalComp, setModalComp] = useState(false);

  useEffect(() => {
    _angle.addListener((event) => {
      if (enabled) {
        setEnable(false);
        setFinished(false);
        setModalComp(true);
      }
      angle = event.value;
    });
  }, []);

  const modalComplete = () => {
    return (
      <Modal
        animationInTiming={150}
        animationOutTiming={150}
        isVisible={modalComp}
        style={styles.modalComplete}
        onBackdropPress={() => setModalComp(false)}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.contentModal}>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RNText style={styles.titleModal}>CHÚC MỪNG BẠN</RNText>
          </View>
          <View style={{height: 60}}>
            <RNText style={styles.txtContent}>
              Chúc mừng bạn đã quay được{' '}
              <RNText style={{fontWeight: 'bold', color: Color.main}}>
                {winner}
              </RNText>
              , hãy tiếp tục quay thưởng cùng chúng tôi nào!
            </RNText>
          </View>
        </View>
        <View style={styles.foooter}>
          <TouchableOpacity
            style={[styles.ok, {borderBottomLeftRadius: 20}]}
            onPress={() => setModalComp(false)}>
            <RNText style={styles.txtBtnModal}>Từ chối</RNText>
          </TouchableOpacity>
          <View style={{width: 1, height: '100%', backgroundColor: '#fff'}} />
          <TouchableOpacity
            style={[styles.ok, {borderBottomRightRadius: 20}]}
            onPress={() => {
              setModalComp(false),
                setTimeout(() => {
                  _onPan();
                }, 160);
            }}>
            <RNText style={styles.txtBtnModal}>Đồng ý</RNText>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {finished && enabled && modalComplete()}
      <View style={styles.contend}></View>
    </View>
  );
};

export default EarnCoin;
