import React from 'react'
import {Text, StyleSheet} from 'react-native'

const BodyText = (props) => {
    return (
        <Text style={styles.title}> {props.children} </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'myFontBold',
        fontSize: 24
    }
})

export default BodyText