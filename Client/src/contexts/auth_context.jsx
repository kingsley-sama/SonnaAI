import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const api = axios.create({
    baseURL: 'http://localhost:8000/auth', // Update this to your actual API endpoint
});

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        const storedState = localStorage.getItem('authState');
        return storedState ? JSON.parse(storedState) : {
            isLoggedIn: false,
            user: null,
            token: null,
            userType: null, // 'student', 'parent', or 'admin'
        };
    });

    useEffect(() => {
        localStorage.setItem('authState', JSON.stringify(authState));
        if (authState.token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${authState.token}`;
        } else {
            delete api.defaults.headers.common['Authorization'];
        }
    }, [authState]);

    const login = async (credentials) => {
        try {
            const response = await api.post('/login', credentials);
            setAuthState({
                isLoggedIn: true,
                user: response.data.user,
                token: response.data.token,
                userType: response.data.userType,
            });
            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const signup = async (signupData) => {
        try {
            const response = await api.post('/signup', signupData);
            setAuthState({
                isLoggedIn: true,
                user: response.data.user,
                token: response.data.token,
                userType: response.data.userType,
            });
            return true;
        } catch (error) {
            console.error('Signup error:', error);
            return false;
        }
    };

    const logout = () => {
        setAuthState({
            isLoggedIn: false,
            user: null,
            token: null,
            userType: null,
        });
    };

    const updateUser = async (newUserData) => {
        try {
            const response = await api.put('/user', newUserData);
            setAuthState(prevState => ({
                ...prevState,
                user: { ...prevState.user, ...response.data.user }
            }));
            return true;
        } catch (error) {
            console.error('Update user error:', error);
            return false;
        }
    };

    const linkChildAccount = async (childData) => {
        try {
            const response = await api.post('/link-child', childData);
            setAuthState(prevState => ({
                ...prevState,
                user: { ...prevState.user, children: [...(prevState.user.children || []), response.data.child] }
            }));
            return true;
        } catch (error) {
            console.error('Link child account error:', error);
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout,
            signup,
            updateUser,
            linkChildAccount
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);