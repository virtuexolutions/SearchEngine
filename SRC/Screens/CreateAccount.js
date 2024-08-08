import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet, ToastAndroid} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {windowHeight, windowWidth} from '../Utillity/utils';

import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, SIZES} from '../Constant/theme';
import ModalComponent from '../Components/ModalComponent';

const CreateAccount = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password , setPassword ] = useState('');
  const [contact, setContact] = useState(false);
  const [image, setImage] = useState({});
  const [currFormCompleted, setCurrFormCompleted] = useState(false);
  const [nameFormCompleted, setNameFormCompleted] = useState(false);
  const [changeNameFormCompleted, setChangeNameFormCompleted] = useState(false);
  const [passwordFormCompleted, setPasswordFormCompleted] = useState(false);

  const {user_type} = useSelector(state => state.authReducer);
  console.log(user_type, 'userrtypeeeeee');

  function informationSubmissionHandler (){
    if(country.length > 0 && contact.length > 0){
      setCurrFormCompleted(true);
    }
    else{
      return ToastAndroid.show('Fill required fields.',ToastAndroid.SHORT)
    }
  }

  function nameSubmissionHandler(){
    if(firstName.length > 0 && lastName.length > 0) {
      setNameFormCompleted(true);
    }
    else{
      return ToastAndroid.show('Fill required fields.',ToastAndroid.SHORT)
    }
  }
  function ChangeNameSubmissionHandler(){
    if(firstName.length > 0 && username.length > 0) {
      setChangeNameFormCompleted(true);
    }
    else{
      return ToastAndroid.show('Fill required fields.',ToastAndroid.SHORT)
    }
  }
  function passSubmissionHandler(){
    if(password.length > 7) {
      setPasswordFormCompleted(true);
      return ToastAndroid.show('Account created.',ToastAndroid.SHORT)

    }
    else{
      return ToastAndroid.show('Password should be of 8 characters long..',ToastAndroid.SHORT)
    }
  }

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
       {!currFormCompleted &&   <ModalComponent
            isCircle={false}
            isText={true}
            title={''}
            headingText={'create Account'}
            text={'asdasdasdasdasdasdasdad'}
            placeHolderText1={'Country Name'}
            placeHolderText2={'Phone Number '}
            titleText={'meerab'}
            style={{
              padding:moderateScale(10,.6),
              // backgroundColor: '#5FDEFA',
              width: windowWidth * 0.9,
              height: windowHeight * 0.35,
              borderRadius: moderateScale(35, 0.6),
              borderWidth: 2,
              borderColor: 'white',
            }}
            setFirstFieldValue={setCountry}
            firstFieldValue={country}
            setSecondFieldValue={setContact}
            secondFieldValue={contact}
            buttonText={'Continue'}
            isSave={false}
            isScure={false}
            isfirstPage={true}
            onButtonPress={()=>{
              // if(country.length > 0 && contact.length > 0){
              // }
              // else{
              //   return ToastAndroid.show('Fill required fields.',ToastAndroid.SHORT)
              // }
              setCurrFormCompleted(true);
            }}
          />}
        
       {currFormCompleted && !nameFormCompleted &&   <ModalComponent
            isCircle={true}
            isText={false}
            text={'asdasdasdasdasdasdasdad'}
            placeHolderText1={'First Name'}
            placeHolderText2={'Last Name '}
            titleText={'meerab'}
            style={{
              paddingTop:moderateScale(80,.6),
              // backgroundColor: '#5FDEFA',
              width: windowWidth * 0.9,
              height: windowHeight * 0.35,
              borderRadius: moderateScale(35, 0.6),
              borderWidth: 2,
              borderColor: 'white',
            }}
            setFirstFieldValue={setFirstName}
            firstFieldValue={firstName}
            setSecondFieldValue={setLastName}
            secondFieldValue={lastName}
            buttonText={'Continue'}
            isSave={false}
            isScure={false}
            onButtonPress={()=>{
              // if(firstName.length > 0 && lastName.length > 0) {
              // }
              // else{
              //   return ToastAndroid.show('Fill required fields.',ToastAndroid.SHORT)
              // }
              setNameFormCompleted(true);
            }}

          />}
       {nameFormCompleted && !changeNameFormCompleted &&  <ModalComponent
            isCircle={true}
            isText={false}
            text={'asdasdasdasdasdasdasdad'}
            placeHolderText1={'Change Your Name'}
            placeHolderText2={'Change Your Name'}
            titleText={'meerab'}
            style={{
              paddingTop:moderateScale(80,.6),
              // backgroundColor: '#5FDEFA',
              width: windowWidth * 0.9,
              height: windowHeight * 0.35,
              borderRadius: moderateScale(35, 0.6),
              borderWidth: 2,
              borderColor: 'white',
            }}
            setFirstFieldValue={setFirstName}
            firstFieldValue={firstName}
            setSecondFieldValue={setUserName}
            secondFieldValue={username}
            buttonText={'Continue'}
            isSave={false}
            isScure={false}
            onButtonPress={()=>{
              // if(firstName.length > 0 && username.length > 0) {
              // }
              // else{
              //   return ToastAndroid.show('Fill required fields.',ToastAndroid.SHORT)
              // }
              setChangeNameFormCompleted(true);
            }}

          />}
       {changeNameFormCompleted &&   <ModalComponent
            isCircle={true}
            isText={false}
            fieldTitle2={'Set Your Password'}
            text={'asdasdasdasdasdasdasdad'}
            onlyRequiredPassword={true}
            placeHolderText2={'Set Your Password'}
            titleText={'meerab'}
            style={{
              paddingTop:moderateScale(50,.6),
              // backgroundColor: '#5FDEFA',
              width: windowWidth * 0.9,
              height: windowHeight * 0.31,
              borderRadius: moderateScale(35, 0.6),
              borderWidth: 2,
              borderColor: 'white',
            }}
            setSecondFieldValue={setPassword}
            secondFieldValue={password}
            buttonText={'Finish'}
            isSave={true}
            isScure={true}
            finishPage={true}
            onButtonPress={()=>{
              // if(password.length > 7) {
              //   ToastAndroid.show('Account created.',ToastAndroid.SHORT)
              // }
              // else{
              //   return ToastAndroid.show('Password should be of 8 characters long..',ToastAndroid.SHORT)
              // }
              navigation.navigate('HomeScreen');
              setPasswordFormCompleted(true);
            }}
          />}
        
            
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CreateAccount;
