import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  PanResponder,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles'

import type {
  PanResponderInstance,
  GestureState,
} from '../../../../Libraries/Interaction/PanResponder';
import type {PressEvent} from '../../../../Libraries/Types/CoreEventTypes';


class RecordButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoved: false
    }
  }

  _handleStartShouldSetPanResponder = (
    event: PressEvent,
    gestureState: GestureState,
  ): boolean => {
    // Should we become active when the user presses down on the circle?
    return true;
  };

  _handleMoveShouldSetPanResponder = (
    event: PressEvent,
    gestureState: GestureState,
  ): boolean => {
    // Should we become active when the user moves a touch over the circle?
    return true;
  };

  _handlePanResponderGrant = (
    event: PressEvent,
    gestureState: GestureState,
  ) => {
    this.props.onStartRecording() // onPressIn
  };

  _handlePanResponderMove = (
    event: PressEvent,
    gestureState: GestureState) => {
    if(gestureState.dx < -50) {
      this.props.onScrollOverRecordButton()
      this.setState({
        isMoved: true
      })
    }
  };

  _handlePanResponderEnd = (
    event: PressEvent,
    gestureState: GestureState) => {
    if(!this.state.isMoved) {
      this.props.onSend() // onPressOut
    }
  };

  _panResponder: PanResponderInstance = PanResponder.create({
    onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
    onPanResponderGrant: this._handlePanResponderGrant,
    onPanResponderMove: this._handlePanResponderMove,
    onPanResponderRelease: this._handlePanResponderEnd,
  });

  render() {
    const {
      isRecording,
    } = this.props

    return (
      <View
        style={!isRecording ? style.normalRecordOuterContainer : style.recordingOuterContainer}
        {...this._panResponder.panHandlers}
      >
        <View
          style={!isRecording ? style.normalRecordInnerContainer : style.recordingInnerContainer}
        >
          <Icon name="play" size={!isRecording ? 15 : 22.5} color={'#fff'}/>
        </View>
      </View>
    )
  }
}

export default RecordButton
