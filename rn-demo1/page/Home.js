import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Button as RnButton, WhiteSpace } from 'antd-mobile-rn';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!!!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Button title="跳转到detail页面-测试导航" color="white"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
        <View style={styles.buttonArea}>
          <RnButton>antdesign-button</RnButton>
          <WhiteSpace /><WhiteSpace /><WhiteSpace /><WhiteSpace /><WhiteSpace />
          <RnButton type="primary" onClick={() =>this.props.navigation.navigate('Scroll')}>
            antdesign-button-goScroll
          </RnButton>
        </View>  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b52ae',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color:'white',
    marginTop: 30
  },
  buttonArea: {
    marginTop: 100,
  }
});