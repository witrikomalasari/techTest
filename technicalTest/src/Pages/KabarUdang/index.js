import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useSelector} from 'react-redux';
import {Headers} from '../../Components';

const KabarUdang = props => {
  const navigation = useNavigation();
  const webViewKabarUdang = useSelector(state => state.kabarUdangReducer);

  // const [currentUrl, setCurrentUrl] = useState('');
  const webviewRef = useRef(null);

  const {KabarUdang} = props.route.params;
  // console.log(
  //   'webViewKabarUdang',
  //   JSON.stringify(webViewKabarUdang.kabarUdang, null, 2),
  // );

  return (
    <View style={{flex: 1}}>
      <Headers
        title="Kabar Udang"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <WebView
        source={{
          uri: `https:app.jala.tech/web_view/posts/${KabarUdang}`,
        }}
        renderLoading={() => (
          <ActivityIndicator
            color="blue"
            size="large"
            style={{
              flex: 1,
            }}
          />
        )}
        javaScriptEnabled={true}
        startInLoadingState={true}
        domStorageEnabled={true}
        ref={webviewRef}
      />
    </View>
  );
};

export default KabarUdang;
