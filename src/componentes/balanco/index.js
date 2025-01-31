import React from "react";
import { View, Text, StyleSheet, } from "react-native";

export default function Balanco ({saldo, gastos}){
    return (
        <View style={styles.container}>

           <View style={styles.item}> 
            <Text style={styles.titulo}>Saldo</Text>
                <View style={styles.conteudo}>
                    <Text style={styles.simbolo}>R$</Text>
                    <Text style={styles.balance}>{saldo} </Text>
                </View>
           </View>


           <View style={styles.item}> 
            <Text style={styles.titulo}>Gastos</Text>
                <View style={styles.conteudo}>
                    <Text style={styles.simbolo}>R$</Text>
                    <Text style={styles.gasto}> {gastos} </Text>
                </View>
           </View>


        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingStart:18,
        paddingEnd:18,
        marginTop: -24,
        marginStart:14,
        marginEnd: 14,
        borderRadius:4,
        paddingTop:22,
        paddingBottom:22,
        zIndex: 99,

    },
    titulo:{
        fontSize: 20,
        color:'#DADADA',
    },
    conteudo:{
        flexDirection:'row',
        alignItems:'center',
    },
    simbolo:{
        color:'#DADADA',
        marginRight: 6,
    }, 
    balance:{
        fontSize:22,
        color: '#2ecc71'
    }, 
    gasto:{
        fontSize:22,
        color: '#e74c3c'
    }

})