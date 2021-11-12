import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style";


export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é : " + props.resultImc,
        })
    }

    return (
        <View style={styles.resultImc}>    
            <View style={styles.boxSharebutton}>
            <Text style={styles.informetion}>{props.messageResultImc}</Text>
            <Text style={styles.number}>{props.resultImc}</Text>
                <TouchableOpacity style={styles.shared}> 
                <Text style={styles.sharedText} onPress={onShare}> Shared</Text> 
                </TouchableOpacity>
            </View>
        </View>
    
    );
}