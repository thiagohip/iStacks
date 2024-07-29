import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../styles"

export interface IActionButton{
    text: string
    action?: any
}

export const ActionButton = ({text, action}: IActionButton) => {
    return(
        <TouchableOpacity onPress={action} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#5500C1",
        borderRadius: 22,
        height: 48,
        width: 140,
    },
    text: {
        color: colors.white,
        fontSize: 20,
    }
})