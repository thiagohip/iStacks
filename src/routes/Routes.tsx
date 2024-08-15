import { NavigationContainer } from "@react-navigation/native"
import { MenuStack } from './stack.routes';
import { useContext } from "react";
import { AuthContext, useAuth } from "../services/contexts/Auth";

const Routes = () => {

    const {authData} = useAuth();

    return(
        <NavigationContainer>
            <MenuStack auth={authData ? true : false}/>
        </NavigationContainer>
    )
}

export default Routes;