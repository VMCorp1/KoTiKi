import React from "react";
import Main  from "./main";
import CatPage from './CatPage'
import CatEdit from './CatEdit'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{title: 'Главная'}}
                    />
                <Stack.Screen
                    name="CatPage"
                    component={CatPage}
                    options={{title: 'Главная'}}
                    />
                <Stack.Screen name='Edit' component={CatEdit} options={{title: 'Изменение'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}