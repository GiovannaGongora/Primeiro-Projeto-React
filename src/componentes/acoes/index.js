import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default function Action (){
    return (
        <ScrollView style={styles.container} horizontal ={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.acaobotao}> 
                <View style={styles.areabotao}>
                    <AntDesign name="addfolder" size={26} color="#000"/>
                </View>

                <Text style={styles.labelbotao}> Entradas </Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.acaobotao}> 
                <View style={styles.areabotao}>
                    <AntDesign name="tagso" size={26} color="#000"/>
                </View>

                <Text style={styles.labelbotao}> Compras </Text>
            </TouchableOpacity>




            <TouchableOpacity style={styles.acaobotao}> 
                <View style={styles.areabotao}>
                    <AntDesign name="creditcard" size={26} color="#000"/>
                </View>

                <Text style={styles.labelbotao}> Cartôes </Text>
            </TouchableOpacity>




            <TouchableOpacity style={styles.acaobotao}> 
                <View style={styles.areabotao}>
                    <AntDesign name="barcode" size={26} color="#000"/>
                </View>

                <Text style={styles.labelbotao}> Compras </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.acaobotao}> 
                <View style={styles.areabotao}>
                    <AntDesign name="setting" size={26} color="#000"/>
                </View>

                <Text style={styles.labelbotao}> Conta </Text>
            </TouchableOpacity>


        </ScrollView> 
    );

}

const styles=StyleSheet.create({
    container:{
        maxHeight:84,
        marginBottom:14,
        marginTop:14,
        paddingEnd:14,
        paddingStart:14,
    },
    acaobotao:{
        alignItems:'center',
        marginRight:32,
    },
    areabotao:{
        backgroundColor:'#ecf0f1',
        height:60,
        width:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
    labelbotao:{
        marginTop:4,
        textAlign:'center',
        fontWeight:'bold',
    }
    


})