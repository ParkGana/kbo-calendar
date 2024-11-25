import { createContext, useContext, useEffect, useState } from 'react';
import { fetchSession, fetchUser, signin, signout } from '../api/Auth';

const AuthContext = createContext();

const token = localStorage.getItem('accessToken');

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchSignedUser = async () => {
            setUser(await fetchUser());
        };

        fetchSignedUser();
    }, []);

    /* 로그인 */
    const login = async ({ email, password }) => {
        await signin({ email, password });
        localStorage.setItem('accessToken', await fetchSession());
        setIsAuthenticated(true);
        setUser(await fetchUser());
    };

    /* 로그아웃 */
    const logout = async () => {
        await signout();
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
        setUser(null);
    };

    return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
