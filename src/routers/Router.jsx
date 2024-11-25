import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { fetchTeams } from '../services/supabase';
import { formatTeamsForSelectBox } from '../utils/formatData';
import { AuthProvider } from '../contexts/AuthContext';
import NonAuthenticatedRoute from './NonAuthenticatedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';

const router = createBrowserRouter([
    {
        element: <NonAuthenticatedRoute />,
        children: [
            { path: '/signin', element: <SignIn /> },
            {
                path: '/signup',
                element: <SignUp />,
                loader: async () => {
                    return { teams: formatTeamsForSelectBox(await fetchTeams()) };
                }
            }
        ]
    },
    {
        element: <AuthenticatedRoute />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/profile',
                element: <Profile />,
                loader: async () => {
                    return { teams: await fetchTeams() };
                }
            }
        ]
    }
]);

export default function Router() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />;
        </AuthProvider>
    );
}
