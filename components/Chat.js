import React from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    let name = this.props.route.params.name;
    
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: `${name} started chat`,
          createdAt: new Date(),
          system: true,
         },
      ],
    });
  }


  /*  the function setState() is called with the parameter previousState, 
  which is a reference to the component’s state at the time the change is applied. 
  Then comes the append() function provided by GiftedChat, 
  which appends the new message to the messages object. In other words, 
  the message a user has just sent gets appended to the state messages so 
  that it can be displayed in the chat. */
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgrounColor: "#000",
          },
        }}
      />
    );
  }
  

  render() {

    // Entered name state from Start screen gets displayed in status bar at the top of the Chat screen
    let name = this.props.route.params.name; // OR ...  let { name } = this.props.route.params; 
    this.props.navigation.setOptions({ title: name});

    const bgColor = this.props.route.params.bgColor;

    return (
      <View style={{ flex: 1, backgroundColor: bgColor }}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{_id: 1,}}
        /> 
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      
      </View>
    );
  }
}