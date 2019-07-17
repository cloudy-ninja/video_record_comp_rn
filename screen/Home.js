import React from "react";
import {
  View,
} from 'react-native'
import {
  style,
  Container,
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <View style={style.row}>
        </View>
      </Container>
    );
  }
}

export default HomeScreen