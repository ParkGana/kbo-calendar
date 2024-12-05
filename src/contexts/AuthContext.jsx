import { createContext, useContext, useEffect, useState } from 'react';
import { fetchSessionAPI, fetchUserAPI, signinAPI, signoutAPI } from '../api/Auth';
import { fireErrorSwal } from '../utils/fireSwal';

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
        const { error } = await signinAPI({ email, password });

        if (error) {
            fireErrorSwal('로그인에 실패하였습니다.');
        } else {
            localStorage.setItem('accessToken', await fetchSessionAPI());
            setIsAuthenticated(true);
        }

        return { error };
    };

    /* 로그아웃 */
    const logout = async () => {
        const { error } = await signoutAPI();

        if (error) {
            fireErrorSwal('로그아웃에 실패하였습니다.');
        } else {
            localStorage.removeItem('accessToken');
            setIsAuthenticated(false);
        }

        return { error };
    };

    return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
