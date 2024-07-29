import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ComponentActionButton, ComponentBackButton } from "../components";
import { colors, styleDefault } from "../styles"
import { Props } from '../routes/stack.routes';


export const Register = ({navigation}: Props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styleDefault.containerScreen}>
            <Text style={styles.title}>Registro</Text>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.inputArea} placeholder="Digite seu nome" value={name} onChangeText={setName}keyboardType="email-address"></TextInput>
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.inputArea} placeholder="Digite seu email" value={email} onChangeText={setEmail}keyboardType="email-address"></TextInput>
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.inputArea} placeholder="Digite sua senha" value={password} onChangeText={setPassword}secureTextEntry={true} autoCorrect={false} autoCapitalize="none"></TextInput>
                </View> 
            </View>
            <ComponentActionButton text={"REGISTRAR"}/>
            <View style={styleDefault.back}>
                <ComponentBackButton action={() => navigation.goBack()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
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