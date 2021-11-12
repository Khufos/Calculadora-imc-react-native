import React from "react";
import {View, Text} from "react-native"
import styles from "./style";
export default function Title(){
    return(
        <View style={styles.boxTitles}>
            <Text style={styles.textTitle}>Cálculo IMC</Text>
        </View>
    );

}