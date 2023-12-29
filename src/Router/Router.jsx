
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import DashboardPage from '../Pages/DashboardPage';
import Project from '../Pages/Project';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/',
                element: <DashboardPage></DashboardPage>
            },
            {
                path: '/project',
                element: <Project></Project>
            }
        ]
    }

])

export default Router;