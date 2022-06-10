import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { gStyle } from './style';


export default function CatPage() {
    return (
      <View style={gStyle.main}>
      <Image
        source={require('./img/fernesti.JPG')} style = {styles.logo2}
      />
        <Text>CatShop from Vova to Leksa</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo2: {
      width: 200,
      height: 200,
    },
    logo: {
      width: 66,
      height: 58,
    },
  
  });