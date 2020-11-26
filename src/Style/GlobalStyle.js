import React, { Component } from "react";
import { StyleSheet, Dimensions, } from "react-native";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },

  cards: {
    padding: 20,
    backgroundColor: "#ffffff",
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 6,
  },

  /////////////////fonts //////////////

  Roboto_Bold_white12: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 12
  },
  Roboto_Bold_white13: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 13
  },
  Roboto_Bold_white14: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 14
  },
  Roboto_Bold_white15: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 15
  },

  Roboto_Bold_white16: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 16
  },
  Roboto_Bold_white17: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 17
  },
  Roboto_Bold_white18: {
    color: "#000",
    fontFamily: "roboto-bold",
    fontSize: 18
  },
  Roboto_Bold_white19: {
    color: "#000",
    fontFamily: "roboto-bold",
    fontSize: 19
  },
  Roboto_Bold_white20: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 20
  },

  Roboto_Bold_white22: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 22
  },
  Roboto_Bold_23: {
    color: "#353535",
    fontFamily: "roboto-bold",
    fontSize: 23
  },
  Roboto_Bold_white24: {
    color: "#fff",
    fontFamily: "roboto-bold",
    fontSize: 24
  },


  Roboto_Semibold_12: {
    color: "#353535",
    fontFamily: "roboto-black",
    fontSize: 12
  },
  Roboto_Semibold_14: {
    color: "#353535",
    fontFamily: "roboto-black",
    fontSize: 14
  },
  Roboto_Semibold_16: {
    color: "#353535",
    fontFamily: "roboto-black",
    fontSize: 16
  },
  Roboto_Semibold_18: {
    color: "#353535",
    fontFamily: "roboto-black",
    fontSize: 18
  },
  Roboto_Semibold_20: {
    color: "#353535",
    fontFamily: "roboto-black",
    fontSize: 20
  },
  Roboto_Semibold_22: {
    color: "#353535",
    fontFamily: "roboto-black",
    fontSize: 22
  },
  Roboto_Semibold_24: {
    color: "#353535",
    fontFamily: "roboto-black",
    fontSize: 24
  },


  Roboto_medium_12: {
    color: "#353535",
    fontFamily: "roboto-medium",
    fontSize: 12
  },
  Roboto_medium_14: {
    color: "#353535",
    fontFamily: "roboto-medium",
    fontSize: 14
  },
  Roboto_medium_16: {
    color: "#353535",
    fontFamily: "roboto-medium",
    fontSize: 16
  },
  Roboto_medium_18: {
    color: "#353535",
    fontFamily: "roboto-medium",
    fontSize: 18
  },
  Roboto_medium_20: {
    color: "#353535",
    fontFamily: "roboto-medium",
    fontSize: 20
  },
  Roboto_medium_22: {
    color: "#353535",
    fontFamily: "roboto-medium",
    fontSize: 22
  },
  Roboto_medium_24: {
    color: "#353535",
    fontFamily: "roboto-medium",
    fontSize: 24
  },

  Roboto_regular_12: {
    color: "#353535",
    fontFamily: "roboto-regular",
    fontSize: 12
  },
  Roboto_regular_14: {
    color: "#353535",
    fontFamily: "roboto-regular",
    fontSize: 14
  },
  Roboto_regular_16: {
    color: "#353535",
    fontFamily: "roboto-regular",
    fontSize: 16
  },
  Roboto_regular_18: {
    color: "#353535",
    fontFamily: "roboto-regular",
    fontSize: 18
  },
  Roboto_regular_20: {
    color: "#353535",
    fontFamily: "roboto-regular",
    fontSize: 20
  },
  Roboto_regular_22: {
    color: "#353535",
    fontFamily: "roboto-regular",
    fontSize: 22
  },


  toolbar_cards: {
    padding: 15,
    backgroundColor: "#3041A7",
    flexDirection: 'row', justifyContent: 'space-between',

  },

  footer_style: {
    backgroundColor: "#f8f8f8",
  },

  global_card: {
    margin: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 18,
    flex: 1,
    shadowOpacity: 4,
    shadowColor: '#000',
    shadowOffset: { width: 50, height: 50 },
    shadowRadius: 4,
    elevation: 4,
  },
  connectionStatus: {
    width: "100%",
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row'
  },

});