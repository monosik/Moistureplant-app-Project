import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Welcome from "../screens/Welcome";
import TestMoisture from "../screens/TestMoisture";

const Screens = createSwitchNavigator({
    Welcome,
    TestMoisture
});

export default createAppContainer(Screens);