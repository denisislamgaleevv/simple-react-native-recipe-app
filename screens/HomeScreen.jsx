import { StatusBar } from 'expo-status-bar';
import {  
  Alert, 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  FlatList, 
  ActivityIndicator, 
  RefreshControl, 
  TouchableOpacity

} from 'react-native';
import {useState, useEffect} from 'react'; 
import axios from 'axios'
//import styled from 'styled-components/native'; 
export const HomeScreen =({navigation })=> {

  const [items, setItems] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('');
  const fetchReceipes = () =>{
    setIsLoading(true)
    axios.get('https://634969360b382d796c85cba6.mockapi.io/receipes')
    .then(({data}) => {
      setItems(data); 
    
    })
    .catch((err)=>{
      Alert.alert('Ошибка', 'Не удалось получить данные с сервера')
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  useEffect (fetchReceipes, []); 
  if (isLoading){
    return(
    <View style ={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>  
      <ActivityIndicator size = 'large'/> 
      <Text style = {{marginTop: 10}}>Загрузка рецептов...</Text>
    </View>
    );
  }
  const truncateTitle = (str) =>{
    if (str.length >= 50){
      return str.substring(0, 50) + '...'
    }
    return str;
  }
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
      <TextInput 
      
        style={styles.input}
        value = {searchValue} 
        onChangeText={text => setSearchValue(text)  } 
        placeholder="Поиск по названию"
      ></TextInput>
          </View>                      
         
         
         
        <View> 
           
          <View> 
          {  
          <FlatList 
          data = {items.filter((obj)=>  obj.title.toLowerCase().includes(searchValue.toLowerCase()) )} 
          refreshControl={<RefreshControl refreshing = {isLoading} onRefresh={fetchReceipes}/>}
          renderItem={({item}) => (
          
          <TouchableOpacity onPress = {() => navigation.navigate('FullReceipe', {id: item.id, title: item.title})}>  
            <View style={styles.receipePreview}>
            <Image 
            source = {{uri: item.image }}
                      
            style={styles.imagePreview}
            ></Image>
            <View  style={styles.receipeTextView}>  
                <Text style={styles.mainTextHead}>{item.title}</Text>
                <Text style={styles.mainTextDesc}> </Text>
                      
            </View>
            </View>
            </TouchableOpacity>
          )
          }/>
          }
          </View>
 
          
          </View>
         

       



      
    </View>
    

  );
}
    //  <StatusBar style="auto" />
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
  
     
  },
  inputContainer:{
    height: 50,
    
     
  }, 
  input:{
      
    zIndex: 3, 
    marginLeft: 10, 
    fontSize: 24, 
    backgroundColor: 'white', 
    height: 50, 
  }, 
  receipePreview:{
    
    flexDirection: 'row', 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(0, 0, 0, 0.5)', 
      
    
  }, 
  imagePreview:{
    width: 80,  
    height: 80, 
    borderRadius: 12, 
    marginRight: 12
  }, 
  receipeTextView:{
    flex: 1, 
     
    justifyContent: 'center', 
    flexDirection: 'column', 
  }, 
  mainTextHead: {
    fontWeight: 700, 
    fontSize: 18,
    justifyContent: 'center'
    
  }, 
  mainTextDesc: {
      
    fontSize: 14, 
    justifyContent: 'center'
  }, 
});






//<View style={styles.receipePreview}>
//<Image 
//source = {{uri:  'https://broniboy.ru/_next/image/?url=https%3A%2F%2Fimages.broniboy.ru%2Fp5MFD6y2cVrsFvfcYrfqsAQ5KO0%3D%2F600x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fown%2Fdb739fa6-aff6-4176-86ed-d2ff8b9fc3c9%2F8321178793ae72f8c20f1042a453e084.jpg&w=3840&q=90'}}
//
//style={styles.imagePreview}
//></Image>
// <View  style={styles.receipeTextView}>  
//    <Text style={styles.mainTextHead}>Курица с рисом</Text>
//    <Text style={styles.mainTextDesc}>30 минут</Text>
//
//</View>
//</View>

















