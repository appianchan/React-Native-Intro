import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Switch_Now from './components/Untitled_file'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      switch_counter: false,
      label: 'false'
    }
    this.switchme = this.switchme.bind(this);
  }
  clickme() {
    this.setState({ count: this.state.count + 1 })
  }

  switchme() {
    if (this.state.switch_counter === false) {
      this.setState({ switch_counter: true, label: 'true' })
    } else {
      this.setState({ switch_counter: false, label: 'false' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text} onPress={this.clickme.bind(this)}>{this.state.count}</Text>
          <Text style={styles.text}>{this.state.label} </Text>
        </View>
        <View style={styles.the_switch}>
          <Switch_Now turn_dial={this.switchme} switch_value={this.state.switch_counter} />
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
  },
  the_switch: {
    alignItems: 'center',
    marginRight: '200px',
    marginTop: '10px',
    marginBottom: '10px'
  }
})