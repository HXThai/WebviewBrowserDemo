import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Color from '../Theme/Color';
import Images from '../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HistoryTurnStyles';
const dataEx = [
  {game: 'VQMM', reward: '100 xu', device: 'IOS', date: '11/11/2020'},
  {game: 'VQMM', reward: '100 xu', device: 'Android', date: '11/11/2020'},
  {game: 'VQMM', reward: '300 xu', device: 'IOS', date: '11/11/2020'},
  {game: 'VIDEO', reward: '100 xu', device: 'IOS', date: '11/11/2020'},
  {game: 'VIDEO', reward: '500 xu', device: 'IOS', date: '11/11/2020'},
  {game: 'VIDEO', reward: '200 xu', device: 'Android', date: '11/11/2020'},
  {game: 'VIDEO', reward: '100 xu', device: 'IOS', date: '11/11/2020'},
  {game: 'VIDEO', reward: '100 xu', device: 'IOS', date: '11/11/2020'},
  {game: 'VIDEO', reward: '100 xu', device: 'IOS', date: '11/11/2020'},
  {game: 'VIDEO', reward: '100 xu', device: 'IOS', date: '11/11/2020'},
  {game: 'VIDEO', reward: '100 xu', device: 'IOS', date: '11/11/2020'},
];
const HistoryTurn = (props) => {
  const [data, setData] = useState(dataEx);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
        <View style={[styles.colItem, {width: '10%'}]}>
          <Text numberOfLines={1} adjustsFontSizeToFit>
            {index + 1}
          </Text>
        </View>
        <View style={[styles.colItem, {width: '20%'}]}>
          <Text numberOfLines={1} adjustsFontSizeToFit>
            {item.game}
          </Text>
        </View>
        <View style={[styles.colItem, {width: '20%'}]}>
          <Text
            style={{color: Color.main}}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {item.reward}
          </Text>
        </View>
        <View style={[styles.colItem, {width: '20%'}]}>
          <Text numberOfLines={1} adjustsFontSizeToFit>
            {item.device}
          </Text>
        </View>
        <View style={[styles.colItem, {width: '20%'}]}>
          <Text numberOfLines={1} adjustsFontSizeToFit>
            {item.date}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contend}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={[styles.contend]}
          data={data}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default HistoryTurn;
