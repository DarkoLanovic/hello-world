import React from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyDRVGE6qFTu5afoyXfhGgZmNSDO-vQGP2M",
  authDomain: "chatapp-da543.firebaseapp.com",
  projectId: "chatapp-da543",
  storageBucket: "chatapp-da543.appspot.com",
  messagingSenderId: "263496052509",
  appId: "1:263496052509:web:9cdab1972ace786cafbbf4"

};

export default class Chat extends React.Component {

  constructor(props){
    super();
    this.state ={
      messages: [],
      uid: 0,
      user: {
        _id: "",
        name: "",
        avatar: "",
      },

    };

    //initializing firebase
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    // reference to the Firestore message collection
    this.referenceChatMessages = firebase.firestore().collection("messages");
    this.refMsgsUser = null;

  }
  

  componentDidMount() {
    // Set the page title once Chat is loaded
    let { name } = this.props.route.params
    // Adds the name to top of screen
    this.props.navigation.setOptions({ title: name })

    // listens for updates in the collection
    this.unsubscribe = this.referenceChatMessages
      .orderBy("createdAt", "desc")
      .onSnapshot(this.onCollectionUpdate)

    // user authentication performed first
    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return await firebase.auth().signInAnonymously();
      }

      //update user state with currently active user data
      this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          name: name,
          avatar: "https://placeimg.com/140/140/any",
        },
      });

      //referencing messages of current user
      this.refMsgsUser = firebase
        .firestore()
        .collection("messages")
        .where("uid", "==", this.state.uid);
    });

     

  }


  // when updated set the messages state with the current data 
  onCollectionUpdate = (querySnapshot) => { 
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: {
          _id: data.user._id,
          name: data.user.name,
          avatar: data.user.avatar
        },
      });
    });
    this.setState({
      messages: messages
    });
  };

  componentWillUnmount() {
    //unsubscribe from collection updates
    this.authUnsubscribe();
    this.unsubscribe();

  }

  // Add messages to database
  addMessages() { 
    const message = this.state.messages[0];
    // add a new messages to the collection
    this.referenceChatMessages.add({
      _id: message._id,
      text: message.text || "",
      createdAt: message.createdAt,
      user: this.state.user,
      
    });
  }


  // calback function for when user sends a message
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

  // Customize the chat bubble background color
  renderBubble(props) { 
    return (
      <Bubble {...props} 
      wrapperStyle={{ 
        right: {backgroundColor: 'purple'},
       }}
      />
    )
  }

  

  render() {
    // Set the background color selected from start screen
    const  bgColor  = this.props.route.params.bgColor;
    return (
     
      <View style={{
        flex: 1,
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor: bgColor}}>
        
        <View style={styles.giftedChat}>
           <GiftedChat
              renderBubble={this.renderBubble.bind(this)}
              messages={this.state.messages}
              user={this.state.user}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: this.state.user._id,
                name: this.state.name,
                avatar: this.state.user.avatar
              }}
            />
            { Platform.OS === 'android' ? (
              <KeyboardAvoidingView behavior="height" />
              ) : null}
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center', 
    justifyContent:'center'
  },
  giftedChat: {
    flex: 1,
    width: "88%",
    paddingBottom: 10,
    justifyContent: "center",
    borderRadius: 5,
  },

});