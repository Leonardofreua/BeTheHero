import 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/* <StatusBar barStyle="light-content" backgroundColor="#e02041" /> */}
      <Routes />
    </>
  );
}
