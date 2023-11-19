import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const logoImage = require('../assets/logo.png');

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "center"
                }}
                source={logoImage}
            />
        </View>
    </SafeAreaView>
  )
};

export default HomeScreen

const styles = StyleSheet.create({})