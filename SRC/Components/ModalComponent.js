import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {windowHeight, windowWidth} from '../Utillity/utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, SIZES} from '../Constant/theme';
import {Icon} from 'native-base';
import {color} from 'native-base/lib/typescript/theme/styled-system';

const ModalComponent = ({
  password,
  setPassword,
  username,
  setUserName,
  fieldTitle2,
  style,
  isCircle,
  isText,
  placeHolderText1,
  placeHolderText2,
  titleText,
  isSave,
  buttonText,
  isScure,
  onButtonPress,
  headingText,
  firstFieldValue,
  setFirstFieldValue,
  secondFieldValue,
  setSecondFieldValue,
  text,
  finishPage,
  isfirstPage,
  onlyRequiredPassword,
}) => {
  console.log('🚀 ~ titleText:', titleText);
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#9ae7ff', '#76c2ff', '#64c0ff']}
      //  colors={['#00C6FF', '#0072FF']}
      style={[styles.Card, style && style]}>
      {isCircle && (
        <View style={styles.image}>
          <CustomText isBold style={styles.txt}>
            SL
          </CustomText>
        </View>
      )}
      <View
        style={{
          width: '100%',
          //   paddingTop: windowHeight * 0.12,
          alignItems: 'center',
          height: '100%',
        }}>
        {isText && (
          <>
            <CustomText isBold style={styles.heading}>
              {headingText}
            </CustomText>
            <CustomText style={styles.description} numberOfLines={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              suscipit gravida tellus, eu ullamcorper.
            </CustomText>
          </>
        )}
        <View
          style={{
            alignItems: 'center',
            marginTop: moderateScale(20, 0.3),
          }}>
          {!onlyRequiredPassword && (
            <TextInputWithTitle
              iconHeigth={windowHeight * 0.00005}
              titleText={titleText ? titleText : 'Username'}
              placeholder={
                placeHolderText1
                  ? placeHolderText1
                  : 'Username, Email or Phone Number'
              }
              // setText={setUserName}
              // value={username}
              setText={setFirstFieldValue}
              value={firstFieldValue}
              viewHeight={0.06}
              viewWidth={0.8}
              inputWidth={0.55}
              borderRadius={moderateScale(30, 0.3)}
              backgroundColor={'white'}
              borderColor={Color.black}
              marginTop={moderateScale(10, 0.3)}
              color={Color.black}
              placeholderColor={Color.mediumGray}
            />
          )}
          <TextInputWithTitle
            iconHeigth={windowHeight * 0.00005}
            RightIcon={true}
            title={fieldTitle2}
            titleColor={'black'}
            placeholder={placeHolderText2 ? placeHolderText2 : 'Password'}
            // setText={setPassword}
            // value={password}
            setText={setSecondFieldValue}
            value={secondFieldValue}
            secureText={isScure ? true : false}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.55}
            borderRadius={moderateScale(30, 0.3)}
            backgroundColor={'white'}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.mediumGray}
          />
          {/* <CustomText style={styles.txt2}>Forgot Password?</CustomText> */}

          {isSave && (
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth * 0.8,
                paddingVertical: moderateScale(5, 0.6),
                paddingHorizontal: moderateScale(15, 0.6),
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 3,
                  height: windowHeight * 0.02,
                  width: windowWidth * 0.04,
                  borderWidth: 1,
                  borderColor: Color.darkGray,
                }}>
                <Icon
                  name="check"
                  as={FontAwesome}
                  size={moderateScale(12, 0.6)}
                  color={Color.green}
                />
              </TouchableOpacity>
              <CustomText style={styles.txt4}>Save being Info</CustomText>
            </View>
          )}
          <View style={{marginTop: SIZES.padding * 1.6}} />
          <CustomButton
            onPress={onButtonPress}
            text={buttonText ? buttonText : 'X'}
            fontSize={moderateScale(15, 0.3)}
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
        {!finishPage && (
          <CustomText
            style={[
              styles.txt3,
              !isfirstPage && {
                fontSize: moderateScale(8, 0.3),
                width: windowWidth * 0.6,
              },
            ]}>
            {isfirstPage
              ? 'We Will Send SMS Verification Code'
              : 'By creating an account with us, you certify you have read and accepted the Privacy Policy and Terms and Conditions'}
          </CustomText>
        )}
        {isfirstPage && (
          <TouchableOpacity style={styles.btn}>
            <CustomText style={styles.txt3}>user email</CustomText>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  Card: {
    // backgroundColor: '#5FDEFA',
    width: windowWidth * 0.9,
    height: windowHeight * 0.49,
    borderRadius: moderateScale(35, 0.6),
    borderWidth: 2,
    borderColor: 'white',
  },
  description: {
    color: '#000000',
    ...FONTS.Regular11,
    // ...FONTS.PoppinsLight11,
    fontSize: moderateScale(10, 0.6),
    paddingHorizontal: SIZES.padding * 1.3,
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    left: 115,
    top: -55,
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
    fontSize: moderateScale(13, 0.6),
    textTransform: 'capitalize',
    textAlign: 'center',
    width: windowWidth * 0.73,
    paddingVertical: moderateScale(5, 0.6),
  },
  txt4: {
    color: 'black',
    fontSize: moderateScale(11, 0.6),
    textTransform: 'capitalize',
    // textAlign: 'center',
    width: windowWidth * 0.73,
    paddingHorizontal: moderateScale(8, 0.6),
  },
  btn: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.3,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScale(10, 0.3),
  },

  heading: {
    color: '#000000',
    fontSize: moderateScale(30, 0.6),
    // zIndex: -1,
    letterSpacing: 1.7,
    ...FONTS.Bold26,
  },
});
