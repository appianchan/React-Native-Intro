import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    count: 0
  }
  clickme(){
    this.setState({count: this.state.count + 1})
  }

  render(){
    return(
      <View>
        {this.state.count}
        <Button onPress={this.clickme.bind(this)}/>
      </View>
    )
  }
}