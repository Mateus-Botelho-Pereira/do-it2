import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { AddPostIt } from "../screens/AddPostIt";
import { EditPostIt } from "../screens/EditPostIt";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name="Home" component={Home}/>
      <Screen name="AddPostIt" component={AddPostIt}/>
      <Screen name="EditPostIt" component={EditPostIt}/>
    </Navigator>
  );
}