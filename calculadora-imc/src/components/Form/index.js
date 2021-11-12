import React , {useState} from "react";
import {Text, View,TextInput,TouchableOpacity,Vibration,Pressable,Keyboard,FlatList} from "react-native"


import ResultImc from "./ResultImc/"
import styles from "./style";


export default function Form (props){

const [height,setHeight] = React.useState(null) 
const [weight,setWeight] = React.useState(null)
const [messageImc,setMessageImc] = useState("Preencha o peso e a altura");
const [imc,setImc] = useState(null)
const [textButton,setTextButton] = useState("Calcular")
const [errorMessage,setErrorMessage] = useState(null)
const [imcList,setImcList] = useState([])

function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage("campo obrigatório..")
    }
}
function imcCalculator(){
    let heightFormat = height.replace(",",".")
    let totalImc = (weight/(heightFormat*heightFormat)).toFixed(2)
    setImcList((arr)=> [...arr,{id:new Date().getTime(), imc:totalImc}])
    setImc(totalImc) 
}        
function validationImc(){
    console.log(imcList)
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
        
    }else{
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
    }
    
}

    return(
        <View style={styles.formContext}>
        {imc == null ? 
        <Pressable onPress={Keyboard.dismiss}style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={styles.input}
                placeholder="Ex. 1.75" 
                KeyboardType="numeric" 
                onChangeText={setHeight} 
                value={height}/>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={styles.input}
                placeholder="Ex. 75.365" 
                KeyboardType="numeric" 
                onChangeText={setWeight} 
                value={weight}/>
            
            <TouchableOpacity onPress={()=> {validationImc()}} style={styles.ButtonCalculate}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </Pressable>
            :  
            <View style={styles.exibirIMC}>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            <TouchableOpacity onPress={()=> {validationImc()}} style={styles.ButtonCalculate}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        }
        <FlatList 
        style={styles.listaImcs} 
        data={imcList.reverse()} 
        renderItem={({item})=> {
        

            return(
                <Text style={styles.resultImcItem}>
                <Text style={styles.textResultItemList}>Resultado IMC = </Text> 
                {item.imc}
                </Text>
            )
        }}
        keyExtractor={(item) =>{
            {item.id}
        }}
        />
    </View>
    );
}   