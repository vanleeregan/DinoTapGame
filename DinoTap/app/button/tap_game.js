import React, { Component } from 'react'
import { Button,StyleSheet, View } from 'react-native'


const DinoTap = () => {
  style = {styles.container}
   const handlePress = () => false
   return (
      <Button
         onPress = {handlePress}
         title = "Red button!"
         color = "red"
      />
   )
    </View>
}
export default DinoTap

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 50
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
   }
})
