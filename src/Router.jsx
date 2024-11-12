import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import User from './pages/User';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/user" element={<User />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
