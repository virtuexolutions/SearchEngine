import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../Components/CustomText';
import {Checkbox, Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageUploaderModal from '../Components/ImageUploaderModal';

const ChooseSearchEngineType = () => {
  const [activeTab, setActiveTab] = useState('Patner');
  const [search, setSearch] = useState('');
  const [imageUploadVisible, setImageUploadVisible] = useState(false);
  const [permission, setPermission] = useState('')

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: moderateScale(150, 0.6),
          alignItems: 'center',
          //   justifyContent:'center'
          paddingTop: moderateScale(12, 0.3),
        }}
        showsVerticalScrollIndicator={false}
        style={{
          minHeight: windowHeight,
          backgroundColor: 'white',
        }}>
        <View style={styles.form}>
          <View style={styles.tabs}>
            <LinearGradient
              style={[
                styles.tabButton,
                activeTab == 'PSE' && {
                  width: windowWidth * 0.28,
                },
                // {
                //     width:
                //     activeTab == 'Patner'
                //       ? windowWidth * 0.32
                //       : windowWidth * 0.28,
                //     },
              ]}
              colors={
                activeTab == 'Patner'
                  ? ['#5FDEFA', '#1A75EF']
                  : ['white', 'white']
              }>
              <TouchableOpacity
                onPress={() => {
                  setActiveTab('Patner');
                }}>
                <CustomText
                  isBold={activeTab == 'Patner'}
                  style={[
                    styles.tabBtnTxt,

                    activeTab !== 'Patner' && {
                      color: 'black',
                    },
                  ]}>
                  Patner
                </CustomText>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={[
                styles.tabButton,
                activeTab == 'PSE' && {
                  width: windowWidth * 0.32,
                },
              ]}
              colors={
                activeTab == 'PSE' ? ['#5FDEFA', '#1A75EF'] : ['white', 'white']
              }>
              <TouchableOpacity
                onPress={() => {
                  setActiveTab('PSE');
                }}>
                <CustomText
                  isBold={activeTab == 'PSE'}
                  style={[
                    styles.tabBtnTxt,
                    activeTab !== 'PSE' && {
                      color: 'black',
                    },
                  ]}>
                  Visit Your PSE
                </CustomText>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <TextInputWithTitle
            // iconHeigth={windowHeight * 0.00005}
            // iconName={'search'}
            // iconType={Ionicons}
            // LeftIcon={true}
            title={'Total Revenue'}
            titleColor={'black'}
            placeholder={'Search'}
            setText={setSearch}
            value={search}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.55}
            // rightIcon
            // borderBottomWidth={1}
            color={'#5FDEFA'}
            border={1}
            borderRadius={moderateScale(30, 0.3)}
            backgroundColor={'transparent'}
            borderColor={'#5FDEFA'}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.grey}
          />
          <TextInputWithTitle
            // iconHeigth={windowHeight * 0.00005}
            // iconName={'search'}
            // iconType={Ionicons}
            // LeftIcon={true}
            title={'Total Revenue'}
            titleColor={'black'}
            placeholder={'Total Revenue'}
            setText={setSearch}
            value={search}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.55}
            // rightIcon
            // borderBottomWidth={1}
            color={'#5FDEFA'}
            border={1}
            borderRadius={moderateScale(30, 0.3)}
            backgroundColor={'transparent'}
            borderColor={'#5FDEFA'}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.grey}
          />
          <TextInputWithTitle
            // iconHeigth={windowHeight * 0.00005}
            // iconName={'search'}
            // iconType={Ionicons}
            // LeftIcon={true}
            title={'Year To Date'}
            titleColor={'black'}
            placeholder={'Year To Date'}
            setText={setSearch}
            value={search}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.55}
            // rightIcon
            // borderBottomWidth={1}
            color={'#5FDEFA'}
            border={1}
            borderRadius={moderateScale(30, 0.3)}
            backgroundColor={'transparent'}
            borderColor={'#5FDEFA'}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.grey}
          />
          <TextInputWithTitle
            // iconHeigth={windowHeight * 0.00005}
            // iconName={'search'}
            // iconType={Ionicons}
            // LeftIcon={true}
            title={'MTD'}
            titleColor={'black'}
            placeholder={'MTD'}
            setText={setSearch}
            value={search}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.55}
            // rightIcon
            // borderBottomWidth={1}
            color={'#5FDEFA'}
            border={1}
            borderRadius={moderateScale(30, 0.3)}
            backgroundColor={'transparent'}
            borderColor={'#5FDEFA'}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.grey}
          />
          <TextInputWithTitle
            // iconHeigth={windowHeight * 0.00005}
            // iconName={'search'}
            // iconType={Ionicons}
            // LeftIcon={true}
            title={'Today'}
            titleColor={'black'}
            placeholder={'Search'}
            setText={setSearch}
            value={search}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.55}
            // rightIcon
            // borderBottomWidth={1}
            color={'#5FDEFA'}
            border={1}
            borderRadius={moderateScale(30, 0.3)}
            backgroundColor={'transparent'}
            borderColor={'#5FDEFA'}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.grey}
          />
        </View>
        <View style={styles.permissionContainer}>
          <View style={styles.row}>
            <CustomText isBold>Admin Permission:</CustomText>
            <CustomText isBold>ON / OFF</CustomText>
          </View>
          <View style={styles.row}>
            <CustomText>01: Personal Asset</CustomText>
            <View style={styles.checkboxContainer}>
            <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                color={'#2C9FED'}
                borderColor={'#62b4eb'}
                // defaultIsChecked
              />
              <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                // defaultIsChecked
                color={'#2C9FED'}
                borderColor={'#62b4eb'}

              />
            </View>
          </View>
          <View style={styles.row}>
            <CustomText>02: Pubucist</CustomText>
            <View style={styles.checkboxContainer}>
            <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                color={'#2C9FED'}
                borderColor={'#62b4eb'}
                // defaultIsChecked
              />
              <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                // defaultIsChecked
                color={'#2C9FED'}
                borderColor={'#62b4eb'}

              />
            </View>
          </View>
          <View style={styles.row}>
            <CustomText>03: Life</CustomText>
            <View style={styles.checkboxContainer}>
            <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                color={'#2C9FED'}
                borderColor={'#62b4eb'}
                // defaultIsChecked
              />
              <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                // defaultIsChecked
                borderColor={'#62b4eb'}
                color={'#2C9FED'}

              />
            </View>
          </View>
          <View style={styles.row}>
            <CustomText>04: Kids</CustomText>
            <View style={styles.checkboxContainer}>
            <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                color={'#2C9FED'}
                borderColor={'#62b4eb'}
                // defaultIsChecked
              />
              <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                // defaultIsChecked
                color={'#2C9FED'}
                borderColor={'#62b4eb'}
              />
            </View>
          </View>
          <View style={styles.row}>
            <CustomText>06: Best Friend #02</CustomText>
            <View style={styles.checkboxContainer}>
            {/* <Checkbox.Group mt="2" colorScheme="#2C9FED" defaultValue={permission} accessibilityLabel="choose multiple items" onChange={values => {
          setPermission(values || []);
        }} alignItems="flex-start"> */}
            <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                color={'#2C9FED'}
                borderColor={'#65b8ef'}
              />
              <Checkbox
                value={permission}
                onChange={setPermission}
                accessibilityLabel="This is a dummy checkbox"
                color={'#2C9FED'}
                borderColor={'#62b4eb'}
              />
              {/* </Checkbox.Group> */}
            </View>
          </View>
        </View>
        <TouchableOpacity
        onPress={()=>{
            setImageUploadVisible(true)
        }}
        >
          <LinearGradient
            style={styles.btn}
            colors={['#5FDEFA', '#1A75EF']}
            start={{x: -0.4, y: 0.3}}
            end={{x: 0.7, y: -0.8}}>
            <Icon
              as={AntDesign}
              name="plus"
              style={styles.icon}
              size={moderateScale(20, 0.3)}
            />
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
      <ImageUploaderModal show={imageUploadVisible} setShow={setImageUploadVisible}/>
    </>
  );
};

