import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { FullReceipe } from "./FullReceipe";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export const Navigation = () =>{
    return (  
    <NavigationContainer>  
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component={HomeScreen} options={{title: 'Рецепты'}}/>
            <Stack.Screen name = 'FullReceipe' component={FullReceipe} options={{title: 'Рецепт'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
    
};