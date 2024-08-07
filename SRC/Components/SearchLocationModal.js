import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { windowHeight, windowWidth } from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import Modal from 'react-native-modal';
import CustomText from './CustomText';
import { moderateScale } from 'react-native-size-matters';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchLocationModal = ({
  isModalVisible,
  setIsModalVisible,
  setLocation,
  locationType,
  setPickupLocation,
  setdropOffLocation,
  onPressCurrentLocation,
  isyourLocation = false
}) => {
  return (
    <Modal
      hasBackdrop={true}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      isVisible={isModalVisible}
      onBackdropPress={() => {
        setIsModalVisible(false);
      }}>
      <View style={styles.maincontainer}>
        <CustomText
          style={{
            color: '#193075',
            marginBottom: moderateScale(10, 0.3),
            fontSize: moderateScale(22, 0.6),
          }}
          isBold>
          Select Location
        </CustomText>
        {locationType == 'pickup' &&
          <TouchableOpacity onPress={onPressCurrentLocation} style={{
            width: windowWidth * 0.8,
            height: windowHeight * 0.05,
            backgroundColor: Color.white,
            paddingHorizontal: moderateScale(10, 0.3),
            marginVertical: moderateScale(12, 0.2),
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <CustomText>Use Your Current Location</CustomText>
          </TouchableOpacity>
        }
        <GooglePlacesAutocomplete
          placeholder="Search"
          textInputProps={{
            placeholderTextColor: '#5d5d5d',
            // value: inputValue,
            // onChangeText: (text) => setInputValue(text),
          }}
          onPress={(data, details = null) => {
            console.log('Location ========>>>>', {
              name: data?.description,
              lat: details?.geometry?.location?.lat,
              lng: details?.geometry?.location?.lng,
            });
            // setInputValue(data?.description)
            locationType == 'pickup' ? setPickupLocation({
              name: data?.description,
              lat: details?.geometry?.location?.lat,
              lng: details?.geometry?.location?.lng,
            }) : setdropOffLocation({
              name: data?.description,
              lat: details?.geometry?.location?.lat,
              lng: details?.geometry?.location?.lng,
            })
            setIsModalVisible(false);
          }}
          query={{
            key: 'AIzaSyCHuiMaFjSnFTQfRmAfTp9nZ9VpTICgNrc',
            language: 'en',
          }}
          isRowScrollable={true}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              width: windowWidth * 0.8,
              marginLeft: moderateScale(5, 0.6),
            },
            textInput: {
              height: windowHeight * 0.06,
              color: '#5d5d5d',
              fontSize: 16,
              borderWidth: 2,
              borderColor: Color.lightGrey,
              borderRadius: moderateScale(20, 0.6),
            },
            listView: {
              width: windowWidth * 0.8,
              marginLeft: moderateScale(5, 0.6),
              borderColor: Color.veryLightGray,
            },

            description: {
              color: 'black',
            },
          }}
        />
      </View>
    </Modal>
  );
};

export default SearchLocationModal;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: Color.white,
    width: windowWidth * 0.9,
    height: windowHeight * 0.8,
    alignItems: 'center',
    borderRadius: moderateScale(20, 0.3),
    paddingVertical: moderateScale(15, 0.3),
    borderWidth: 1,
    borderColor: Color.themeColor,
  },
});
