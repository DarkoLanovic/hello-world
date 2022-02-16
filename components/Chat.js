import React from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      message: [],
    }
  }
  render() {
    // Entered name state from Start screen gets displayed in status bar at the top of the Chat screen
    let name = this.props.route.params.name; // OR ...  let { nmae } = this.props.routw.params; 
    this.props.navigation.setOptions({ title: name});

    const { bgColor } = this.props.route.params;

    return (
      <View style={{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: bgColor,
        }}>
        <Text style={{color: 'blue', fontSize: 40}}>Hello!😀</Text>
        
      </View>
    )
  }
}







// import React from 'react';
// import { View, Text, Button } from 'react-native';

// export default class Chat extends React.Component {
//     render() {
//         let name = this.props.route.params.name; // OR ...  let { nmae } = this.props.routw.params; 
//         this.props.navigation.setOptions({ title: name });

//         return(
//             <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
//                 <Button
//                     title="Go back to Start"
//                     onPress={() => this.props.navigation.navigate("Start")}
//                 />
//                 <Text>Hello Screen2!</Text>
//             </View>
//         );
//     };
// }