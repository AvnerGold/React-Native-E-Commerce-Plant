
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import ProductsContextProvider from './Context/ItemsContext';
import Store from './screens/Store';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import InOrder from './adminScreens/InOrder';
import InPackage from './adminScreens/InPackage';
import CReceived from './adminScreens/CReceived';

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();




const AdminTabs = () => {
  return (
    <Tab.Navigator>
    
      <Tab.Screen
        name="InOrder"
        component={InOrder}
      />
      <Tab.Screen
        name="InPackage"
        component={InPackage}
      />
       <Tab.Screen
        name="CReceived"
        component={CReceived}
      />    
    </Tab.Navigator>
  );
};

const UserTabs = () => {
  return (
    <Tab.Navigator>
       <Tab.Screen
        name="store"
        component={Store}
      />
     <Tab.Screen
        name="Cart"
        component={Cart}
      />
        <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};


export default function App() {
  return (
    <ProductsContextProvider>
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="AdminTabs" component={AdminTabs} />
      <stack.Screen name="UserTabs" component={UserTabs} />
      <stack.Screen name="Cart" component={Cart} />
      <stack.Screen name="Profile" component={Profile} />   
      </stack.Navigator>
    </NavigationContainer>    
    </ProductsContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
