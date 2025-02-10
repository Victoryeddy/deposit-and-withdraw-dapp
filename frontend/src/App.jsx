import { useState } from 'react'
import { useWeb3 } from './contexts/Web3Context'
function App() {
  
  const { address, isConnected, chain, isReady } = useWeb3();
  return (
    <>
     <p>Hello world</p>
   
    </>
  )
}

export default App
