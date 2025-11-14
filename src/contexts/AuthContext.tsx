import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signup: (email: string, password: string, name: string, company?: string) => Promise<void>;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error loading user:', error);
        localStorage.removeItem('authUser');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const signup = async (email: string, password: string, name: string, company?: string) => {
    try {
      // In a real app, you would call your API here
      // For now, we'll store the user locally
      const newUser: User = {
        id: `user_${Date.now()}`,
        email,
        name,
        company
      };

      // Store user in localStorage
      localStorage.setItem('authUser', JSON.stringify(newUser));
      // Store credentials (in production, this should be handled by the backend)
      localStorage.setItem('authCredentials', JSON.stringify({ email, password }));

      setUser(newUser);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const signin = async (email: string, password: string) => {
    try {
      // In a real app, you would call your API here
      // For now, we'll check against stored credentials
      const storedCredentials = localStorage.getItem('authCredentials');
      
      if (storedCredentials) {
        const credentials = JSON.parse(storedCredentials);
        if (credentials.email === email && credentials.password === password) {
          const storedUser = localStorage.getItem('authUser');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
            return;
          }
        }
      }

      throw new Error('Invalid email or password');
    } catch (error) {
      console.error('Signin error:', error);
      throw error;
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
    localStorage.removeItem('authCredentials');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signup,
    signin,
    signout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

