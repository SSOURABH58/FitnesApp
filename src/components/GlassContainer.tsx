import { BlurView } from 'expo-blur'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GlassContainer: React.FC = ({children}) => {
    return (
        <BlurView tint={"light"} intensity={15} style={styles.GlassContainer}>
            {children}
        </BlurView>
    )
}

export default GlassContainer

const styles = StyleSheet.create({
    GlassContainer: {
        borderRadius:15,
        borderColor:"#ffffff33",
        borderWidth:3,
        // backgroundColor:"#fff",
        padding:10,
    },
})
