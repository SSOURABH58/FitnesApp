import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextView, { textType } from './TextView'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProgressBar = () => {
    return (
        <View style={styles.container}>
            <TextView type={textType.Title} style={{fontSize:16}}>20g</TextView>
            <View style={styles.Track}>
                <View style={styles.FillTrack}/>
            </View>
            <MaterialCommunityIcons name="water-outline" size={24} color="#fff" />
            <TextView type={textType.Value}>18g</TextView>
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        
    },
    Track:{
        flex:1,
        width:12,
        backgroundColor:"#ffffff33",
        borderRadius:2.5,
        justifyContent:"flex-end",
        alignItems:"center",

        shadowColor:"blue",
        shadowRadius:100,
        shadowOffset:{width:0,height:0},
        shadowOpacity: 1,
        elevation: 3,
        zIndex:9999

    },
    FillTrack:{
        width:5,
        backgroundColor:"blue",
        borderRadius:2.5,
        height:300,
        
    }

})
