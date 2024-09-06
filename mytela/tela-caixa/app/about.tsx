import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons'; // Importando os ícones

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Campo de Usuário com ícone */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={20} color="#005AA7" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#B0B0B0"
        />
      </View>

      {/* Campo de Senha com ícone e mostrar/ocultar senha */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="lock" size={20} color="#005AA7" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="#B0B0B0"
        />
        <Pressable onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <FontAwesome5 name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#005AA7" />
        </Pressable>
      </View>

      {/* Opções de Pessoa Física ou Jurídica */}
      <View style={styles.radioContainer}>
        <Pressable style={styles.radioButton}>
          <Text style={styles.radioText}>Pessoa Física</Text>
        </Pressable>
        <Pressable style={styles.radioButton}>
          <Text style={styles.radioText}>Pessoa Jurídica</Text>
        </Pressable>
      </View>

      {/* Link para recuperar usuário ou senha */}
      <Pressable onPress={() => alert('Recuperar usuário ou senha')}>
        <Text style={styles.linkText}>Não sei meu usuário ou senha</Text>
      </Pressable>

      {/* Botões de Ação */}
      <Pressable style={styles.accessButton} onPress={() => router.push('/paginaDesejada')}>
        <Text style={styles.accessButtonText}>Acessar sua conta</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => router.push("/index")}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#005AA7',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  radioText: {
    color: '#005AA7',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#005AA7',
    textAlign: 'center',
    marginBottom: 20,
  },
  accessButton: {
    backgroundColor: '#FFA500', // Laranja
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  accessButtonText: {
    color: '#FFFFFF', // Texto branco
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FFA500', // Laranja
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF', // Texto branco
    fontWeight: 'bold',
  },
});
