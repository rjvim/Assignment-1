import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, Image
} from "react-native";
import global_style from '../Style/GlobalStyle';
import Images from '../Constant/Images';
import Entypo from 'react-native-vector-icons/dist/Entypo';

export default class ToolbarMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={{
        padding: 10,
        backgroundColor: "#3041A7",
        flexDirection: 'row', justifyContent: 'space-between',
      }}>

        <Entypo
          name='menu'
          color='white'
          size={32}
          style={{ alignSelf: 'center', marginLeft: 5 }} />


        <Text
          style={[global_style.Roboto_medium_20, { color: 'white', alignSelf: 'center' }]}>
          {this.props.param_title}
        </Text>

        <Image
          source={Images.bell}
          style={{ alignSelf: 'center' }} />

      </View>
    )
  }
}
