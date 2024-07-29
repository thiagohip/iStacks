import { NavigationContainer } from "@react-navigation/native"
import { MenuStack } from './stack.routes';

const Routes = () => {
    return(
        <NavigationContainer>
            <MenuStack />
        </NavigationContainer>
    )
}

export default Routes;