import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Button, WhiteSpace, DatePicker, List } from 'antd-mobile-rn';

export default class ScrollScreen extends React.Component {
  static navigationOptions = {
    title: 'Scroll',
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Scroll Screen</Text>
        <WhiteSpace />
        <Button>default</Button>
        <WhiteSpace />
        <Button disabled>default disabled</Button>
        
        <WhiteSpace />
        <Button type="primary">primary</Button>
        <WhiteSpace />
        <Button type="primary" disabled>primary disabled
        </Button>
        
        <WhiteSpace />
        <Button type="warning">warning</Button>
        <WhiteSpace />
        <Button type="warning" disabled>
          warning disabled
        </Button>
        <WhiteSpace />

        <Button loading>loading button</Button>

        <Button activeStyle={false}>无点击反馈</Button><WhiteSpace />
        <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace />

        <Button type="ghost">ghost</Button>
        <Button type="ghost" disabled>ghost disabled</Button>
        <Button type="ghost" size="small">ghost</Button>

        <List style={styles.list}>
          <DatePicker
            mode="date"
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            onChange={this.onChange}
            format="YYYY-MM-DD"
          >
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    backgroundColor: '#6b52ae',
  },
  title: {
    fontSize: 20,
    color:'white',
    marginTop: 30
  },
  list: {
    marginVertical: 300,
  }

});