import React from 'react';
import {Image, Pressable, Text, Button, View} from 'react-native';
import BTConnect from './BTConnect.js';
import ConnectedRoot from './ConnectedRoot.js';
import LiveDiag from './LiveDiag.js';
import ErrorSnapshot from './ErrorSnapshot.js';
import styles from '../ui/Styles.js';
import Splash from './Splash.js';

class StateController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState : 'splash'
    }
  }
  
  changeAppState = (newState) => {
    this.setState({appState : newState});
  }
  
  render() {
    switch (this.state.appState) {
      case 'splash' :
        return (
          <Splash changeAppState = {this.changeAppState} />
        );
        break;
      case 'bluetooth' :
        return (
          <BTConnect changeAppState = {this.changeAppState} />
        );
        break;
      case 'connected' :
        return (
          <ConnectedRoot changeAppState = {this.changeAppState} />
        );
        break;
      case 'live' :
        return (
          <LiveDiag changeAppState = {this.changeAppState} />
        );
        break;
      case 'errorsnap' :
        return (
          <ErrorSnapshot changeAppState = {this.changeAppState} />
        );
        break;
    };
  }
}

export default StateController;