import React from 'react';
import {StyleSheet, View} from 'react-native';


const CardUI = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({

    container: {

        padding: 20,
        borderRadius: 20,
        //shadow only works on IOS
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.36,
        backgroundColor: 'rgb(254,235,236)',

        //shadow on Android
        elevation: 15,
    },
})

export default CardUI