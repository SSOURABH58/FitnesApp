import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GlassContainer from './GlassContainer'
import ProgressBar from './ProgressBar'
import TextView, { textType } from './TextView'

type ProgressCardProps = {
    Title?:string;
    value?:string;
    color?:string;

}

const ProgressCard: React.FC<ProgressCardProps> = ({Title,value,color}) => {
    return (
        <GlassContainer>
            {Title&&<View style={styles.TitleCont}>
                <TextView type={textType.Title}>{Title}</TextView>
                {value&&<TextView type={textType.SubTitle} color={color}>{value}</TextView>}
            </View>}
            <ProgressBar/>
        </GlassContainer>
    )
}

export default ProgressCard

const styles = StyleSheet.create({
    TitleCont:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        alignSelf:"flex-start"
    }
})
