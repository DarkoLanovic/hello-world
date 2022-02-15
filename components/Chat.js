
import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Chat extends React.Component {
    render() {
        let name = this.props.route.params.name; // OR ...  let { nmae } = this.props.routw.params; 
        this.props.navigation.setOptions({ title: name });

        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    title="Go back to Start"
                    onPress={() => this.props.navigation.navigate("Start")}
                />
                <Text>Hello Screen2!</Text>
            </View>
        );
    };
}