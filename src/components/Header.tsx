import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextView, { textType } from './TextView'

type HeaderProps = {
    title:string;
    date?:Date|string|number;
    color?:string;
    value?:string;
}

const Header: React.FC<HeaderProps> =({title,date,color="#fff",value})=> {

    const formateDate=(date?:Date|string|number)=>{
        const d:Date= date ? new Date(date) : new Date();
        const dateSplit=d.toLocaleString("en-GB").split(" ")
        return `${dateSplit[2].length===1?"0":""}${dateSplit[2]}${dateSplit[1]}`}
    return (
        <View style={styles.Header}>
            <View style={styles.CenterRow}>
                <TextView type={textType.Header}>{title}</TextView>
                <TextView type={textType.SubTitle} style={{marginLeft:8,marginBottom:5}} color={color}>{value}</TextView>
            </View>
            <View style={styles.HrBreak}/>
            <TextView type={textType.Title} style={{opacity:.40,fontSize:16}}>{formateDate(date)}</TextView>
        </View>
    )
}

const styles = StyleSheet.create({
    Header:{
        justifyContent:"center",
        alignItems:"flex-start",
        alignSelf:"flex-start"
    },
    HrBreak:{
        width:120,
        opacity:.2,
        backgroundColor:"#fff",
        borderRadius:50,
        height:3,
        alignSelf:"center"
    },
    CenterRow:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-end"
    }
})

export default Header;