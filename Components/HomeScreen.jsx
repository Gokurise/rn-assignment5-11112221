import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View >
       <Image source={require("../assets/profile.png")}style={{marginLeft:10, }} />
       <Text>Welcome back,</Text>
       <Text>Eric Atsu</Text>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 screen:{
    flex:1,
    backgroundColor:'white',
 }
})