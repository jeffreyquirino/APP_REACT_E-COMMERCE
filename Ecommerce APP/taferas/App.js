import React from 'react'; //Importando o React native para poder importar os componentes. 
import { View, Text, StyleSheet} from 'react-native'; //Importando algumas tags específicas do react native 

//Criando o primeiro componente "App" em forma de função a:
export default function App() { 
  return(
  //Container do jsx(o jsx so é reconhecido porque importamos o REACT).   
    <View style={styles.container}>
      <Text style={styles.titulo}> Ecomerce App </Text>
      <Text style={styles.descricao}> Created by jeff e baiha </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ff0000',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  titulo:{
    fontSize:30, 
    color:'#FFF'
  },
  descricao:{
    fontSize: 20,
    color: '#00ff',
  }
});