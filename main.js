import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { gStyle } from './style';
import {useState, useEffect} from 'react'
import Card from "./Card";
import { catsGet } from "./api";

export default function Main({ navigation }) {
    const loadScene = () => {
        navigation.navigate('CatPage')
    }

    const loadScene2 = () => {
      navigation.navigate('Edit')
  }
  const [cats, setCats] = useState([]);

  useEffect(() => {
      const setNewCats = async () => {
          let res = await catsGet();
          console.log(res);
          setCats(res);
      };
      setNewCats();
  }, []);

    return (
      <View style={gStyle.main}>
        <ScrollView>

        <Text style={gStyle.title}>CatShop</Text>
            <Button title='Список Котиков' style={gStyle.button} color={'#336699'} onPress={loadScene2}/>
            <View style={gStyle.catRow}>
        {cats.map((el, index) => {
                return <Card key={index} cat={el} />;
            })}
            </View>
        <Button title='Контакты' color={'#336699'} onPress={loadScene}/>

      </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

  });