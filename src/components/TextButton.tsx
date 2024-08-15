import { TouchableOpacity,  Text } from "react-native"
import { styleDefault } from "../styles"

interface IButton{
    action?: any;
    text: string;
}

export const TextButton = ({action, text}: IButton) =>{
    return(
        <TouchableOpacity onPress={action}>
            <Text style={styleDefault.textDefault}>{text}</Text>
        </TouchableOpacity>
    )
}