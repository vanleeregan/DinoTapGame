import React, { Component } from 'react';
import {Text, Image, Button, StyleSheet, View} from 'react-native';

export default class ImageRend extends Component {


  render() {
    return (

      < Image source ={require('./red_dino.png')} style={{width: '100%'}} />

      );
  }
}
