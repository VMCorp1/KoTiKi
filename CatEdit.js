import React from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {catDelete, catAdd, catUpdate} from "./api";

export default function First({navigation}) {
    const [name, onChangeName] = React.useState("");
    const [description, onChangeDesc] = React.useState("");
    const [id, onChangeId] = React.useState("");
    const [img_link, onChangeImg] = React.useState("");
    const [UpImg_link, onChangeUpImg] = React.useState("");
    const [age, onChangeAge] = React.useState("");
    const [rate, onChangeRate] = React.useState("");
    const [UpRate, onChangeUpRate] = React.useState("");
    const [delId, onChangeDelId] = React.useState("");
    const [updId, onChangeUpdId] = React.useState("");
    const [updAge, onChangeUpdAge] = React.useState("");
    const [updDesc, onChangeUpdDesc] = React.useState("");
    return (
        <View
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        ><ScrollView>
            <Text
                style={{fontSize: 20, fontWeight: "bold"}}
            >
                Добавить кота
            </Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    placeholder="Напишите имя котика"
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeAge}
                    value={age}
                    placeholder="Напишите возраст котика"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDesc}
                    value={description}
                    placeholder="Напишите описание для котика"
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeId}
                    value={id}
                    placeholder="Напишите идентифиКОТор"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeRate}
                    value={rate}
                    placeholder="10 бальный рейтинг (Оценка котика)"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeImg}
                    value={img_link}
                    placeholder="Вставьте url-ссылку картинки"
                    keyboardType="url"
                />
                <Button
                    title="Добавить котика" color={'#336699'}
                    onPress={() => catAdd({name, age, id, img_link, description, rate})}
                />
            </SafeAreaView>
            <SafeAreaView>
                <Text
                    style={{fontSize: 20, fontWeight: "bold"}}
                >
                    Изменить кота
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpdId}
                    value={updId}
                    placeholder="Текущий ID"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpdAge}
                    value={updAge}
                    placeholder="Напишите новый возраст"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpdDesc}
                    value={updDesc}
                    placeholder="Напишите новое описание"
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpRate}
                    value={UpRate}
                    placeholder="Новый оценка"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUpImg}
                    value={UpImg_link}
                    placeholder="Вставьте url-ссылку картинки"
                    keyboardType="url"
                />
                <Button
                    title="Изменить котика?" color={'#336699'}
                    onPress={() =>
                        catUpdate(updId, {age: updAge, description: updDesc, rate: UpRate, img_link: UpImg_link})
                    }
                />
            </SafeAreaView>
            <SafeAreaView>
                <Text
                    style={{fontSize: 20, fontWeight: "bold"}}
                >
                    Удалить кота
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeDelId}
                    value={delId}
                    placeholder="ID для удаления"
                    keyboardType="numeric"
                />
                <Button title="Точно удалить котика?" color={'#336699'} onPress={() => catDelete(delId)}/>
            </SafeAreaView>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 55,
        margin: 12,
        borderWidth: 0.5,
        borderRadius: 8,
        padding: 10,
    },
});
