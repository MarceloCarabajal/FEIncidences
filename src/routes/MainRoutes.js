import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { IncidenceDetail } from 'components/Incidences/IncidenceDetail/IncidenceDetail';
import { Prueba } from 'pages/Prueba';
// render - dashboard
const Estados = Loadable(lazy(() => import('pages/reports/Estados')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const Main = Loadable(lazy(() => import('components/Incidences/Main/Main')))



// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },{
            path: '/estados',
            element: <Estados />
        },
        {
            path: '/principal',
            element:<Main />
        },
        {
            path: '/prueba',
            element:<Prueba />
        },
        {
            path:'/detalle/:id',
            element:<IncidenceDetail />
        }

    ]
};

export default MainRoutes;
