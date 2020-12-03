import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";

const MyButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Colors.blue,
        borderRadius: 20,
        height: 30,
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 16,
        color: 'white'

    }
});

export default MyButton;