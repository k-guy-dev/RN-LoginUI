import React from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MobileInput from './MobileInput';

export default function Login() {
    return (
        <View>
            <TouchableOpacity>
                <AntDesign name="arrowleft" size={24} color="black" style = {styles.backButton} />
            </TouchableOpacity>
            <Text style = {styles.header}>Use your mobile number to login</Text>
            <Text style = {styles.numberHeader}>Your number</Text>
            <MobileInput/>
        </View>
  )
}

const styles = StyleSheet.create({
    backButton:{
        marginTop:70,
        marginLeft: 20
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 60,
        marginHorizontal: 20,
        color: "#604CC0",
    },
    numberHeader:{
        fontSize: 15,
        color: '#ADAEBE',
        marginHorizontal: 30,
        marginVertical: 10
    }
})
