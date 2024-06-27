import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingView from "./views/LandingView.tsx";
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
import QuestsView from './views/QuestsView.tsx';
import ConnectWalletView from './views/ConnectWalletView.tsx';

import { ThirdwebProvider } from "thirdweb/react";

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
        path: "/connectwallet",
        element: <ConnectWalletView />,
    },
    {
        path: "/onboarding",
        element: <OnboardingView />,
    },
    {
        path: "/quests",
        element: <QuestsView />,
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
    <ThirdwebProvider>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              {/*<Theme>*/}
                  <RouterProvider router={router} />
              {/*</Theme>*/}
          </PersistGate>
      </Provider>
  </ThirdwebProvider>,
)
