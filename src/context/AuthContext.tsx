import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signUp, signIn, signOut, checkIsLoggedIn} from '../services/Auth';
import {User} from '@supabase/supabase-js';
import {AuthContextProps} from '../model/AuthContextProps';



export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(() => {
    const fetchAuthState = async () => {
      setLoading(true);
      const loggedIn = await checkIsLoggedIn();
      if (loggedIn) {
        const storedUser = await AsyncStorage.getItem('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
        setIsLoggedIn(true);
      }
      setLoading(false);
    };
    fetchAuthState();
  }, []);

  const handleSignUp = async (email: string, password: string,username:string) => {
    const newUser = await signUp(email, password,username);
    if (newUser) {
      setUser(newUser);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('user', JSON.stringify(newUser));
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
    //   navigation.navigate('signin');
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    const loggedInUser = await signIn(email, password);
    //  navigation.navigate('tap');
  
    if (loggedInUser) {
      setUser(loggedInUser);
      setIsLoggedIn(true);
       console.log('loggedUser' + loggedInUser?.email);
       console.log('usernname' + loggedInUser?.user_metadata?.username);
    }
  };

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        loading,
        signUp: handleSignUp,
        signIn: handleSignIn,
        signOut: handleSignOut,
      }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
