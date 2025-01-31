import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const tamanhoStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 44 : 64;

export default function SegTela() {
  const navigation = useNavigation();
  const [valor, setValor] = useState('');
  const [anos, setAnos] = useState('');
  const [resultadoMensal, setResultadoMensal] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar o modal

  const calcularMensal = () => {
    const valorTotal = parseFloat(valor) || 0;
    const totalMeses = (parseFloat(anos) || 0) * 12;

    if (totalMeses === 0) {
      setResultadoMensal(0);
      return;
    }

    const resultado = valorTotal / totalMeses;
    setResultadoMensal(resultado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textocabeca}>SIMULE JÁ A SUA ECONOMIA</Text>

      <View style={styles.form}>
        {/* Input Valor Total */}
        <Text style={styles.label}>Valor total desejado R$</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ex: 50000"
          value={valor}
          onChangeText={setValor}
          placeholderTextColor='#999'
        />

        {/* Input Anos */}
        <Text style={styles.label}>Período em anos</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ex: 5"
          value={anos}
          onChangeText={setAnos}
          placeholderTextColor='#999'
        />

        {/* Botão de Calcular */}
        <TouchableOpacity
          style={styles.botaoCalcular}
          onPress={calcularMensal}
        >
          <Text style={styles.textoBotao}>CALCULAR</Text>
        </TouchableOpacity>

        {/* Bloco de Resultado */}
        {resultadoMensal !== null && (
          <View style={styles.blocoResultado}>
            <Text style={styles.textoResultado}>
              Valor mensal necessário:
            </Text>

            <Text style={styles.valorResultado}>
              R$ {resultadoMensal.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
            </Text>

            {/* Botão para abrir o modal */}
            <TouchableOpacity
              style={styles.botaoDebito}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textoBotaoDebito}>
                Adicionar ao Débito Automático
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Modal (pop-up) */}
      <Modal
        animationType="slide" // ou "fade", "none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Débito automático configurado com sucesso!</Text>
            <TouchableOpacity
              style={styles.botaoFechar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBotaoFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Botão de Voltar */}
      <TouchableOpacity
        style={styles.botaovolta}
        onPress={() => navigation.navigate('Home')}
      >
        <View style={styles.areabotao}>
          <AntDesign name="leftcircle" size={40} color="#FFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2688de',
    paddingTop: tamanhoStatusBar,
    flex: 1,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  textocabeca: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingEnd: 16,
    paddingStart: 16,
  },
  form: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  label: {
    color: '#2688de',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f0f4ff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  botaoCalcular: {
    backgroundColor: '#2688de',
    borderRadius: 6,
    padding: 14,
    marginTop: 12,
    alignItems: 'center',
    elevation: 3,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  blocoResultado: {
    backgroundColor: '#e8f2ff',
    borderRadius: 6,
    padding: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  textoResultado: {
    color: '#2688de',
    fontSize: 16,
    marginBottom: 6,
  },
  valorResultado: {
    color: '#2688de',
    fontSize: 22,
    fontWeight: 'bold',
  },
  botaoDebito: {
    backgroundColor: '#1a5c9e',
    borderRadius: 6,
    padding: 12,
    marginTop: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    elevation: 2,
  },
  textoBotaoDebito: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  botaoFechar: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
  },
  textoBotaoFechar: {
    color: '#FFF',
    fontSize: 16,
  },
  botaovolta: {
    position: 'absolute', // Posicionamento absoluto
    bottom: 20, // Distância do fundo da tela
    left: 20, // Distância da esquerda da tela
  },
  areabotao: {
    alignItems: 'center',
  },
});