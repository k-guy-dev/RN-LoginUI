import React, {useState} from 'react'
import {View, TextInput, Text, StyleSheet,TouchableOpacity} from 'react-native'

export default function MobileInput() {
    const[number, setNumber] = useState('')
    return (
        <View> 
            <View style = {styles.inputContainer}> 
                <Text style = {styles.countryCode}>+91</Text>
                <TextInput style = {styles.textInput} keyboardType = 'numeric'  onChange = {setNumber}/>
            </View>
            <Text style = {styles.bottomLine}>We need your phone number for verification purposes</Text>
            <TouchableOpacity 
                style = 
                {
                    {...styles.continueButton,
                        backgroundColor: (number !== '')?'#593FCF':'#CCC5F1',
                        ...(number!== '')?styles.continueButtonChange:{}
                    }
                }>
                <Text style = {styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:30,
        paddingVertical:5,
        flexDirection: 'row',
        borderWidth:2,
        borderColor:'#e8e3ff',
        backgroundColor: '#f0edff',
        height:60,
        borderRadius: 5
    },
    countryCode:{
       color:'grey',
       fontSize:15,
       paddingVertical: 15,
       paddingHorizontal: 15
    },
    textInput:{
        flex:1,
        paddingHorizontal: 15
    },
    bottomLine:{
        fontSize:10,
        color: 'grey',
        marginVertical: 5,
        marginLeft: 30
    },
    continueButton:{
        marginVertical: 20,
        backgroundColor: '#CCC5F1',
        marginHorizontal: 30,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
    },
    continueButtonChange:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    buttonText:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 15
    }
})
