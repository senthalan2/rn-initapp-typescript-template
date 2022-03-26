import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import {HomeScreenParams} from '../Types/HomeStackParams.types';
import {ROBOTO} from '../Utilities/GlobalFonts';

const Home = ({navigation, route}: HomeScreenParams) => {
  return (
    <>
      <CustomHeader
        paddingHorizontal={15}
        title="Home"
        enableBack={false}
        enableMenu
      />
      <View style={styles.mainContainer}>
        <Text style={{fontFamily: ROBOTO[0]}}>Home Screen</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
