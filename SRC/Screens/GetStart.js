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

const GetStart = props => {
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
          }}
          source={require('../Assets/Images/bg.png')}>
          <ModalComponent
            isCircle={true}
            isText={false}
            placeHolderText={'jfhsdhfjkh'}
            titleText={'meerab'}
            style={{
                padding:moderateScale(10,.6)
            }}
            setUserName={setUserName}
            username={username}
            setPasswrod={setPasswrod}
            password={password}
            buttonText={'buttonText'}
            isSave={false}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Card: {
    backgroundColor: 'transparent',
    width: windowWidth * 0.9,
    height: windowHeight * 0.49,
    borderRadius: moderateScale(35, 0.6),
    borderWidth: 2,
    borderColor: 'white',
  },
  image: {
    position: 'absolute',
    left: 115,
    top: -50,
    width: windowHeight * 0.17,
    height: windowHeight * 0.17,
    borderRadius: (windowHeight * 0.17) / 2,
    backgroundColor: '#4FCCFA',
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'white',
    fontSize: moderateScale(48, 0.6),
    zIndex: -1,
    textTransform: 'uppercase',
  },
  txt2: {
    color: '#000000',
    fontSize: moderateScale(12, 0.6),
    textTransform: 'capitalize',
    textAlign: 'left',
    width: windowWidth * 0.73,
    paddingVertical: moderateScale(5, 0.6),
  },
  txt3: {
    color: 'white',
    fontSize: moderateScale(11, 0.6),
    textTransform: 'capitalize',
    textAlign: 'center',
    width: windowWidth * 0.73,
    paddingVertical: moderateScale(5, 0.6),
  },

  heading: {
    color: '#000000',
    fontSize: moderateScale(30, 0.6),
    zIndex: -1,
    letterSpacing: 1.7,
  },
  container: {
    paddingTop: windowHeight * 0.1,
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
  },
  description: {
    color: '#000000',
    ...FONTS.PoppinsLight11,
    fontSize: moderateScale(10, 0.6),
    paddingHorizontal: SIZES.padding * 1.3,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    marginTop: moderateScale(20, 0.3),
    ...FONTS.Regular10,
    paddingTop: moderateScale(10, 0.3),
  },
  signup_btn: {
    ...FONTS.Bold16,
    color: 'white',
  },
  edit: {
    backgroundColor: Color.white,
    width: moderateScale(20, 0.3),
    height: moderateScale(20, 0.3),
    position: 'absolute',
    bottom: -2,
    right: 5,
    borderRadius: moderateScale(10, 0.3),
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  icon: {
    backgroundColor: Color.white,
    height: windowHeight * 0.03,
    width: windowHeight * 0.03,
    borderRadius: (windowHeight * 0.03) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_view: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: SIZES.padding * 2,
  },
});

export default GetStart;
