import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    formContext:{
        flex:1,
        backgroundColor:"#8be9fd",  
        alignItems:"center",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        alignItems:"center",
        paddingTop:5,
    
    },
    form:{
      width:"100%",
    },
    formLabel:{
        color:"#282a36",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    ButtonCalculate:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff5555",
        paddingTop:5,
        paddingBottom:12,
        marginLeft:12,
        margin:30,

    },
    textButtonCalculator:{
        fontSize:20,
        color:"#44475a",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,

    },
    exibirIMC:{
        width:"100%",
        height:"50%",
        
    },
    listaImcs:{
        
        
    },
    resultImcItem:{
        fontSize:15,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
        
    },
    textResultItemList:{
        fontSize:10,
        
    }



});

export default styles