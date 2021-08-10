import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Images from '../../Theme/Images';
import {WebView} from 'react-native-webview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles

const WebviewBrowser = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  const [urlWV, setUrlWV] = useState('https://www.google.com');

  var webview = useRef(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    webview && webview.reload();
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 1500);
  }, [refreshing]);

  const handleWebViewNavigationStateChange = async (newNavState) => {
    const {url, title} = newNavState;
  };

  const wvGoback = () => {
    webview.goBack();
  };

  const onLoadCompleted = () => {
    setRefreshing(false);
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: 60,
            paddingHorizontal: 50,
            alignItems: 'center',
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={wvGoback}
            style={{
              position: 'absolute',
              zIndex: 1,
              left: 0,
              width: 50,
              paddingLeft: 20,
              paddingVertical: 15,
            }}>
            <MaterialIcons name={'arrow-back-ios'} size={25} color={'black'} />
          </TouchableOpacity>

          <Text style={{fontSize: 17, color: 'black'}}>Webview Browser</Text>
        </View>
        <ScrollView
          style={{backgroundColor: 'white', position: 'relative'}}
          contentContainerStyle={{flex: 1}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh} // exl in function : this.yourWebview.reload();
            />
          }>
          <WebView
            ref={(ref) => (webview = ref)}
            source={{uri: urlWV}}
            startInLoadingState={true}
            onNavigationStateChange={handleWebViewNavigationStateChange}
            // style={{marginTop: 25}}
            onLoadEnd={onLoadCompleted}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default WebviewBrowser;
