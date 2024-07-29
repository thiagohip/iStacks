import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ComponentActionButton, ComponentBackButton } from "../../components";
import { colors, styleDefault } from "../../styles"
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { Props } from '../../routes/stack.routes';


export const RegisterStack = ({navigation}: Props) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [stack, setStack] = useState('');

    const inputImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1,
        });
        setImageLoaded(result.canceled ? false : true);
    }

    return(
        <View style={styleDefault.containerScreen}>
            <View style={styles.container}>
                <Text style={styles.title}>Registrar stack</Text>
                <View style={styles.input}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.inputArea} placeholder="Digite o nome da stack" value={stack} onChangeText={setStack}keyboardType="email-address"></TextInput>
                </View>
                <View style={styles.inputImage}>
                    <View style={styles.imageInputLeft}><Text style={{color: colors.white}}>{imageLoaded ? ('Imagem carregada') : ('')}</Text></View>
                    <TouchableOpacity onPress={inputImage} style={styles.imageInputRight}><Text style={{color: colors.white}}>Enviar</Text></TouchableOpacity>
                </View>
                <ComponentActionButton text={"REGISTRAR"}/> 
            </View>
            <View style={styleDefault.back}>
                    <ComponentBackButton action={() => navigation.goBack()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 30,
        alignItems: "center",
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
        fontSize: 40,
        fontWeight: 'medium',
        marginBottom: 30
    },
    form: {
        marginBottom: 150,
        gap: 15,
    },

    inputImage: {
        flexDirection: 'row', 
    },
    imageInputLeft: {
        backgroundColor: "#404040",
        width: 220,
        height: 32,
        borderBottomStartRadius: 7,
        borderTopLeftRadius: 7,
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    imageInputRight: {
        backgroundColor: "#555555",
        width: 60,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 7,
        borderTopRightRadius: 7,
    }
})