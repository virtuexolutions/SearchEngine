import React, { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch } from 'react-redux';
// import {StripeProvider} from '@stripe/stripe-react-native';
import { NativeBaseProvider } from 'native-base';
import { store, persistor } from './SRC/Store/index';
import {
  requestCameraPermission,
  requestLocationPermission,
  requestWritePermission,
} from './SRC/Utillity/utils';
import SplashScreen from './SRC/Screens/SplashScreen';

import LoginScreen from './SRC/Screens/LoginScreen';
import HomeScreen from './SRC/Screens/HomeScreen';
import ChooseSearchEngineType from './SRC/Screens/ChooseSearchEngineType';


const App = () => {

  console.reportErrorsAsExceptions = false;
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <MainContainer />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

const MainContainer = () => {
  useEffect(() => {
    async function GetPermission() {
      await requestCameraPermission();
      // await requestWritePermission();
    
    }
    GetPermission();
  }, []);

  const [isloading] = useloader(true);
  if (isloading == true) {
    return <SplashScreen />;
  }
  // return <AppNavigator />
  // return <EditProfile />
  // return <LoginScreen/>
  // return <HomeScreen/>
  return <ChooseSearchEngineType/>
};

const useloader = value => {
  const [isloading, setIsloading] = useState(value);
  const [loadingTime] = useState(5000);
  useEffect(() => {
    setTimeout(() => setIsloading(false), loadingTime);
  }, []);
  return [isloading];
};
export default App;
