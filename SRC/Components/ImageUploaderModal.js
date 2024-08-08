import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  I18nManager,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  Alert,
  // Modal,
  Button,
} from 'react-native';
import {moderateScale, moderateVerticalScale, ScaledSheet} from 'react-native-size-matters';
import {Icon} from 'native-base';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomText from './CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import CustomImage from './CustomImage';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message:
          'App needs access to your camera ' +
          'so you can take awesome pictures.',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    } else {
    }
  } catch (err) {
    console.warn(err);
  }
};

const ImageUploaderModal = props => {
  let {show, setShow, setFileObject, setMultiImages, crop} = props;

  const [imagePreview, setImagePreview] = useState({})
  console.log("🚀 ~ ImageUploaderModal ~ imagePreview:", imagePreview)
  const openGallery = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quailty: 0.9,
      saveToPhotos: true,
    };
   
    launchImageLibrary(options, response => {
            if (Platform.OS === 'ios') {
              setShow(false);
            }
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
              alert(response.customButton);
            } else { 
              setImagePreview({
                uri: response?.assets[0]?.uri,
                type: response?.assets[0]?.type,
                name: response?.assets[0]?.fileName,
              })


              setFileObject &&
                setFileObject({
                  uri: response?.assets[0]?.uri,
                  type: response?.assets[0]?.type,
                  name: response?.assets[0]?.fileName,
                });

              setMultiImages &&
                setMultiImages(x => [
                  ...x,
                  {
                    uri: response?.assets[0]?.uri,
                    type: response?.assets[0]?.type,
                    name: response?.assets[0]?.fileName,
                  },
                ]);
            }
          });
    // }
  };

  const openCamera = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quailty: 0.9,
      saveToPhotos: true,
    };
    if (Platform.OS === 'android') {
      if (PermissionsAndroid.PERMISSIONS.CAMERA) {
      } else {
        await requestCameraPermission();
      }
    }
    launchCamera(options, response => {
      if (Platform.OS == 'ios') {
        setShow(false);
      }
      
      else {
        setFileObject &&
          setFileObject({
            uri: response?.assets[0]?.uri,
            type: response?.assets[0]?.type,
            name: response?.assets[0]?.fileName,
          });

        setMultiImages &&
          setMultiImages(x => [
            ...x,
            {
              uri: response?.assets[0]?.uri,
              type: response?.assets[0]?.type,
              name: response?.assets[0]?.fileName,
            },
          ]);
      }
    });
  };

  return (
    <Modal
      isVisible={show}
      swipeDirection="up"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Color.white,
      }}
      onBackdropPress={() => {
        setShow(false);
      }}>
      <LinearGradient
       colors={ ['#5FDEFA', '#1A75EF']}  start={{x: 0.5, y: 1}} end={{x: 0.7, y: 0.7}}
        style={{
          backgroundColor: Color.white,
          height: Dimensions.get('window').height * 0.33,
          width: Dimensions.get('window').width * 0.8,
          alignItems:'center',
          paddingHorizontal: moderateScale(10, 0.3),
          paddingVertical: moderateScale(10, 0.3),
          borderRadius: Dimensions.get('window').width * 0.05,
        }}>
        <CustomText isBold style={styles.modalHead}>Upload</CustomText>
        <TouchableOpacity style={styles.modalContentContianer} onPress={()=>{
                          if (Platform.OS === 'android') {
                            // setShow(false);
                          }
                          openGallery();
          }}>
          {/* <TouchableOpacity
            onPress={() => {
              if (Platform.OS === 'android') {
                setShow(false);
              }
              openGallery();
            }}
            style={styles.modalContentBtn}>
            <Icon
              name={'folder-images'}
              as={Entypo}
              size={moderateScale(25, 0.3)}
              style={{
                color: Color.white,
              }}
            />
            <CustomText style={styles.modalBtnText}>Gallery</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS === 'android') {
                setShow(false);
              }
              openCamera();
            }}
            style={styles.modalContentBtn}>
            <Icon
              name={'camera'}
              as={FontAwesome5}
              size={moderateScale(25, 0.3)}
              style={{
                color: Color.white,
              }}
            />
            <CustomText style={styles.modalBtnText}>Camera</CustomText>
          </TouchableOpacity> */}
      { Object.keys(imagePreview).length > 0 ?    <CustomImage onPress={()=>{
                if (Platform.OS === "android") {
                  setShow(false);
                }
                openGallery();

          }}
          style={{width:windowHeight * 0.2, height: windowHeight * 0.2}}
          source={
             {uri: imagePreview?.uri} 
            // require('../Assets/Images/upload.png')
          }/> 
          :    <CustomImage onPress={()=>{
            if (Platform.OS === "android") {
              // setShow(false);
            }
            openGallery();

      }}
      source={
        //  {uri: imagePreview?.uri} :
        require('../Assets/Images/upload.png')}/>
          }
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShow(false)}
          style={styles.modalSubmitBtn}>
          <CustomText style={styles.modalBtnText}>Submit</CustomText>
        </TouchableOpacity>
      </LinearGradient>
      {/* <View
        style={{
          // flex: 1,
          backgroundColor: Color.black,
          height: Dimensions.get("window").height * 0.33,
          width: Dimensions.get("window").width * 0.8,
          paddingHorizontal: moderateScale(10, 0.3),
          paddingVertical: moderateScale(10, 0.3),
          borderRadius: Dimensions.get("window").width * 0.02,
        }}
      >
        <CustomText style={styles.modalHead}>Upload picture</CustomText>
        <View style={styles.modalContentContianer}>
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS === "android") {
                setShow(false);
              }
              openGallery();
            }}
            style={styles.modalContentBtn}
          >
            <Icon
              name={"folder-images"}
              as={Entypo}
              size={moderateScale(25, 0.3)}
              style={{
                color: Color.black,
              }}
            />
            <CustomText style={styles.modalBtnText}>Gallery</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS === "android") {
                setShow(false);
              }
              openCamera();
            }}
            style={styles.modalContentBtn}
          >
            <Icon
              name={"camera"}
              as={FontAwesome5}
              size={moderateScale(25, 0.3)}
              style={{
                color: Color.black,
              }}
            />
            <CustomText style={styles.modalBtnText}>Camera</CustomText>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setShow(false)}
          style={styles.modalCancelBtn}
        >
          <CustomText style={styles.modalBtnText}>Cancel</CustomText>
        </TouchableOpacity>
      </View> */}
    </Modal>
  );
};

const styles = ScaledSheet.create({
  modalHead: {
    fontSize: moderateScale(20, 0.3),
    fontWeight: 'bold',
    color:'white',
    marginBottom: moderateScale(7.5, 0.3),
  },
  modalContentContianer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: moderateScale(24,0.4),
    height: windowHeight * 0.21,
    width: windowWidth * 0.7,
    backgroundColor:Color.white
  },
  modalContentBtn: {
    backgroundColor: Color.themeColor,
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.08,
    paddingVertical: windowHeight * 0.02,
    borderRadius: 15,
  },
  modalBtnText: {
    // fontWeight: 'bold',
    color: Color.black,
    fontSize: moderateScale(18, 0.3),
  },
  modalSubmitBtn: {
    backgroundColor: Color.white,
    paddingVertical: moderateScale(15,0.2),
    // paddingHorizontal:moderateScale(3,0.2),
    width: windowWidth * 0.35,
    alignItems: 'center',
    position:'absolute',
    bottom: -20,
    // alignSelf: 'flex-end',
    marginTop: moderateScale(10, 0.3),
    borderRadius: moderateScale(35, 0.3),
    elevation:10,
  },
});

export default ImageUploaderModal;
