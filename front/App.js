import React from 'react';
import {View, StyleSheet, TextInput ,Button,Alert, Pressable,SafeAreaView,Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


const API_URL = `http://127.0.0.1:5500/pages/api/generateresp.js/api`;

export default function App (){ 
    const [texto, setTexto] = useState("");

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();
     
    const onSubmit = async () => { 
    

      if (loading){
        return;
      }
      setLoading(true);
      try {
       const response = await fetch(`${API_URL}/generateresp`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          }, 
          body: JSON.stringify({texto}),
          });
        const data = await response.json();
        setResult(data.result);
      } catch (e) {
        Alert.alert("Falha em detectar sentimento");
      } finally {
        setLoading(false);
        }
     };

     console.log(result);
    
    
    
    
    
    
    
     
     return(
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput placeholder="Digite uma frase"
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
        />
       <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>enviar</Text>
       </Pressable>




        <StatusBar style="auto"/>
      </View>
      </SafeAreaView>
    );
}
    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundcolor:"#fff",
        justifyContent:"center",
        padding: 10,
      },

      input:{
        fontSize: 16,
        borderColor: '#353740',
        borderWidth: 1,
        borderRadius: 4,
        padding: 16,
        marginTop: 6,
        marginBottom: 12,
      },

      button: {
        marginTop:"auto",
        backgroundColor:"#10a37f",
        padding: 16,
        borderRadius: 4,
        alignItems :"center",
        marginVertical: 6,

      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
      },
      
    });