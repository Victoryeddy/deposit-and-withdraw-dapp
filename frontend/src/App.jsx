import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected, metaMask, walletConnect } from "wagmi/connectors";
import DepositWithdraw from "./components/DepositWithdraw";
import { Web3Provider } from "./contexts/Web3Context.jsx";
// Create a new query client for React Query
const queryClient = new QueryClient();
const chains = [sepolia];
// Create wagmi config
const config = createConfig({
  chains,
  transports: {
    [sepolia.id]: http(import.meta.env.VITE_SEPOLIA_RPC_URL),
  },
  connectors: [
    // injected({ chains }),
    metaMask({ chains }),
    // walletConnect({ chains, projectId: "178fecff9e514cb1813f78e05998838f" }),
  ],
});

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Web3Provider>
          <div className="min-h-screen bg-gray-100 py-12">
            <DepositWithdraw />
          </div>
        </Web3Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
