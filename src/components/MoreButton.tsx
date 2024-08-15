import { TouchableOpacity, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import {colors, styleDefault} from '../styles';
import Icon from "react-native-vector-icons/FontAwesome6";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

interface IAddButton{
    isPressedI: boolean
    setPressedI?: React.Dispatch<React.SetStateAction<boolean>>
}


export const MoreButton = ({isPressedI, setPressedI}: IAddButton) => {

    const rotate = useSharedValue('0deg');

    if(!isPressedI){
        rotate.value = withSpring(0 + 'deg', {duration: 800}) 
    }else{
        rotate.value = withSpring(-45 + 'deg', {duration: 800}) 
    }

    const onPressed = () => {    
        if(setPressedI) {setPressedI(!isPressedI);}
    }

    return(
        <View style={styles.button}>
                <Animated.View style={{transform: [{rotate}]}}>
                    <TouchableWithoutFeedback onPress={onPressed}>
                    <Icon name="plus" size={40} color={colors.black} />
                </TouchableWithoutFeedback>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
        right: 30,
    }
})


