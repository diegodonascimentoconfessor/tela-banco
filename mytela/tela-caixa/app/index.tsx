import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from "expo-router"; // Importando o hook para navegação

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Texto superior */}
      <View style={styles.header}>
        <Text style={styles.headerText}>É POR VOCÊ.</Text>
        <Text style={styles.headerText}>É POR TODO O BRASIL.</Text>
      </View>

      {/* Logo Caixa */}
      <Text style={styles.logo}>CAIXA</Text>

      {/* Texto de boas-vindas */}
      <Text style={styles.welcomeText}>Que bom ter você aqui!</Text>

      {/* Botão de Acessar conta */}
      <Pressable 
        style={styles.accessButton} 
        onPress={() => router.push('/about')} 
      >
        <Text style={styles.accessButtonText}>Acessar sua conta</Text>
      </Pressable>

      {/* Link para Cadastrar Usuário */}
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
    backgroundColor: '#005AA7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  logo: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    textShadowColor: '#FFA500', 
    textShadowOffset: { width: 3, height: 3}, 
    textShadowRadius: 3, 
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 40,
  },
  accessButton: {
    backgroundColor: '#FFA500',
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
