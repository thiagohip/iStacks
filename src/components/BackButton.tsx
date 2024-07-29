import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {colors} from '../styles';
import Icon from "react-native-vector-icons/Ionicons";

interface IAddButton{
    action?: any;
}

export const BackButton = ({action}: IAddButton) => {

    return(
        <TouchableOpacity onPress={action}>
            <View style={styles.button}>
                <Icon name="arrow-back" size={40} color={colors.black} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    }
})