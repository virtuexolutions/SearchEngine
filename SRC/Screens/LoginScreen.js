import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {windowHeight, windowWidth} from '../Utillity/utils';

import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, SIZES} from '../Constant/theme';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imagePicker, setImagePicker] = useState(false);
  const [image, setImage] = useState({});

  const {user_type} = useSelector(state => state.authReducer);
  console.log(user_type, 'userrtypeeeeee');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: windowHeight,
            width: windowWidth,
          }}
          imageStyle={{width: '100%', height: '100%'}}
          source={require('../Assets/Images/bg1.png')}>
          {/* <View style={styles.Card}> */}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#9ae7ff', '#76c2ff', '#64c0ff']}
            //  colors={['#00C6FF', '#0072FF']}
            style={styles.Card}>
            <View style={styles.image}>
              <CustomText isBold style={styles.txt}>
                SL
              </CustomText>
            </View>
            <View
              style={{
                width: '100%',
                paddingTop: windowHeight * 0.12,
                alignItems: 'center',
                height: '100%',
              }}>
              <CustomText isBold style={styles.heading}>
                Welcome Back
              </CustomText>
              <CustomText style={styles.description} numberOfLines={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                suscipit gravida tellus, eu ullamcorper.
              </CustomText>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: moderateScale(20, 0.3),
                }}>
                <TextInputWithTitle
                  iconHeigth={windowHeight * 0.00005}
                  titleText={'Username'}
                  placeholder={'Username, Email or Phone Number'}
                  setText={setUserName}
                  value={username}
                  viewHeight={0.06}
                  viewWidth={0.8}
                  inputWidth={0.55}
                  border={1}
                  borderRadius={moderateScale(30, 0.3)}
                  backgroundColor={'white'}
                  borderColor={Color.black}
                  marginTop={moderateScale(10, 0.3)}
                  color={Color.black}
                  placeholderColor={Color.mediumGray}
                />
                <TextInputWithTitle
                  iconHeigth={windowHeight * 0.00005}
                  RightIcon={true}
                  titleText={'Password'}
                  placeholder={'Password'}
                  setText={setPassword}
                  value={password}
                  secureText={true}
                  viewHeight={0.06}
                  viewWidth={0.8}
                  inputWidth={0.55}
                  borderRadius={moderateScale(30, 0.3)}
                  border={1}
                  backgroundColor={'white'}
                  marginTop={moderateScale(10, 0.3)}
                  placeholderColor={Color.mediumGray}
                />
                <CustomText style={styles.txt2}>Forgot Password?</CustomText>
                <View style={{marginTop: SIZES.padding * 1.11, zIndex: -1}} />
                <CustomButton
                  onPress={() => {}}
                  text={'Log in'}
                  fontSize={moderateScale(16, 0.3)}
                  textColor={'#000000'}
                  borderWidth={1.5}
                  borderColor={Color.white}
                  borderRadius={moderateScale(30, 0.3)}
                  width={windowWidth * 0.4}
                  height={windowHeight * 0.06}
                  // marginTop={moderateScale(25, 0.3)}
                  bgColor={'white'}
                  isBold
                />
              </View>
              <CustomText style={styles.txt3}>setting</CustomText>
            </View>
          </LinearGradient>
          {/* </View> */}

          {/*
           */}
        </ImageBackground>

        {/*s 
          <ImagePickerModal
            show={imagePicker}
            setShow={setImagePicker}
            setFileObject={setImage}
          /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#5FDEFA',
    width: windowWidth * 0.9,
    height: windowHeight * 0.49,
    borderRadius: moderateScale(35, 0.6),
    borderWidth: 2,
    borderColor: 'white',
  },
  image: {
    position: 'absolute',
    left: 115,
    top: -45,
    width: windowHeight * 0.18,
    height: windowHeight * 0.17,
    borderRadius: (windowHeight * 0.17) / 1.5,
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
    // zIndex: -1,
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
    // zIndex: -1,
    letterSpacing: 1.7,
  },

  description: {
    color: '#000000',
    ...FONTS.PoppinsLight11,
    fontSize: moderateScale(10, 0.6),
    paddingHorizontal: SIZES.padding * 1.3,
    textAlign: 'center',
  },
});

export default LoginScreen;
