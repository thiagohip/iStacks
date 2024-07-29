import { View, StyleSheet, Text } from "react-native"
import { styleDefault, colors } from "../../styles"
import { ComponentActionButton, ComponentBackButton } from "../../components"
import {Controller, useForm} from "react-hook-form"
import RNPickerSelect from "react-native-picker-select"
import { Props } from "../../routes/stack.routes"


export const AddStack = ({navigation}: Props) => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    
    return(
        <View style={styleDefault.containerScreen}>

            <View style={{gap: 30, alignItems: "center"}}>
                <Text style={styles.title}>Adicionar stack</Text>
                <View>
                    <Controller
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                        <RNPickerSelect
                            onValueChange={onChange}
                            items={[
                            { label: 'Opção 1', value: '1' },
                            { label: 'Opção 2', value: '2' },
                            { label: 'Opção 3', value: '3' },
                            ]}
                            value={value}
                            placeholder={{
                                label: "Selecione uma stack...",
                                value: null,
                            }}
                            style={{
                                inputIOS: styles.input,
                                inputAndroid: styles.input,
                            }}
                        />
                        )}
                        name="select"
                        defaultValue=""
                    />
                </View>
            

                <ComponentActionButton text={"ADICIONAR"}/>
            </View>
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
    },
    input: {
        backgroundColor: "#404040",
        width: 280,
        height: 32,
        justifyContent: 'center',
        borderRadius: 10,
        color: colors.white
    },

    title: {
        color: colors.primary,
        fontSize: 40,
        fontWeight: 'medium',
        marginBottom: 30
    },

})