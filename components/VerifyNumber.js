import React, {useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput, Touchable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
export default function VerifyNumber() {
    const[number, setNumber] = useState('')
    return (
        <View>
        <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" style = {styles.backButton} />
        </TouchableOpacity>
        <Text style = {styles.header}>Verify {"\n"}your account</Text>
        
        <View style = {styles.numberDetailView}>
            <Text style = {styles.codeSentText}>Code is sent to +91 ....</Text>
            <TouchableOpacity style = {styles.changeNumber}>
                <Text style = {styles.changeNumberText}>Change</Text>
            </TouchableOpacity>
        </View>
        <Text style = {styles.numberHeader}>Your number</Text>
        <View style = {styles.inputContainer}>           
            <TextInput style = {styles.textInput} keyboardType = 'numeric'  onChange = {setNumber}/>
        </View>
        <Text style = {styles.numberHeader}>Send Again in 10s</Text>
        <TouchableOpacity 
                style = 
                {
                    {...styles.continueButton,
                        backgroundColor: (number !== '')?'#593FCF':'#CCC5F1',
                        ...(number!== '')?styles.continueButtonChange:{}
                    }
                }>
                <Text style = {styles.buttonText}>Verify</Text>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    backButton:{
        marginTop:70,
        marginLeft: 20
    },
    numberDetailView:{
        flexDirection: 'row',
    },
    changeNumber:{
        marginTop:10, 
        marginLeft: 10,
    },
    changeNumberText:{
        color: 'orange',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 60,
        marginHorizontal: 20,
        color: "#604CC0",
    },
    codeSentText:{
        fontSize: 16,
        color: '#ADAEBE',
        marginTop: 10,
        marginLeft: 20
    },
    numberHeader:{
        fontSize: 15,
        color: '#ADAEBE',
        marginHorizontal: 30,
        marginTop: 20
    },
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
    textInput:{
        flex:1,
        marginLeft: 150
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
