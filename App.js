import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, ScrollView} from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./constants/Colors";
import StartGamePopUP from "./components/StartGamePopUp";
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

// func is outside the App function becasue it doesn;t need to reload every componenet lifeCycle
const loadFonts = () => {
    return Font.loadAsync({
        'myFont': require('./assets/fonts/OpenSans-Regular.ttf'),
        'myFontBold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {

    const [userNumber, setUserNumber] = useState()

    const [numOfGuesses, setNumOfGuesses] = useState(0)

// state which determines if the app has loaded
    const [isAppLoaded, setIsAppLoaded] = useState(false)
// initial state is false. so App loading components runs the startAsync func (has to be a func that returns a promise) and onFinish sets isLoaded state to true and runs the rest of the code
    if (!isAppLoaded) {
        return (
            <AppLoading startAsync={loadFonts} onFinish={() => setIsAppLoaded(true)}/>
        )
    }

    const startGameHandler = (userNumber) => {
        setUserNumber(userNumber)
        setNumOfGuesses(0)
    }

    const gameOverHandler = (numOfGuesses) => {
        setNumOfGuesses(numOfGuesses)
    }

// decide which screen to show depend on the isGameStarted state
    let currentScreen = <StartGameScreen startGameHandler={startGameHandler}/>
    if (userNumber && numOfGuesses === 0) {
        currentScreen =
            <GameScreen startGameHandler={startGameHandler} userNumber={userNumber} onGameOver={gameOverHandler}/>
    }
    if (numOfGuesses != 0) {
        currentScreen = <GameOverScreen startGameHandler={startGameHandler} numOfGuesses={numOfGuesses}/>
    }
    return (
        <ScrollView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>

                <View style={styles.container}>
                    <Header title='Guess a Number'/>
                    <View style={styles.startScreen}>
                        {currentScreen}
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    startScreen: {
        alignItems: 'center',
        marginTop: 70,
    }
});
