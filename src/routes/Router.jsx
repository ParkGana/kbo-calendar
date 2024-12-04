import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { AuthProvider } from '../contexts/AuthContext';
import NonAuthenticatedRoute from './NonAuthenticatedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';

export default function Router() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<NonAuthenticatedRoute />}>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Route>
                    <Route element={<AuthenticatedRoute />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
