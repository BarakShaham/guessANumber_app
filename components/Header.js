import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Colors from "../constants/Colors";
import BodyText from '../components/BodyText'

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <BodyText>{props.title}</BodyText>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: Colors.blue,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 30,
        marginLeft: Dimensions.get('window').width / 16,
        marginRight: Dimensions.get('window').width / 16,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.86,

        //shadow on Android
        elevation: 15,
    },
    header: {
        fontSize: 24,
        fontFamily: 'myFontBold',

    }
});

export default Header;