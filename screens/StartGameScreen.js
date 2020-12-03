import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Image,
    Dimensions,
    useWindowDimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import CardUI from "../components/CardUI";
import Colors from "../constants/Colors";
import StartGamePopUP from "../components/StartGamePopUp";
import MyButton from '../components/MyButton'


const StartGameScreen = (props) => {

    const [enteredNumber, setEnteredNumber] = useState(null)

    const [startGamePopUp, setStartGamePopUp] = useState(false)

    const onEnteredNumber = (number) => {
        //using regex to replace non digits chars with an empty char
        setEnteredNumber(number.replace(/[^0-9]/g, ''))
    }

    const handleResetButton = () => {
        setEnteredNumber(null)
    }

    const handleSelectButton = (enteredNumber) => {
        setEnteredNumber(enteredNumber => parseInt(enteredNumber))
        parseInt(enteredNumber) > 0 ? (setStartGamePopUp(true)) : (Alert.alert('Invalid number', 'Please enter a positive number', [{
            text: 'Got it',
            style: 'destructive'
        }]))
    }

    const handleChooseDifferentNumberButton = () => {
        setStartGamePopUp(false)
        setEnteredNumber('')
    }

    const window = useWindowDimensions();

    return (
        <ScrollView style={{width: 400}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{flex: 1}}
            >
                <View style={{width: '100%', alignItems: 'center'}}>

                    <CardUI style={styles.container}>
                        <StartGamePopUP isPopUpVisible={startGamePopUp} enteredNumber={enteredNumber}
                                        ChooseDifferentNumberButton={handleChooseDifferentNumberButton}
                                        startGameHandler={props.startGameHandler}/>

                        <TextInput
                            placeholder="?"
                            keyboardType='numeric'
                            style={styles.numberInput}
                            onChangeText={onEnteredNumber}
                            value={enteredNumber}
                            maxLength={2}

                        />
                        <View style={styles.buttonsLayout}>
                            <View style={styles.button}><MyButton style={styles.resetButton}
                                                                  onPress={handleResetButton}> Reset </MyButton></View>
                            <View style={styles.button}><MyButton
                                onPress={() => handleSelectButton(enteredNumber)}> Select </MyButton></View>
                        </View>

                    </CardUI>

                </View>
            </KeyboardAvoidingView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        width: '60%',
    },

    numberInput: {
        alignItems: 'center',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.blue,
        borderRadius: 10,
        width: Dimensions.get('window').width / 4,
        height: 100,
        fontSize: 40,
        padding: 10,
        color: Colors.blue

    },

    buttonsLayout: {
        flexDirection: 'row',
        justifyContent: 'center'

    },

    button: {
        paddingTop: 10,
        marginHorizontal: 5,
        width: 70,

    },
    resetButton: {
        backgroundColor: 'red'
    }
});

export default StartGameScreen;