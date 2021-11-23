import React from 'react'
import { StyleSheet, View } from 'react-native'
import GlassContainer from '../components/GlassContainer';
import Header from '../components/Header'
import Profile from '../components/Profile';
import ProgressCard from '../components/ProgressCard';
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
            <Profile/>
            <Header title={"Calories"} value={"24.0 kc"} color={Colors.Calories}/>
            <ProgressCard/>
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
