import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../../components';
import { Logo } from '../../assets';
import { View, Image } from './style';

const Home: React.FC = () => (
  <Screen>
    <View>
      <Image source={Logo} />
      <Text>React Native Boilerplate</Text>
      <Text>A React Native structure made by CITi.</Text>
    </View>
  </Screen>
);

export default Home;
