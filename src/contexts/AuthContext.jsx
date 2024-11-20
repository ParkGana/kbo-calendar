import { createContext, useContext, useEffect, useState } from 'react';
import { fetchUser, signin, signout } from '../services/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
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
        setUser(await fetchUser());
    };

    /* 로그아웃 */
    const logout = async () => {
        await signout();
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
