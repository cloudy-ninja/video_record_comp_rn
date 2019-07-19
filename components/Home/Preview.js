import React from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import style from './styles'
import constants from '../../constants';

const Preview = ({
  recordingTime,
} = this.props) =>
  <View
    style={style.previewContainer}
  >
    <View style={
        recordingTime < 15
          ? {...style.preview}
          : {...style.preview, borderWidth: 1, borderColor: constants.Colors.red}
      }
    />
  </View>

export default Preview