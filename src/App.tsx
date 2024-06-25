import './App.css'
import HomeView from "./views/HomeView.tsx";
import { WalletProvider } from "@coinbase/waas-sdk-web-react";

const PROJECT_ID = process.env.COINBASE_PROJECT_ID; 


function App() {

  return (
    <WalletProvider projectId={PROJECT_ID} verbose collectAndReportMetrics enableHostedBackups>
      <HomeView />
    </WalletProvider>
  )
}

export default App
