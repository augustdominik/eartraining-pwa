import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from './router/routerConfig';
import ChordIdentificationRoot from './pages/Extensions/ChordIdentificationRoot';
import InnerHearingRoot from './pages/InnerHearing/InnerHearingRoot';
import Home from './pages/Home/Home';
import Root from './pages/Root';

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        //        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.Extensions,
                element: <ChordIdentificationRoot />
            },
            {
                path: ROUTES.InnerHearing,
                element: <InnerHearingRoot />
            },
            {
                path: ROUTES.Home,
                element: <Home />
            },
            // {
            //     path:ROUTES.StringOfNotes,
            //     element: <StateManagerStringOfNotes/> 
            // }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
