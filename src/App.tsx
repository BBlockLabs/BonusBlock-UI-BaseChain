import './App.css'
import HomeView from "./views/HomeView.tsx";
import { WalletProvider } from "@coinbase/waas-sdk-web-react";
import { MetaMaskProvider } from "@metamask/sdk-react";

function App() {

  return (
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
        <HomeView />
      </MetaMaskProvider>
    </WalletProvider>
  )
}

export default App
