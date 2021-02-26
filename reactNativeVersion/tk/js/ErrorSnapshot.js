import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from './Styles.js';
import DiagFormatter from './DiagFormatter';
import Tractor from './TractorImg.js';

class ErrorSnapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
  }
  
  componentDidMount() {
    this.updateData();
  }

  fetchData() {
    let x = [
      {
        status: 0,
        catTitle: "1/24/18",
        time: "9:45 AM",
        group: [
            {
                title: "G28",
                value: "Unresponsive intake valve",
            },
            {
                title: "F128",
                value: "Oil change needed",
            }
        ]
      },
      {
        status: 1,
        catTitle: "10/24/17",
        time: "10:23 PM",
        group: [
            {
                title: "G28",
                value: "Unresponsive intake valve",
            },
            {
                title: "F128",
                value: "Oil change needed",
            }
        ]
      },
      {
        status: 1,
        catTitle: "10/24/16",
        time: "7:23 PM",
        group: []
      }
    ];
    
    return x;
  }
  
  updateData() {
    let received = this.fetchData();
    
    this.setState({
      data : received
    });
  }
  
  render() {
    return (
      <View>
        <View>
            <Button title = "<"
                    onPress = {() => {this.props.changeAppState('connected')}}
            />
            <Text style = {styles.title}> Vehicle History </Text>
            <Tractor />
        </View>
        <Button title = "Disconnect"
                onPress = {() => {this.props.changeAppState('splash')}}
        />
        <DiagFormatter data = {this.state.data} />
      </View>
    );
  }
}

export default ErrorSnapshot;