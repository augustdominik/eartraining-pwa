import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import Home from './pages/Home/Home';
import ChordIdentificationRoot from './pages/Extensions/ChordIdentificationRoot';
import InnerHearingRoot from './pages/InnerHearing/InnerHearingRoot';
import { ROUTES } from './router/routerConfig';
import Root from './pages/Root';
//import StateManagerStringOfNotes from './pages/StringOfNotes/StateManagerStringOfNotes';

const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:ROUTES.Extensions,
                element: <ChordIdentificationRoot/>
            },
            {
                path:ROUTES.InnerHearing,
                element: <InnerHearingRoot/>
            },
            {
                path:ROUTES.Home,
                element: <Home/>
            },
            // {
            //     path:ROUTES.StringOfNotes,
            //     element: <StateManagerStringOfNotes/> 
            // }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
