import React from "react";
import { StyleSheet, Text, View , Image} from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>


            <View style={styles.cardContent}>
            <Image source = {{uri: props.cat.img_link}} style = {styles.tinyLogo}/>
                <Text>Имя: {props.cat.name}</Text>
                <Text>Возраст: {props.cat.age}</Text>
                <Text>Описание: {props.cat.description}</Text>
                <Text>ID: {props.cat.id}</Text>
                <Text>Рейтинг: {props.cat.rate}/10</Text>
                
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        width: 275,
        display: 'inline-block',
        elevation: 4,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.4,
        shadowRadius: 3,
        marginHorizontal: 3,
        marginVertical: 5,
    },
    cardContent: {
        marginHorizontal: 17,
        marginVertical: 19,
    },

    container: {
        paddingTop: 55,
      },
      tinyLogo: {
        width: 240,
        height: 240,
      },
      logo: {
        width: 66,
        height: 57,
      },

});
