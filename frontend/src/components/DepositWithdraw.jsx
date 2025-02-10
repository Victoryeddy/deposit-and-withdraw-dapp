import { useState } from "react";
import { useDepositWithdraw } from "../hooks/useContract";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useChainId,
  useSwitchChain,
} from "wagmi";

export default function DepositWithdraw() {
  const [amount, setAmount] = useState("");
  const { balance, deposit, withdraw, isLoading, isProcessing, error } =
    useDepositWithdraw();

  // Wallet connection hooks
  const { address, isConnected } = useAccount();
  const { connect, connectors, isLoading: isConnectLoading } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { chains, switchChain } = useSwitchChain();

 const handleConnect = async (connector) => {
 
  try {
   await connect({ connector });
  
  } catch (err) {
    console.error("Connection failed:", err);
  }
};

const handleDeposit = async (e) => {
  e.preventDefault();
  if (!amount || isProcessing) return;

  try {
    await deposit(amount);
    setAmount(""); 
  } catch (err) {
    console.error("Deposit failed:", err);
  }
};

 const handleWithdraw = async (e) => {
   e.preventDefault();
   if (!amount || isProcessing) return;

   try {
     await withdraw(amount);
     setAmount(""); 
   } catch (err) {
     console.error("Withdrawal failed:", err);
   }
 };


  return (
    <div className="bg-white rounded-lg shadow-lg max-w-lg mx-auto p-4">
      {/* Wallet Connection UI */}
      {!isConnected && (
        <div className=" mx-auto p-6 bg-white ">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Connect Wallet
          </h2>
          <div className="space-y-4">
            {connectors
              .filter((connector) => connector.name !== "Phantom")
              .map((connector, index) => (
                <button
                  key={connector.id}
                  onClick={() => handleConnect(connector)}
                  disabled={connector.ready || isConnectLoading}
                  className="w-full py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                  {index == 3 && <img src={connector.icon} width="20" />}
                  {connector.name}
                  {isConnectLoading && connector.ready && " (connecting...)"}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Wrong Network Warning */}
      {isConnected && chainId !== chains[0]?.id && (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Wrong Network</h2>
            <p className="mb-4">Please switch to {chains[0]?.name}</p>
            <button
              onClick={() => switchChain?.(chains[0]?.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Switch Network
            </button>
          </div>
        </div>
      )}

      {/* Wallet Info */}
      {isConnected && (
        <>
          <div className="mb-6 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </div>
            <button
              onClick={() => disconnect()}
              className="px-3 py-1 text-sm bg-red-500 rounded text-white hover:bg-gray-300"
            >
              Disconnect
            </button>
          </div>

          {/* Balance Display */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Vault Balance</h2>
            <p className="text-3xl text-blue-600">{balance} ETH</p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Transaction Form */}
          <div className="space-y-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount in ETH"
              className="w-full p-2 border rounded"
              step="0.01"
              disabled={isProcessing}
            />

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleDeposit}
                disabled={isProcessing || !amount}
                className={`w-full py-2 text-white rounded ${
                  isProcessing || !amount
                    ? "bg-gray-400"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {isProcessing ? "Processing..." : "Deposit"}
              </button>
              <button
                onClick={handleWithdraw}
                disabled={isProcessing || !amount}
                className={`w-full py-2 text-white rounded ${
                  isProcessing || !amount
                    ? "bg-gray-400"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {isProcessing ? "Processing..." : "Withdraw"}
              </button>
            </div>
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="mt-4 text-center text-gray-600">
              Loading transaction details...
            </div>
          )}
        </>
      )}
    </div>
  );
}
