
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';



export default class Start extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: ""};
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Screen1!</Text>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder='Tupe here...'
        />
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat', { name = this.state.name})}
        />
      </View>
    );
  };
}