import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import TextView, { textType } from '../components/TextView';

const Colors = {
    Default:"#fff",
    Calories:"#CF5414",
    Fats:"#FF872A",
    Proteins:"#D43434",
    Carbs:"#ffffffCC"
}

export default function Calories() {
    return (
        <View style={styles.container}>
            <Header title={"Calories"} value={"24.0 kc"} color={Colors.Calories}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:30
      },
})
