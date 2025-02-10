import React, {useState, useContext, createContext, useEffect} from 'react';

import {useAccount, useNetwork} from "wagmi";

const Web3Context = createContext()
export const Web3Provider = ({children}) => {
  const {address, isConnected} = useAccount(); 
  const {chain} = useNetwork()

  const [isReady, setIsReady] = useState(false);

   useEffect(() => {
     if (isConnected && chain) {
       setIsReady(r => r = true);
     }
   }, [isConnected, chain]);
  return (
    <Web3Context.Provider value={{ address, isConnected, chain, isReady }}>
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3 = () => useContext(Web3Context);