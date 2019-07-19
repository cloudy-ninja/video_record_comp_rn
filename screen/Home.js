import React from "react";
import {
  View,
} from 'react-native'
import {
  style,
  Container,
  MsgInput,
  RecordButton,
  Preview,
} from '../components/Home'
import { RNCamera } from 'react-native-camera';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      isRecording: false,
      currentTime: 0,
    }
  }

  onStartRecording = async () => {
    const options = {
      mute: false,
      quality: RNCamera.Constants.VideoQuality['288p'],
      orientation: 'auto',
    }

    if (this.camera && !this.state.isRecording) {
      try {
        const promise = this.camera.recordAsync(options);

        if (promise) {
          this.setState({ isRecording: true });
          this.countTimeId = setInterval(() => {
            this.setState(prevState => ({
                currentTime: prevState.currentTime + 1
              }))
            }
          , 1000);
          this.cancelTimeId = setTimeout(this.onCancelRecording, 20000)
          const data = await promise;
          console.warn('video path --->>>', data);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  onCancelRecording = () => {
    this.camera.stopRecording()
    clearInterval(this.countTimeId);
    clearInterval(this.cancelTimeId);
    this.initState()
  }

  onScrollOverRecordButton = () => {
    this.onCancelRecording()
  }

  initState = () => {
    this.setState({
      isRecording: false,
      currentTime: 0,
    })
  }

  onSend = () => {
    this.initState()
  }

  convertToTime = (second) => {
    let minutes = Math.floor(second / 60)
    let seconds = second - minutes * 60

    if (minutes < 10) {
      minutes = "0" + minutes
    }
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    return minutes + ':' + seconds;
  }

  render() {
    const {
      isRecording,
      currentTime,
    } = this.state

    return (
      <Container>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          type={RNCamera.Constants.Type.front}
          style={style.previewCamera}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <Preview
          recordingTime={currentTime}
        />
        <View style={!isRecording ? style.row : {...style.row, borderTopWidth: 1}}>
          <MsgInput
            onCancelRecording={() => {}}
            isRecording={isRecording}
            recordingTime={this.convertToTime(currentTime)}
          />
          <RecordButton
            isRecording={isRecording}
            onStartRecording={this.onStartRecording}
            onCancelRecording={this.onCancelRecording}
            onScrollOverRecordButton={this.onScrollOverRecordButton}
            onSend={this.onSend}
          />
        </View>
      </Container>
    );
  }
}

export default HomeScreen