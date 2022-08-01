import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useSelector} from 'react-redux';
import {Headers} from '../../Components';

const InfoPenyakit = props => {
  const navigation = useNavigation();
  const webViewListPenyakit = useSelector(state => state.ListPenyakitReducer);

  // const [currentUrl, setCurrentUrl] = useState('');
  const webviewRef = useRef(null);

  const {listInfoPenyakit} = props.route.params;
  // console.log('webviewlistPenyakit', webViewListPenyakit);
  // console.log(
  //   'webviewlistPenyakit',
  //   JSON.stringify(webViewListPenyakit, null, 2),
  // );
  // console.log('ROUTE PENYAKITT', webViewListPenyakit);

  return (
    <View style={{flex: 1}}>
      <Headers
        title="Info Penyakit"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <WebView
        source={{
          uri: `https://app.jala.tech/web_view/diseases/${listInfoPenyakit}`,
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

export default InfoPenyakit;
