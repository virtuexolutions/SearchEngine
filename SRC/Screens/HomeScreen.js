import React, { useState, useEffect } from 'react';
import Color from '../Assets/Utilities/Color';
import {
  requestLocationPermission,
  windowHeight,
  windowWidth,
} from '../Utillity/utils';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, RefreshControl, ScrollView, FlatList } from 'react-native';
import CustomText from '../Components/CustomText';
import { useIsFocused, } from '@react-navigation/native';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';

import { FONTS, SIZES } from '../Constant/theme';
import CustomImage from '../Components/CustomImage';
import { Icon } from 'native-base';
import TextInputWithTitle from '../Components/TextInputWithTitle';

const HomeScreen = ({ 
  navigation
 }) => {
  // const
  // const isFocused = useIsFocused();
  // const navigation = useNavigation();

const [ search,setSearch ] = useState('')

  const dummyArray = [
   {
    id:'1',
    image:require('../Assets/Images/card1.png'),
    heading:"Lorem Ipsum",
    description:"Lorem ipsum dolor sit amet, consectetur adipis cing elit. In eu ante venenatis, volu tpat arcu eu, ege stas lorem. Fusce malesuada qui."
  },
   {
    id:'2',
    image:require('../Assets/Images/man1.png'),
    heading:"Lorem Ipsum",
    description:"Lorem ipsum dolor sit amet, consectetur adipis cing elit. In eu ante venenatis, volu tpat arcu eu, ege stas lorem. Fusce malesuada qui."
  },
  ];
  const dummyArray2 = [
   {
    id:'1',
    image:require('../Assets/Images/card1.png'),
    heading:"Lorem Ipsum",
    description:"orem ipsum dolor sit amet, consectetur adipiscing elit. In eu ante venenatis, volutpat arcu eu, egestas lorem. Fusce malesuada quis velit non dapibus. Quisque sit amet fringilla quam, quis bibendum leo. Donec condimentum et ligula at malesuada. Suspendisse lobortis, ligula vel lacinia consectetur, tortor massa aliquet nisi,"
  },
   {
    id:'2',
    image:require('../Assets/Images/man1.png'),
    heading:"Lorem Ipsum",
    description:"orem ipsum dolor sit amet, consectetur adipiscing elit. In eu ante venenatis, volutpat arcu eu, egestas lorem. Fusce malesuada quis velit non dapibus. Quisque sit amet fringilla quam, quis bibendum leo. Donec condimentum et ligula at malesuada. Suspendisse lobortis, ligula vel lacinia consectetur, tortor massa aliquet nisi,"
  },
  ];

  return (
    
      <ScrollView
        contentContainerStyle={{
          paddingBottom: moderateScale(150, 0.6),
        }}
        showsVerticalScrollIndicator={false}
        style={{
          minHeight: windowHeight,
          backgroundColor: 'white',
        }}>
          <View style={styles.header}>
            <CustomText isBold style={{fontSize:moderateScale(17,0.3)}}>Robert Downey Jr's Search</CustomText>
          </View>
          <View style={styles.search}>
            <TextInputWithTitle
                iconHeigth={windowHeight * 0.00005}
                iconName={'search'}
                iconType={Ionicons}
                // LeftIcon={true}
                
                placeholder={'Search'}
                setText={setSearch}
                value={search}
                viewHeight={0.06}
                viewWidth={0.85}
                inputWidth={0.55}
                rightIcon
                // borderBottomWidth={1}
                color={'#5FDEFA'}
                border={1}
                borderRadius={moderateScale(30, 0.3)}
                backgroundColor={'transparent'}
                borderColor={'#5FDEFA'}
                marginTop={moderateScale(10, 0.3)}
                // color={Color.white}
                placeholderColor={Color.grey}
              />
            </View>
       
      <View style={{width: windowWidth, alignItems:'center'}}>
        <FlatList
        data={dummyArray}
        // keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item, index}) =>{
          return (
            <View key={index} style={styles.card}>
              <View style={styles.imgContainer}>

              <CustomImage source={item.image} style={styles.image}/>
              </View>
              <CustomText isBold style={styles.txt}>{item.heading}</CustomText>
              <CustomText style={styles.desc}>{item.description}</CustomText>
            </View>
          );
        }}  
        />
      </View>
      <View style={styles.recent}>
        <CustomText isBold>Recents</CustomText>
        <Icon as={MaterialIcons} name='filter-list' size={moderateScale(24,0.3)}/>
      </View>
      <View style={{width: windowWidth, alignItems:'center'}}>
        <FlatList
        data={dummyArray2}
        // keyExtractor={item => item.id}
        // numColumns={2}
        renderItem={({item, index}) =>{
          return (
            <View key={index} style={styles.recentCard}>
              <View style={styles.imgContainer_recent}>
              <CustomImage source={item.image} style={styles.image}/>
              </View>
              <CustomText isBold style={[styles.txt, {marginLeft: moderateScale(3,0.3)}]}>{item.heading}</CustomText>
              <CustomText style={[styles.desc, {width: windowWidth * 0.85, fontSize:moderateScale(10,0.3), marginLeft: moderateScale(3,0.3)}]}>{item.description}</CustomText>
            </View>
          );
        }}  
        />
      </View>
      </ScrollView>
    // </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  icon: {
    marginHorizontal: moderateScale(10, 0.3),
  },
  header:{
    width: windowWidth,
    height:windowHeight * 0.1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  Text: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: moderateScale(30, 0.3),
  },
  input: {
    backgroundColor: Color.lightGrey,
    width: windowWidth * 0.9,
    height: windowHeight * 0.16,
    marginVertical: moderateScale(20, 0.3),
    borderRadius: moderateScale(15, 0.3),
    paddingHorizontal: moderateScale(20, 0.3),
  },
  btnText: {
    color: Color.white,
    fontSize: moderateScale(17, 0.3),
  },
  card:{
    width: windowWidth * 0.45,
    paddingHorizontal:moderateScale(13,0.2)
    // backgroundColor:'red'
  },
  imgContainer:{
    width:windowWidth * 0.35,
    height: windowHeight * 0.15,
    overflow:'hidden',
    backgroundColor:'blue',
    borderRadius: moderateScale(10,0.2)
  },
  image:{
    width:'100%',
    height:'100%'
  },
  txt:{
    fontSize:moderateScale(16,0.3),
    color:'black',

  },
  desc:{
    fontSize: moderateScale(10,0.3),
    color:'#000000',
    textAlign:'justify',
    width: windowWidth * 0.35,

  }, 
  recent:{
    width:windowWidth,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:moderateScale(20,0.3),
    marginTop: moderateScale(10,0.3)
  },
  recentCard:{
    width: windowWidth * 0.9,
    // borderColor:'red',
    // borderWidth:1,
    paddingVertical:moderateScale(10,0.2),
    // paddingHorizontal:moderateScale(5,0.4),
    paddingHorizontal:moderateScale(7,0.3),
    marginTop:moderateScale(12,0.3)
  },
  imgContainer_recent:{
    width: windowWidth * 0.85,
    height: windowHeight * 0.25,
    borderRadius: moderateScale(16,0.3),
    overflow:'hidden'

  },
  search:{
    width: windowWidth,
    height:windowHeight * 0.1,
    alignItems:'center',
  }
});

export default HomeScreen;
