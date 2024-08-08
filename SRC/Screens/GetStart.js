import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  Platform,
  ScrollView,
  ToastAndroid,
  View,
  StyleSheet,
} from 'react-native';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {useDispatch, useSelector} from 'react-redux';
import {Post} from '../Axios/AxiosInterceptorFunction';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {Icon} from 'native-base';
import ImagePickerModal from '../Components/ImagePickerModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, SIZES} from '../Constant/theme';
import ModalComponent from '../Components/ModalComponent';

const GetStart = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [image, setImage] = useState({});
  const [password, setPasswrod] = useState('');

  const {user_type} = useSelector(state => state.authReducer);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={['#9ae7ff', '#76c2ff', '#35aeff']}
      //  colors={['#00C6FF', '#0072FF']}
      style={styles.Card}>
         <CustomButton
            onPress={()=>{
              navigation.navigate('LoginScreen')
            }}
            text={'Log in'}
            fontSize={moderateScale(16, 0.3)}
            textColor={'#000000'}
            borderWidth={1.5}
            borderColor={Color.white}
            borderRadius={moderateScale(30, 0.3)}
            width={windowWidth * 0.8}
            height={windowHeight * 0.06}
            // marginTop={moderateScale(25, 0.3)}
            bgColor={'white'}
            isBold
          />
         <CustomButton
            onPress={()=>{
              navigation.navigate('ChooseSearchEngineType')
            }}
            text={'Create Your Personal Search Engine'}
            fontSize={moderateScale(16, 0.3)}
            textColor={'#7e7c7c'}
            borderWidth={1.5}
            borderColor={Color.white}
            borderRadius={moderateScale(30, 0.3)}
            width={windowWidth * 0.8}
            height={windowHeight * 0.06}
            // marginTop={moderateScale(25, 0.3)}
            bgColor={'white'}
            isBold
          />
      </LinearGradient>
        
          {/* <ModalComponent/> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.3,
  },
  Card: {
    // backgroundColor: '#5FDEFA',
    width: windowWidth * 0.9,
    paddingVertical:moderateScale(20,0.3),
    borderRadius: moderateScale(20, 0.6),
    borderWidth: 2,
    borderColor: 'white',
    gap: moderateScale(15,0.3)
  },
});

export default GetStart;
