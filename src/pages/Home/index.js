import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../componentes/header';
import Balanco from '../../componentes/balanco';
import Movimentacoes from '../../componentes/movimentacoes';
import Action from '../../componentes/acoes';
import { useNavigation } from '@react-navigation/native';




const lista = [{
  id: 1,
  label: 'Ingresso de Cinema',
  value: '23,00',
  date: '10/01/2025',
  type: 0 //gasto
}, 
{
  id: 2,
  label: 'Mercado ',
  value: '790,00',
  date: '23/01/2025',
  type: 0 //gasto

},
{
  id: 3,
  label: 'Pagamento ',
  value: '10.000,00',
  date: '28/01/2025',
  type: 1 //gasto
},

]

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <Header name="Giovanna"/>
      <Balanco saldo="9.187,00" gastos="-813,00" />
      
      <Action/>

      <Text style={styles.tituloMov}> Ultimas Movimentações</Text>
      <FlatList 
      style={styles.list} 
      data={lista}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false} 
      renderItem={ ({item}) => <Movimentacoes data={item} /> } 
      />

      <TouchableOpacity style={styles.simulacao} onPress={   ( ) =>  navigation.navigate('SegTela')   }>

        <Text style={styles.textobotao}> Simule uma poupança!</Text>
      </TouchableOpacity>

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
 
  },
  tituloMov:{
    fontSize:22,
    fontWeight: 'bold',
    marginLeft:14,
    marginRight: 14,
    marginTop: 14,
    marginBottom:14,
    margin:14,

  }, 
  list:{
    marginStart: 14,
    marginEnd: 14,

  }, 
  simulacao:{
    backgroundColor: '#58bf5a', // Cor de fundo
    paddingVertical: 20,        // Altura do botão
    borderRadius: 80,           // Bordas arredondadas
    marginHorizontal: 12,       // Margem lateral
    marginVertical: 12,         // Margem vertical
    width: '89%',              // Largura total do container pai
    alignSelf: 'center',        // Centralização
    elevation: 3,               // Sombra no Android
  },
  textobotao:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  }
});
