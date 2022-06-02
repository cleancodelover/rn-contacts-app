import React, {useContext, ActivityIndicator} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavContainer = () => {
  const [isAuthenticaed, setIsAuthenticaed] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setIsAuthenticaed(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticaed(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
  }, []);

  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAuthenticaed ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
