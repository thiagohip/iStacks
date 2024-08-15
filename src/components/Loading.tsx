import LottieView from "lottie-react-native"


export const Loading = () =>{


    return(
        <LottieView 
            source={require('../assets/Lotties/Loading.json')}
            style={{ width: "100%", height: "100%"}}
            autoPlay
            loop
        />
    )
}