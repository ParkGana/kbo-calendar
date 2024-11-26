import { createContext, useContext, useEffect, useState } from 'react';
import { fetchSessionAPI, fetchUserAPI, signinAPI, signoutAPI } from '../api/Auth';

const AuthContext = createContext();

const token = localStorage.getItem('accessToken');

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchSignedUser = async () => {
            setUser(await fetchUserAPI());
        };

        fetchSignedUser();
    }, [isAuthenticated]);

    /* 로그인 */
    const login = async ({ email, password }) => {
        await signinAPI({ email, password });
        localStorage.setItem('accessToken', await fetchSessionAPI());
        setIsAuthenticated(true);
    };

    /* 로그아웃 */
    const logout = async () => {
        await signoutAPI();
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
    };

    return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
