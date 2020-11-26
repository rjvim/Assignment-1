import React, { Component } from 'react';
import {
  Text, TextInput, StyleSheet,
  SafeAreaView, StatusBar,
} from 'react-native';
import Routes from './src/Routes/Routes';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }

    /*For Text disable system font scaling*/
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = true;

  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.bottomSafeArea}>
          <StatusBar backgroundColor={'white'} barStyle='dark-content' />
          <Routes />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'white'
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: 'white'
  },

});