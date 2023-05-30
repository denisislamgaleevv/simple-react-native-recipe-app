 
import { ActivityIndicator, StyleSheet, Image, Text, View, Alert} from 'react-native';
 
import {useState, useEffect} from 'react'; 
import axios from 'axios';
//import styled from 'styled-components/native'; 
export const FullReceipe = ({route, navigation}) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const {id, title} = route.params;
  useEffect(()=>{
    navigation.setOptions({
      title,
    });
    axios.get('https://634969360b382d796c85cba6.mockapi.io/receipes/'+id)
        .then(({data}) => {
          setData(data); 
          
        })
        .catch((err)=>{
        Alert.alert('Ошибка', 'Не удалось получить данные с сервера')
        }).finally(()=>{
        setIsLoading(false)
        })
  }, [])
  if (isLoading){
    return(
    <View style ={{
      
      justifyContent: 'center', 
      alignItems: 'center', 
      marginTop: '100%'
    }}>  
      <ActivityIndicator size = 'large'/> 
      <Text style = {{marginTop: 10}}>Загрузка рецепта...</Text>
    </View>
    );
  }
  return (
    <View style = {styles.fullReceipeTextView}>


      
    <Image style = {styles.imageFullReceipe} source ={{uri:  data.image}} />
     <Text style = {styles.imageFullReceipeText}> {data.instructions} </Text>
    </View>
  );
}
     
 
const styles = StyleSheet.create({
  
   
  imageFullReceipe:{
    width: '60%', 
    marginLeft: '20%',  
    marginBottom: '10%',  
    height: 200, 
    borderRadius: 12, 
       
  }, 
  fullReceipeTextView:{
    
    marginLeft: '2%',   
    marginRight: '2%', 
    marginTop: '20%', 
    justifyContent: 'center', 
    textAlign: 'center', 
    flexDirection: 'column', 
  }, 
  imageFullReceipeText:{
    fontSize: 13
  }
});
















 
















