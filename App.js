import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './components/Start';
import Chat from './components/Chat';

// navigatir
const Stack = createStackNavigator();

export default class App extends React.Component { 
  render() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen
              // The handler that will be use in order to open or navigate to the screen 
              name="Start"
              // The component you want to display as the screen
              component={Start}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}




// import React, { Component } from 'react';
// import { StyleSheet, View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';

// export default class HelloWorld extends React.Component {
  
//   // Creating a "state" object in the class constructor
//   constructor(props) {
//     super(props);
//     this.state = {text:''};
//   }
  
//   alertMyText (input = []) {
//           Alert.alert(input.text)
//         } 

//   render() {
//     return (
     
//       <View style={{flex:1, justifyContent:'center'}}>
//         <View style={styles.box1}></View>
//         <View style={styles.box2}></View>
//          {/* Configuring "TextInput" component with the "props" */}
//          <TextInput 
//           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//           onChangeText={(text) => this.setState({text})}
//           value={this.state.text}
//           placeholder='Tupe here...'
//         />
//         <Text>You wrote: {this.state.text}</Text>
//         <Button
//           onPress={() => {
//             this.alertMyText({text: this.state.text});
//           }}
//           title="View"
//         />

//         {/* <ScrollView>
//           <Text style={{fontSize:1110}}>This text i sso big! And so long You have to scroll!</Text>
//         </ScrollView> */}
        
//         <View style={styles.box3}></View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },

//   box1: {
//     flex:30,
//     backgroundColor: 'blue'
//   },

//   box2: {
//     flex: 80,
//     backgroundColor: 'red'
//   },

//   box3: {
//     flex:100,
//     backgroundColor: 'green'
//   }
// });





// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View>
//       <Text style={styles.blue}>Hello World!</Text>
//       <Text style={styles.bigRed}>How are yoy?</Text>
//       <Text style={[styles.blue, styles.bigRed]}>I'm feeling good!</Text>
//       <View style={styles.box}></View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   box: {
//     width: 60,
//     height: 60,
//     backgroundColor: 'blue',
//   },

//   blue: {
//     color: 'blue',
//     fontWeight: '600',
//   },
//   bigRed: {
//     color:'red',
//     fontSize: 30,
//   },

//   bigRedBold: {
//     color: 'red',
//     fontSize: 30,
//     fontWeight: '600',
//   }
// });
