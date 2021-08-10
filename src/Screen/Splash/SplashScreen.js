import React, {useEffect, useState} from 'react';
import {Image, View, Platform} from 'react-native';

// let uniqueId = DeviceInfo.getUniqueId();
// console.log(getUniqueId());
const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.reset({
        index: 0,
        routes: [{name: 'WebviewBrowser'}],
      });
      props.navigation.navigate('WebviewBrowser');
    }, 2500);
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Image
        source={{
          uri:
            'https://format-com-cld-res.cloudinary.com/image/private/s---Ep8U8ha--/c_crop,h_1200,w_1200,x_0,y_0/c_fill,g_center,w_1200/fl_keep_iptc.progressive,q_95/v1/a76ae3591d0688564bd3a3a25f6020bd/HelloVon_Appe_Final_02a.jpg',
        }}
        style={{width: 200, height: 200}}
      />
    </View>
  );
};

export default SplashScreen;
