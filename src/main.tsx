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
import BeforeStartView from './views/BeforeStartView.tsx';
import QuestsView from './views/QuestsView.tsx';
import ProjectsView from './views/ProjectsView.tsx';
import ConnectWalletView from './views/ConnectWalletView.tsx';

import { ThirdwebProvider } from "thirdweb/react";
import StakingView from './views/StakingView.tsx';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { WalletProvider } from '@coinbase/waas-sdk-web-react';

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
        path: "/quests",
        element: <QuestsView />,
    },
    {
        path: "/projects",
        element: <ProjectsView />,
    },
    {
        path: "/beforestart",
        element: <BeforeStartView />,
    },
    {
        path: '/staking',
        element: <StakingView />,
    },
    {
        path: "/leaderboard",
        element: <LeaderboardView />
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThirdwebProvider>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <WalletProvider projectId={import.meta.env.VITE_COINBASE_PROJECT_ID} verbose collectAndReportMetrics enableHostedBackups>
              <MetaMaskProvider
                debug={false}
                sdkOptions={{
                  dappMetadata: {
                    name: "BaseChain x BonusBlock",
                    url: window.location.href,
                  },
                  infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY,
                  // Other options.
                }}
              >
                {/*<Theme>*/}
                  <RouterProvider router={router} />
                {/*</Theme>*/}
              </MetaMaskProvider>
            </WalletProvider>
          </PersistGate>
      </Provider>
  </ThirdwebProvider>,
)
