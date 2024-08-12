import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

const sushi = require("./assets/sushi.jpg")

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={sushi} style={styles.image}></Image>

      <Text style={styles.title}>SUSHI DA DUDA</Text> 

      <View style={styles.areaInput}>
        <TextInput style={styles.input} placeholder='digite seu email'></TextInput>
        <TextInput style={styles.input} placeholder='digite sua senha'></TextInput>
      </View>

      <View style={styles.bottom}>
        <Text>Caso não tenha cadastro, clique aqui</Text>
        <View style={styles.areaButton}>
          <Button style={styles.botao}
          title="Acessar"
          onPress={() =>{
            Alert.alert("Acesso Permitido!")
          }}/>
          <Button
          title="Finalizar"
          onPress={() =>{
            Alert.alert("Saiu do Projeto!")
          }}/>
        </View>
      </View>
      <StatusBar style="auto" /> 
    </View> // view = div,main,container / text = label
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    top: 0,
  },
  title: {
    marginTop: 150,
    fontSize: 40,
    marginBottom: 20
  },
  areaInput: {
    width: '60%',
    height: '20%',
    gap: 25,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 6,
    borderRadius: 10,
  },
  areaButton: {
    flexDirection: 'row',
    gap: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottom:{
    height: '10%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center'
  },
});

