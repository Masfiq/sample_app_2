import { StatusBar } from 'expo-status-bar';
import React,{ useCallback } from 'react';
import { StyleSheet, Text, View ,ScrollView,ImageBackground,Image,Alert,Button,Linking} from 'react-native';

const supportedURL = "https://drive.google.com/drive/folders/11DI83BG1K6cJKhRcdLYBtPe00oh4m9Nf?usp=sharing";
const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

//export default function App() {
  const App = () =>{
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {/* <View style={styles.container}>
      <ImageBackground
       source={require('./img/sunset.jpg')}
       >
      </ImageBackground>
      </View> */}
      <View style={styles.itemContainer}>
              <View style={styles.container}>
              <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
              <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
            </View>
          <View style={styles.divStyle}>
            <Image source={require('./img/icon_1.png')} style={{width:'100%',height:'100%'}} />
            {/* <Text>Hello world</Text> */}
            <OpenURLButton url={supportedURL}>Press</OpenURLButton>
            <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
          </View>
        <View style={styles.divStyle}>

        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.divStyle}>

        </View>
        <View style={styles.divStyle}>

        </View>
      </View>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    //flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  container: {
    height:'100%',
     width:'100%',
  },
  itemContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10,
    paddingTop:50
  },
  divStyle:{
    backgroundColor:'blue',
    height:100,
    width:100
  }

});


export default App;