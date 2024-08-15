import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { StackScreen, AddStackScreen, RequestStackScreen, RegisterStackScreen, LoginScreen, RegisterScreen, LoginRegisterScreen } from "../screens";
import { RouteProp } from "@react-navigation/native";

type MenuStackParam = {
    StackScreen: {text: string, image: any};
    AddStackScreen: undefined;
    RequestStackScreen: undefined;
    RegisterStackScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    LoginRegisterScreen: undefined;
}

type StackScreenNavigation = StackNavigationProp<MenuStackParam, "StackScreen">
type DetailsScreenRouteProp = RouteProp<MenuStackParam, 'StackScreen'>;

type ScreenNavigation = StackNavigationProp<MenuStackParam>

export type StackProps = {
    navigation: StackScreenNavigation;
    route: DetailsScreenRouteProp;
}

export type Props = {navigation: ScreenNavigation}

export function MenuStack({auth}: {auth: boolean}){
    
    const Stack = createStackNavigator<MenuStackParam>();

    if(auth){
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="StackScreen" component={StackScreen} initialParams={{text: "C++", image: require("../assets/cpp.png")}}/>
                <Stack.Screen name="AddStackScreen" component={AddStackScreen}/>
                <Stack.Screen name="RequestStackScreen" component={RequestStackScreen}/>
                <Stack.Screen name="RegisterStackScreen" component={RegisterStackScreen}/>
            </Stack.Navigator>
        )
    }else{
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
            </Stack.Navigator>
        )
    }

}