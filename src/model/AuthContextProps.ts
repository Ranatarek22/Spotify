import {User} from '@supabase/supabase-js';

export interface AuthContextProps {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}
