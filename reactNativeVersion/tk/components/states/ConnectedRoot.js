import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../ui/Styles.js';
import Tractor from '../ui/TractorImg.js';


class ConnectedRoot extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View>
        <Text style = {styles.title}> Connected </Text>
        <Tractor />
        <View style = {styles.padded}>
          <Button title = "Disconnect"
                  onPress = {() => {this.props.changeAppState('splash')}}
          />
        </View>
        <View style = {styles.padded}>
          <Button title = "Live Diag Data"
                  onPress = {() => {this.props.changeAppState('live')}}
          />
        </View>
        <View style = {styles.padded}>
          <Button title = "Diagnostic History"
                  onPress = {() => {this.props.changeAppState('errorsnap')}}
          />
        </View>
      </View>
    );
  }
}

export default ConnectedRoot;