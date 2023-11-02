
import Main from './Pages/Main/page'
import Info from './Pages/Info/page'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate () {

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={ Main }
        options={ { headerShown: false, animationEnabled: false } }
        initialParams={[]}
      />
      <Stack.Screen
        name="Info"
        component={ Info }
        options={ { headerShown: false, animationEnabled: false } }
        initialParams={[]}
      />
    </Stack.Navigator>
  </NavigationContainer>

}
