import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from '../../lib/subabase'; 
import { AuthError, Session, User } from '@supabase/supabase-js';

export const signUp = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const { data, error }: { data: { user: User | null; session: Session | null }; error: AuthError | null } =
      await supabase.auth.signUp({ email, password });

    if (error) {
      throw new Error(error.message);
    }

    return data.user;
  } catch (error) {
    console.error('Sign-up error:', error);
    return null;
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const { data, error }: { data: { user: User | null; session: Session | null }; error: AuthError | null } =
      await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      throw new Error(error.message);
    }

    const user = data.user;

    if (user) {

      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
      await AsyncStorage.setItem('user', JSON.stringify(user));
    }

    return user;
  } catch (error) {
    console.error('Sign-in error:', error);
    return null;
  }
};

export const signOut = async (): Promise<boolean> => {
  try {
    const { error }: { error: AuthError | null } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

 
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('user');

    return true;
  } catch (error) {
    console.error('Sign-out error:', error);
    return false;
  }
};

export const checkIsLoggedIn = async (): Promise<boolean> => {
  try {
    
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
 
    // return isLoggedIn ? JSON.parse(isLoggedIn) : false; 
     return isLoggedIn !== null && JSON.parse(isLoggedIn) === true;
  } catch (error) {
    console.error('Error checking login status:', error);
    return false;
  }
};
