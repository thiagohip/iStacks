import { View, StyleSheet, Text, Alert } from "react-native"
import { styleDefault, colors } from "../../styles"
import { ComponentActionButton, ComponentBackButton } from "../../components"
import {Controller, useForm} from "react-hook-form"
import RNPickerSelect, { Item } from "react-native-picker-select"
import { Props } from "../../routes/stack.routes"
import apiStack, { IStacks } from "../../services/data/Stack"
import { useEffect, useState } from "react"
import { useAuth } from "../../services/contexts/Auth"
import apiUser, { IAddStackRequest } from "../../services/data/User"
import { useNavigation } from "@react-navigation/native"
import { api } from "../../services/api"
import { AxiosError } from "axios"

export const AddStack = () => {

    const navigation = useNavigation();

    const { handleSubmit, control} = useForm<IAddStackRequest>();

    const [stacks, setStacks] = useState<IStacks[]>();
    const {setLoading, authData} = useAuth();


    

    useEffect(() => {
        setLoading(true);
        async function loadStacks() {
            const response = await apiStack.stacks();
            setStacks(response.data["stacks"]);
        }
        setLoading(false);
        loadStacks();
    }, [])

    

    function getOptions(): Item[]{
        const options:Item[] = [];
        if(stacks){
            stacks.forEach(element => {
                options.push({label: element.name, value: element.id});
            });
        }
        return options;
    }

    async function onSubmit(data: IAddStackRequest) {
        if(authData){const stack_id = data.stack_id;
        const user_id = authData?.user.id;
        setLoading(true);
            try {
                await apiUser.addStack({stack_id, user_id});
                navigation.goBack();
            } catch (error) {
                const err = error as AxiosError;
                const msg = err.response?.data as string;
                Alert.alert(msg);
            }
            setLoading(false);}
        }

      
        /*
    async function onSubmit(data: IAddStackRequest){

        if(authData){
            api.defaults.headers.common.Authorization = `Bearer ${authData.access_token ? authData.access_token : ""}`
        }

        console.log(data);

        try{
            const response = await apiUser.addStack(data);
            console.log(response)
        }catch(err){
            console.log(err)
        }
        
        
        navigation.goBack();
    }*/

    
    return(
        <View style={styleDefault.containerScreen}>

            <View style={{gap: 30, alignItems: "center"}}>
                <Text style={styles.title}>Adicionar stack</Text>
                    <Controller
                        control={control}
                        name="stack_id"
                        render={({ field: { onChange, value } }) => (
                            <RNPickerSelect
                                onValueChange={onChange}
                                items={getOptions()}
                                
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
                    >
                    </Controller>

                <ComponentActionButton text={"ADICIONAR"} action={handleSubmit(onSubmit)}/>
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