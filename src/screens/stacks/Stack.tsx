import {View, Image, Text, StyleSheet, FlatList} from 'react-native'
import {colors, fonts, styleDefault} from '../../styles'
import { StackProps } from '../../routes/stack.routes';
import { ComponentTextButton, ComponentMoreButton } from "../../components"
import { useEffect, useState } from 'react';
import { useAuth } from '../../services/contexts/Auth';
import { IStacks } from '../../services/data/Stack';

export const Stack = ({navigation, route}: StackProps) => {

    const {signOut, userStacks} = useAuth();
    const [isPressed, setPressed] = useState(false);

    const stacks = userStacks?.stacks;

    function overlayController(isPressed:boolean){
        return (isPressed ? <View style={styles.overlay}/> : null)
    }

    function moreActionsController(isPressed:boolean){
        return (isPressed ? 
            <View style={styles.more_actions}>
                <ComponentTextButton text={"Adicionar stack"} action={() => navigation.navigate("AddStackScreen")}/>
                <ComponentTextButton text={"Solicitar stack"} action={() => navigation.navigate("RequestStackScreen")}/>
                <ComponentTextButton text={"Registrar stack"} action={() => navigation.navigate("RegisterStackScreen")}/>
                <ComponentTextButton text={"Sair"} action={() => signOut()}/>
            </View>
            : null
        )
    }

    interface itemStacks {
        item: IStacks;
    }

    const renderItem = ({ item }: itemStacks) => {
        return (
            <View style={styles.language}>
                <Image source={{}}></Image>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        );
      };

    return(
        <View style={styleDefault.containerScreen}>
<View style={styles.container}>
    
                    {
                    stacks && stacks.length > 0 && (
                    <FlatList
                        data={stacks}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.id)}
                    />
                    )}
    
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
        marginTop: 50,
    },

    language: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
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

function useStack() {
    throw new Error('Function not implemented.');
}
