import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingView from "./views/LandingView.tsx";
import HomeView from "./views/HomeView.tsx";
import LeaderboardView from "./views/LeaderboardView.tsx";
import LoginView from './views/LoginView.tsx';
import { Provider } from "react-redux";
import { store, persistor } from "../src/store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import OnboardingView from './views/OnboardingView.tsx';
import BridgeView from './views/BridgeView.tsx';
import BeforeStartView from './views/BeforeStartView.tsx';
import ProfileView from './views/ProfileView.tsx';
import InfoView from './views/InfoView.tsx';
import ErrorView from './views/ErrorView.tsx';
import { WalletProvider } from "@coinbase/waas-sdk-web-react";

const PROJECT_ID = process.env.COINBASE_PROJECT_ID; 
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingView />,
    },
    {
        path: "/login",
        element: <LoginView />,
    },
    {
        path: "/onboarding",
        element: <OnboardingView />,
    },
    {
        path: "/home",
        element: <HomeView />,
    },
    {
        path: "/bridge",
        element: <BridgeView />,
    },
    {
        path: "/beforestart",
        element: <BeforeStartView />,
    },
    {
        path: '/stake',
        element: <BridgeView />,
    },
    {
        path: "/profile",
        element: <ProfileView />,
    },
    {
        path: "/leaderboard",
        element: <LeaderboardView />
    },
    {
        path: "/info",
        element: <InfoView />
    },
    {
        path: "/error",
        element: <ErrorView />
    }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <WalletProvider projectId={PROJECT_ID} verbose collectAndReportMetrics enableHostedBackups>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              {/*<Theme>*/}
                  <RouterProvider router={router} />
              {/*</Theme>*/}
          </PersistGate>
      </Provider>
  </WalletProvider>,
)
