import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, FlatList, Dimensions } from 'react-native';
import CardUI from "../components/CardUI";
import Buttons from '../constants/Buttons';
import Colors from "../constants/Colors";
import MyButton from '../components/MyButton'
import {Ionicons} from '@expo/vector-icons'

const generateRandomNumberBetween = (min, max) =>{
    return Math.floor( Math.random()*(max-min)+min )
}
let genNumber=generateRandomNumberBetween(1,100)

const GameScreen = (props) => {

const [currentGuess, setCurrentGuess] = useState(genNumber)
let currentMin = useRef(1)
let currentMax = useRef(100)
let guessCounter = useRef(0)

const [prevGuesses, setPrevGuesses] = useState([{key: Math.random().toString(), value: genNumber}])

useEffect(() => {
    guessCounter.current++
    if ( currentGuess === props.userNumber){
        props.onGameOver(guessCounter.current)
    }
})

    const nextGuessHandler = (direction)=>{

        if ( (direction === 'lower' && currentGuess < props.userNumber ) || (direction === 'greater' && currentGuess > props.userNumber )){
                 Alert.alert("Don't cheat", 'Be honest next time')
                 return;
        }

        if (direction === 'lower'){
            currentMax.current = currentGuess;
        }

        else {
            currentMin.current = currentGuess;
        }

        let nextguess = generateRandomNumberBetween(currentMin.current, currentMax.current)
        setPrevGuesses((prevGuesses) => [...prevGuesses, { key: Math.random().toString(), value: nextguess} ])
        setCurrentGuess(nextguess)
    }      
    return(
        
        <View style={{alignItems:'center', marginTop:Dimensions.get('window').height < 600 ? -60 : 10}}>
            
            <CardUI style={{alignItems:'center', backgroundColor:Colors.blue}}>
                <Text style={{ fontSize:16}}>you chose the number</Text> 
                <Text style={{ fontSize:18}}>{props.userNumber}</Text> 
            </CardUI>
            <Text style={{color:'white', marginTop:Dimensions.get('window').height < 600 ? 0 : 30, fontSize:30}}>Opponent's Guess</Text> 
            <Text style={{borderWidth:2, borderRadius:10, borderColor:Colors.blue, padding:20,marginVertical:20, color:Colors.blue, fontSize:30}}>{currentGuess}</Text> 
            <View style={{flexDirection:'row',marginTop:Dimensions.get('window').height < 600 ? 0 : 30 }}>
                <CardUI style={{flexDirection:'row', width:250, justifyContent:'center' }}>
                    <MyButton style={styles.MD_button} onPress={nextGuessHandler.bind(this, 'lower')}> <Ionicons name='md-remove' size={24} color='white' /></MyButton>
                
              
                    <MyButton style={styles.MD_button} onPress={nextGuessHandler.bind(this, 'greater')}>  <Ionicons name='md-add' size={24} color='white' /> </MyButton>
                </CardUI>
            </View>
            <FlatList
                data={prevGuesses}
                horizontal
                scrollEnabled={true}
                showsHorizontalScrollIndicator={true}
                renderItem={({item}) => (
                    //<Text>{item}</Text>
                   <CardUI style={{height:60}}><Text> {item.value} </Text></CardUI>
                )}
            />

            <View style={{marginTop:50}}>
                <MyButton style={styles.MD_button} onPress={()=> props.startGameHandler(null)}>  <Ionicons name='md-exit' size={24} color='white' /> </MyButton>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
MD_button:{
    width:60,
    height:40,
    marginHorizontal:30
}

})

export default GameScreen