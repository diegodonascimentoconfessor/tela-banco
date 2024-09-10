import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();


  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logoc.png')}
        resizeMode='cover'
        style={styles.Image}
      />

      <View style={styles.header}>
        <Text style={styles.headerText}>É POR VOCÊ.</Text>
        <Text style={styles.headerText}>É POR TODO O BRASIL.</Text>
      </View>

      <Image 
        source={require('../assets/modelo.png')}
        resizeMode='contain'
        style={styles.modelo}
      />

      <Text style={styles.logo}>CAIXA</Text>

      <Text style={styles.welcomeText}>Que bom ter você aqui!</Text>

      <Pressable 
        style={styles.accessButton} 
        onPress={() => router.push('/about')} 
      >
        <Text style={styles.accessButtonText}>Acessar sua conta</Text>
      </Pressable>

      <Pressable 
        style={styles.registerButton} 
        onPress={() => router.push('/cadastrar-usuario')} 
      >
        <Text style={styles.registerText}>Cadastrar usuário {'>'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005999',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  Image: {
    width: 50, 
    height: 50, 
    alignSelf: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modelo: {
    width: 500, 
    height: 230, 
    justifyContent: 'center',  
    alignSelf: 'center',  
    marginBottom: 20,
    marginRight: 150,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    textShadowColor: '#F85900', 
    textShadowOffset: { width: 3, height: 3}, 
    textShadowRadius: 3, 
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 40,
  },
  accessButton: {
    backgroundColor: '#F85900',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  accessButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButton: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
