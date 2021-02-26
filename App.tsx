import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView } from 'react-native';

import BottomTabs from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}
