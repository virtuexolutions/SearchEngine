import React from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import {View} from 'native-base';
import FastImage from 'react-native-fast-image';
import { ImageBackground } from 'react-native';

const SplashScreen = () => {
  const backgroundImage = require("../Assets/Images/splash.gif");
  return (
    // <ScreenBoiler
    //   statusBarBackgroundColor={'white'}
    //   statusBarContentStyle={'dark-content'}>
        <View style={styles.container}>
           <ImageBackground
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: windowHeight,
            gap:moderateScale(15,0.3)
          }}
          source={require('../Assets/Images/bg.png')}>
          <View style={styles.imageContainer}>
            <CustomImage
              style={{height: '100%', width: '100%'}}
              source={require('../Assets/Images/logo2.png')}
            />
          </View>

          {/* <ModalComponent/> */}
        </ImageBackground>
        {/* <FastImage
          source={backgroundImage}
          style={{width: '100%', height: '100%'}}
          resizeMode={FastImage.resizeMode.cover}
          // animated
          // onLoadEnd={(e) =>console.log(e)}
          // onProgress={e => }
          // onLoad={e => console.log(e)}
          // autoplay
        /> */}

        </View>
      
    // </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: windowHeight,
    width: windowWidth,
    // backgroundColor: Color.themeColor,
  },
  bottomImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.3,
  },

  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: 'bold',
  },
  imageContainer: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.3,
  },
});

export default SplashScreen;
