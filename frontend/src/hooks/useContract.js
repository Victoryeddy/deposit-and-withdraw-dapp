import React, { useState } from 'react';
import { useReadContract, useWriteContract, useSimulateContract, useWatchContractEvent } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../config/contracts'
import { parseEther, formatEther } from 'viem';


export const useDepositWithdraw = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);

    const { data: balance, refetch: refetchBalance } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'getTotalBalance'
    });

    const { writeContract: writeDeposit, isPending: isDepositPending } = useWriteContract();
    const { writeContract: writeWithdraw, isPending: isWithdrawPending } = useWriteContract();

    useWatchContractEvent({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        eventName: 'Deposit',
        onLogs() {
            refetchBalance();
        },
    });

    useWatchContractEvent({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        eventName: 'Withdrawal',
        onLogs() {
            refetchBalance();
        },
    });

    const deposit =  (amount) => {
        try {
            setError(null);
            setIsProcessing(true);
            writeDeposit({
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: 'deposit',
                value: parseEther(amount)
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsProcessing(false);
        }
    };

    const withdraw = (amount) => {
        try {
            setError(null);
            setIsProcessing(true);
            writeWithdraw({
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: 'withdraw',
                args: [parseEther(amount)]
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsProcessing(false);
        }
    };

    return {
        balance: balance ? formatEther(balance) : '0',
        deposit,
        withdraw,
        isLoading: isDepositPending || isWithdrawPending,
        isProcessing,
        error,
        refetchBalance
    };
}


