import {View, Image, Text, StyleSheet} from 'react-native'
import {colors, fonts, styleDefault} from '../../styles'
import { StackProps } from '../../routes/stack.routes';
import { ComponentTextButton, ComponentMoreButton } from "../../components"
import { useState } from 'react';


export const Stack = ({navigation, route}: StackProps) => {

    const [isPressed, setPressed] = useState(false);

    function overlayController(isPressed:boolean){
        return (isPressed ? <View style={styles.overlay}/> : null)
    }

    function moreActionsController(isPressed:boolean){
        return (isPressed ? 
            <View style={styles.more_actions}>
                <ComponentTextButton text={"AddStack"} action={() => navigation.navigate("AddStackScreen")}/>
                <ComponentTextButton text={"RequestStack"} action={() => navigation.navigate("RequestStackScreen")}/>
                <ComponentTextButton text={"RegisterStackScreen"} action={() => navigation.navigate("RegisterStackScreen")}/>
                <ComponentTextButton text={"LoginScreen"} action={() => navigation.navigate("LoginScreen")}/>
                <ComponentTextButton text={"RegisterScreen"} action={() => navigation.navigate("RegisterScreen")}/>
                <ComponentTextButton text={"LoginRegisterScreen"} action={() => navigation.navigate("LoginRegisterScreen")}/>
            </View>
            : null
        )
    }

    const {text, image} = route.params;

    return(
        <View style={styleDefault.containerScreen}>
            <View style={styles.language}>
                <Image source={image}></Image>
                <Text style={styles.text}>{text}</Text>
            </View>
            {overlayController(isPressed)}
            {moreActionsController(isPressed)}
            <ComponentMoreButton isPressedI={isPressed} setPressedI={setPressed}/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },

    language: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 120
    },
    
    text: {
        color: colors.primary,
        fontSize: 40,
        fontFamily: fonts.regular,
    },

    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
    },

    more_actions: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "absolute",
        bottom: 120,
        right: 30,
        gap: 8,
    }
});