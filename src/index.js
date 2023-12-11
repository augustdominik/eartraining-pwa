"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var react_router_dom_1 = require("react-router-dom");
var serviceWorkerRegistration = __importStar(require("./serviceWorkerRegistration"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var error_page_1 = __importDefault(require("./error-page"));
var Home_1 = __importDefault(require("./pages/Home/Home"));
var ChordIdentificationRoot_1 = __importDefault(require("./pages/Extensions/ChordIdentificationRoot"));
var InnerHearingRoot_1 = __importDefault(require("./pages/InnerHearing/InnerHearingRoot"));
var routerConfig_1 = require("./router/routerConfig");
var Root_1 = __importDefault(require("./pages/Root"));
var router = (0, react_router_dom_1.createHashRouter)([
    {
        path: "/",
        element: react_1.default.createElement(Root_1.default, null),
        errorElement: react_1.default.createElement(error_page_1.default, null),
        children: [
            {
                path: routerConfig_1.ROUTES.Extensions,
                element: react_1.default.createElement(ChordIdentificationRoot_1.default, null)
            },
            {
                path: routerConfig_1.ROUTES.InnerHearing,
                element: react_1.default.createElement(InnerHearingRoot_1.default, null)
            },
            {
                path: routerConfig_1.ROUTES.Home,
                element: react_1.default.createElement(Home_1.default, null)
            },
            // {
            //     path:ROUTES.StringOfNotes,
            //     element: <StateManagerStringOfNotes/> 
            // }
        ]
    },
]);
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router })));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
