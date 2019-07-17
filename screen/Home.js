import React from "react";
import {
  View,
} from 'react-native'
import {
  style,
  Container,
  MsgInput,
  RecordButton,
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      isRecording: false,
      currentTime: '00.00',
    }
  }

  onStartRecording = () => {
    this.setState({
      isRecording: true,
    });
  }

  onCancelRecording = () => {
    this.setState({
      isRecording: false,
    });
  }

  onScrollOverRecordButton = () => {
    this.onCancelRecording()
  }

  initState = () => {
    this.setState({
      isRecording: false,
      currentTime: '00.00',
    })
  }

  onSend = () => {
    this.initState()
  }

  render() {
    const {
      isRecording,
      currentTime,
    } = this.state

    return (
      <Container>
        <View style={style.row}>
          <MsgInput
            onCancelRecording={() => {}}
            isRecording={isRecording}
            recordingTime={currentTime}
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