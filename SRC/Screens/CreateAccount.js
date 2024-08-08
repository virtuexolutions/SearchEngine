import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {windowHeight, windowWidth} from '../Utillity/utils';

import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTS, SIZES} from '../Constant/theme';
import ModalComponent from '../Components/ModalComponent';

const CreateAccount = props => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  const [contact, setContact] = useState(false);
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
          <ModalComponent
            isCircle={false}
            isText={true}
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
            setUserName={setCountry}
            username={country}
            setPasswrod={setContact}
            password={contact}
            buttonText={'Continue'}
            isSave={false}
            isScure={false}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CreateAccount;
