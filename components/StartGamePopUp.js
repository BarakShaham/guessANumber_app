import React from 'react';
import {StyleSheet, Text, View, Modal, Dimensions} from 'react-native';
import Buttons from "../constants/Buttons";
import Colors from "../constants/Colors";
import MyButton from './MyButton'

const StartGamePopUP = (props) => {

    return (
        <Modal visible={props.isPopUpVisible} animationType='fade' transparent={true}
               supportedOrientations={['portrait', 'landscape']}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.modalContainer}>

                    <View style={styles.numberContainer}>
                        <Text style={styles.playWithNumberText}>Play with the number </Text>
                        <Text style={styles.numberText}>{props.enteredNumber}</Text>
                    </View>

                    <View style={styles.buttonsLayout}>

                        <View style={{...Buttons.blueButton, width: 120}}>
                            <MyButton onPress={props.ChooseDifferentNumberButton}>
                                choose again
                            </MyButton>
                        </View>
                        <View style={{...Buttons.blueButton, width: 120}}>
                            <MyButton onPress={() => props.startGameHandler(props.enteredNumber)}>
                                Let's play
                            </MyButton>

                        </View>

                    </View>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({

    buttonsLayout: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30,
    },

    modalContainer: {

        width: Dimensions.get('window').width / 1.2,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,

        elevation: 20,
        borderColor: Colors.blue,
        backgroundColor: '#00397CFF',
        marginTop: Dimensions.get('window').width < 350 ? '50%' : '110%',
        //marginLeft:40,  
    },

    numberContainer: {
        alignItems: 'center'
    },
    playWithNumberText:{
        fontSize: Dimensions.get('window').width < 350 ? 18 : 24,
        color: 'white'
    },
    numberText:{
        fontSize: 34,
        color: 'white',
        marginTop: 15
    }

})

export default StartGamePopUP;