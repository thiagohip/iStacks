import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ComponentActionButton, ComponentBackButton } from "../components";
import { colors, styleDefault } from "../styles"
import { Props } from '../routes/stack.routes';
import apiStack from '../services/data/Stack';

export const LoginRegister = ({navigation}: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <View style={styleDefault.containerScreen}>
            <View style={styles.container}>
                <Text style={styles.title}>iStack</Text>
                <ComponentActionButton text={"LOGAR"} action={() => navigation.navigate("LoginScreen")}/>
                <ComponentActionButton text={"REGISTRAR"} action={() => navigation.navigate("RegisterScreen")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 30,
        paddingTop: 150,
    },
    input: {
        alignItems: 'center',
        gap: 10,
    },

    inputArea: {
        backgroundColor: colors.white,
        borderRadius: 15,
        width: 280,
        height: 32,
        paddingHorizontal: 10
    },
    label: {
        color: colors.white,
        fontSize: 20,
    },
    title: {
        color: colors.primary,
        fontSize: 50,
        fontWeight: 'medium',
        marginBottom: 30
    },
    form: {
        marginBottom: 150,
        gap: 15,
    }
})