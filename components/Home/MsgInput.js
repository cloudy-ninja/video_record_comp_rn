import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import style from './styles'
import constants from '../../constants';

const MsgInput = ({
  value,
  onChangeText,
  onCancelRecording,
  isRecording,
  recordingTime,
} = this.props) =>
  <View
    style={
      !isRecording
        ? {...style.msgInput}
        : {...style.msgInput, width: '80%', borderWidth: 0}
    }
  >
    {
      !isRecording
        ? <TextInput
            autoCapitalize='none'
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={constants.Colors.grayLight}
          />
        : <View style={style.cancelContainer}>
            <View style={style.timeContainer}>
              <View style={style.recordingStatus} />
              <Text>{recordingTime}</Text>
            </View>
            <Text>{'Slide to cancel'}</Text>
          </View>
    }
  </View>


export default MsgInput