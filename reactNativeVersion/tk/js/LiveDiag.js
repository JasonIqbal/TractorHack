import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import styles from './Styles.js';
import DiagFormatter from './DiagFormatter';
import Tractor from './TractorImg.js';

class LiveDiag extends React.Component {
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
    let x =
      {
        vehicleSpeed : "0",
        engineTemp : "195",
        fuel : "45",
        oilLevel : "87",
        rpm : "540",
        exhaustTemp : "145",
        load : "90",
        armPosition : "up",
        trailerPosition : "20",
        wheelRotation : "Locked",
        spray1 : "Off"
      };
    
    return x;
  }
  
  updateData() {
    let received = this.fetchData();
    
    this.setState({
      data : [
        {
          catTitle : "General",
          group : [
            {
              title : "Vehicle Speed", 
              value : received.vehicleSpeed
            },
            {
              title : "Engine Temp",
              value : received.engineTemp
            },
            {
              title : "Fuel Level",
              value : received.fuel
            }
          ]
        },
        {
          catTitle : "Engine",
          group : [
            {
              title : "Oil Level",
              value : received.oilLevel
            }, 
            {
              title : "RPM",
              value : received.rpm
            },
            {
              title : "Exhaust Temp",
              value : received.exhaustTemp
            },
            {
              title : "Load",
              value : received.load
            }
          ]
        },
        {
          catTitle : "Controls",
          group : [
            {
              title : "Arm Position",
              value : received.armPosition
            },
            {
              title : "Trailer Position",
              value : received.trailerPosition
            }, 
            {
              title : "Wheel Rotation",
              value : received.wheelRotation
            },
            {            
              title : "Spray 1",
              value : received.spray1
            }
          ]
        }
      ]
    });
  }
  
  render() {
    return (
      <View>
        <Text style = {styles.title}> Live Diagnostic Data </Text>
        <Tractor />
        <Button title = "Disconnect"
                onPress = {() => {this.props.changeAppState('splash')}}
        />
        <DiagFormatter data = {this.state.data} />
      </View>
    );
  }
}

export default LiveDiag;