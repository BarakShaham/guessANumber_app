import React from 'react';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import CardUI from "../components/CardUI";
import Colors from "../constants/Colors";
import StartGamePopUP from "../components/StartGamePopUp";


const GameOverScreen = (props) => {

    return (
        <View>
            <CardUI style={styles.container}>
                <Text style={{fontSize:24, marginBottom:30, color:Colors.background}}>THE GAME IS OVER !</Text>
                <Text style={{fontSize:20, marginBottom:30}}>After {props.numOfGuesses} guesses</Text>
                <Button title='Play again' onPress={()=>props.startGameHandler(null) }/>
            </CardUI>

            <View style={styles.imgContainer}>
                <Image source = { {uri:'https://www.macmillandictionary.com/external/slideshow/thumb/142242_thumb.jpg'} } fadeDuration={2000} style={{width:200, height:200, borderRadius:100}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        width:'80%',
        backgroundColor:Colors.blue
    },
    imgContainer:{
        alignItems:'center',
        marginTop:30
    }

});

export default GameOverScreen;