export default ChooseSearchEngineType;

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    width: windowWidth * 0.9,
    borderColor: '#5FDEFA',
    borderWidth: 1,
    borderRadius: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(16, 0.3),
    marginTop: moderateScale(30, 0.3),
    paddingVertical: moderateScale(20, 0.2),
  },
  tabBtnTxt: {
    fontSize: moderateScale(14, 0.3),
    color: 'white',
  },
  tabs: {
    width: windowWidth * 0.6,
    // height:windowHeight * 0.05,
    borderColor: '#5FDEFA',
    borderWidth: 1,
    borderRadius: moderateScale(25, 0.3),
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    left: moderateScale(60, 0.2),
    top: moderateScale(-20, 0.4),
  },
  tabButton: {
    width: windowWidth * 0.3,
    borderRadius: moderateScale(24, 0.3),
    paddingHorizontal: moderateScale(12, 0.3),
    paddingVertical: moderateScale(12, 0.3),
    alignItems: 'center',
  },
  permissionContainer: {
    alignItems: 'center',
    width: windowWidth * 0.9,
    borderColor: '#5FDEFA',
    borderWidth: 1,
    borderRadius: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(16, 0.3),
    marginTop: moderateScale(12, 0.3),
    paddingVertical: moderateScale(10, 0.3),
  },
  row: {
    width: windowWidth * 0.75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(6, 0.3),
    paddingVertical: moderateScale(4, 0.3),
  },
  checkboxContainer:{
    flexDirection:'row',
    gap:moderateScale(12,0.2)
  },
  btn: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: (windowWidth * 0.12) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute',
    top: moderateScale(15, 0.3),
    left: moderateScale(100, 0.3),
  },
  icon: {
    color: 'white',
  },
});
