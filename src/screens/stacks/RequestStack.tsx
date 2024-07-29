import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ComponentActionButton, ComponentBackButton } from "../../components";
import { colors, styleDefault } from "../../styles"
import { Props } from '../../routes/stack.routes';


export const RequestStack = ({navigation}: Props) =>{

    const [stack, setStack] = useState('');

    return(
        <View style={styleDefault.containerScreen}>
            <Text style={styles.title}>Solicitar stack</Text>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.label}>Stack</Text>
                    <TextInput style={styles.inputArea} placeholder="Digite o nome da stack" value={stack} onChangeText={setStack}keyboardType="email-address"></TextInput>
                </View>
            </View>
            <ComponentActionButton text={"SOLICITAR"}/>
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