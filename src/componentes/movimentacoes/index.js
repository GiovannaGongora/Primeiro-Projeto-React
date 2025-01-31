import React, {useState} from "react";
import { View, Text , StyleSheet, TouchableOpacity} from "react-native";

export default function Movimentacoes ({data}){

    const [mostrarValor, setMostrarValor]= useState(false);


    return (
        <TouchableOpacity style={styles.container} onPress={()=> setMostrarValor(!mostrarValor) }>
            <Text style={styles.datas}> {data.date} </Text>

            <View style={styles.conteudo}>
                <Text style={styles.label}>{data.label}</Text>

               {mostrarValor ? (
                 <Text
                 style={data.type=== 1 ? styles.value : styles.despesas}
                >

                   {data.type=== 1 ? `R$ ${data.value}`: `R$ -${data.value}` }
                </Text>
               ): (
                <View style={styles.esqueleto}>
                </View>
               )}
            

            </View>

        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        marginBottom:24,
        borderBottomColor:'#DADADA',
    },
    conteudo:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    datas:{
        color:'#DADADA',
        fontWeight:'bold',
    },
    label:{
        fontWeight:'bold',
        fontSize:16,
    },
    value:{
        fontSize:16,
        color: '#2ecc71',
        fontWeight:'bold',
    },
    despesas:{
        fontSize:16,
        color: '#e74c3c',
        fontWeight:'bold',
    },
    esqueleto:{
        marginTop: 6,
        width:80,
        height:10,
        backgroundColor:'#DADADA',
        borderRadius:8,
    }


})