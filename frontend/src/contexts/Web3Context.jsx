import React, {useState, useContext, createContext, useEffect} from 'react';

import {
  useConnect,
  useBalance,
  useDisconnect,
  useChainId,
  useAccount,
  useReadContract,
  useWriteContract,
  useSwitchChain,
  useWatchContractEvent
} from "wagmi";

const Web3Context = createContext()
export const Web3Provider = ({children}) => {
  const {address, isConnected} = useAccount(); 
  const { disconnect } = useDisconnect();
  const { connect, connectors, isLoading: isConnectLoading } = useConnect();
  const {chainId} = useChainId()
  const { chains, switchChain } = useSwitchChain();

  const [isReady, setIsReady] = useState(false);

   useEffect(() => {
     if (isConnected && chainId) {
       setIsReady(r => r = true);
     }
   }, [isConnected, chainId]);
   
  return (
    <Web3Context.Provider value={{useReadContract, useWriteContract, useWatchContractEvent,chains, switchChain, connect,connectors, disconnect, address, isConnected, chainId, isReady }}>
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3 = () =>{
     const context = useContext(Web3Context);
    if (context === undefined) {
        throw new Error('useWeb3 must be used within a Web3Provider');
    }
    return context;
} 