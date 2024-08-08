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
          <View style={styles.imageContainer}>
            <CustomImage
              style={{height: '100%', width: '100%'}}
              source={require('../Assets/Images/logo2.png')}
            />
          </View>
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
  card:{
    borderWidth:1,
    borderColor:'white',
    width:windowWidth*0.7 ,
  }
});

export default GetStart;
