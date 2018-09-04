import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {

    const params = this.props.navigation.state.params;
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>params对象: {JSON.stringify(params)}</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again, 不会触发"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Details... again, 继续触发push"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}


