import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import Udvidelser from './routes/Udvidelser';
import Hjem from './routes/Hjem';

const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'udvidelser',
                element: <Udvidelser/>
            },
            {
                path:'/',
                element: <Hjem/>
            }
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
