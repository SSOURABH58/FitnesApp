import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'

type TextViewProps = {
    type?: textType;
    color?:string;
    style?:StyleProp<TextStyle>;
  };

export enum textType {
    Header="Header",
    Title="Title",
    SubTitle = "SubTitle",
    Value="Value",
}

const TextView: React.FC<TextViewProps> = ({children,type=textType.Value,color="#fff",style={}})=> {

    const TextType = (type:textType) =>{
        switch (type) {
            case textType.Header:
                return styles.Header;
            case textType.Title:
                return styles.Title;
            case textType.SubTitle:
                return styles.SubTitle;
            case textType.Value:
                return styles.Value;
        
            default:
                break;
        }
    }
    return (
            <Text style={[TextType(type),{color:color,textShadowColor:color},style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    Header:{
        color:"#ffffff",
        opacity:.45,
        fontSize:28
    },
    Title:{
        color:"#ffffff",
        opacity:.30,
        fontSize:20 
    },
    SubTitle:{
        color:"#ffffff",
        opacity:.8,
        fontSize:16,
        textShadowRadius:8,
        textShadowOffset:{width: 0, height: 0},
    },
    Value:{
        color:"#ffffff",
        opacity:1,
        fontSize:16,
        textShadowRadius:8,
        textShadowOffset:{width: 0, height: 0},
        fontWeight:"bold",
        // textShadowOpacity:1
    }
})

export default TextView
