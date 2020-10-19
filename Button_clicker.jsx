import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    count: 0
  }
  clickme() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text}>{this.state.count}</Text>
        </View>

        <Button style={styles.button} onPress={this.clickme.bind(this)} title='sup' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: 'blue',

    // justifyContent: 'center',
    // flexDirection: 'row'
  },
  button: {
    color: 'red',
  }
})