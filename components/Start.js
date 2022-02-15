import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, ImageBackground, Image, TouchableOpacity } from 'react-native';
import BackgroundImage from '../assets/background-image.png';
import icon from '../assets/user-icon.png';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      bgColor: ''
    };
  }

  // To  update state with the new background color for ChatScreen chosen by the user
  changeBgColor = (newColor) => {
    this.setState({ bgColor: newColor });
  };

  // Background colour for ChatScreen
  colors = {
    dark: '#090C08',
    purple: '#474056',
    blue: '#8A95A5',
    green: '#B9C6AE'
  };

  render() {
    return (
      <View style={styles.container}>

        <ImageBackground source={BackgroundImage} resizeMode='cover' style={styles.backgroundImage}>

          <View style={styles.titleBox}> 
            <Text style={styles.title}>ChatApp</Text> 
          </View>

          <View style={styles.box1}>
            <View style={styles.inputBox}>
              <Image source={icon} style={styles.image} />
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ name: text})}
                value={this.state.name}
                placeholder='Enter your name please'
              />
            </View>

            <View style={styles.colorBox}>
              <Text style={styles.chooseColor}> Choose Chat Background </Text>
            </View>

            <View style={styles.colorArray}>
              <TouchableOpacity 
                style={styles.color1} 
                onPress={() => this.changeBgColor(this.colors.dark)}>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.color2}
                onPress={() => this.changeBgColor(this.colors.purple)}>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.color3}
                onPress={() => this.changeBgColor(this.colors.blue)}>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.color4}
                onPress={() => this.changeBgColor(this.colors.green)}>
              </TouchableOpacity>     
            </View>

            <Pressable
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Chat', { 
                name: this.state.name,
                bgColor: this.state.bgColor
                })}>
                <Text style={styles.buttonText}>Start Chat</Text>
            </Pressable>
            
          </View>

        </ImageBackground>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleBox: {
    height: '38%',
    width: '80%',
    alignItems: 'center',
    paddingTop: 10,
  },

  title: {
    fontSize: 40, 
    fontWeight: "400", 
    color: '#FFFFFF',
  },

  box1: {
    backgroundColor: 'white', 
    height: '45%',
    width: '95%',
    justifyContent: 'space-around', 
    alignItems: 'center',

  },

  inputBox: {
    borderWidth: 2,
    borderRadius: 1,
    borderColor: 'grey',
    width: '90%',
    height: 60,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  image: {
    width: 25,
    height: 25,
    marginRight: 20
  },

  input: {
    fontSize: 16, 
    fontWeight: "400", 
    color: '#757083', 
    opacity: 50
  },

  colorBox: {
    alignItems: 'center',
    paddingTop: '9%'
  },

  chooseColor: {
    fontSize: 14, 
    fontWeight: "500", 
    color: '#757083'
  },

  colorArray: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingRight: 5,
    alignItems: 'center'
  },

  color1: {
    backgroundColor: '#090C08',
    width: 50,
    height: 50,
    borderRadius: 25
  },

  color2: {
    backgroundColor: '#474056',
    width: 50,
    height: 50,
    borderRadius: 25
  },

  color3: {
    backgroundColor: '#8A95A5',
    width: 50,
    height: 50,
    borderRadius: 25
  },

  color4: {
    backgroundColor: '#B9C6AE',
    width: 50,
    height: 50,
    borderRadius: 25
  },

  button: {
    width: '88%',
    height: 70,
    backgroundColor: '#757083',
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 60,
    borderRadius: 30

  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: "400"
  }
});