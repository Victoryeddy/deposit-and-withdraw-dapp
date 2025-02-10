import React, { useState } from 'react';
import { useWeb3 } from '../contexts/Web3Context';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../config/contracts'
import { parseEther, formatEther } from 'viem';


export const useDepositWithdraw = () => {
    const { useReadContract, useWriteContract, useWatchContractEvent } = useWeb3();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);

    const { data: balance, refetch: refetchBalance } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'getTotalBalance',
    });

    const { writeContractAsync: writeDeposit, isPending: isDepositPending } = useWriteContract();
    const { writeContractAsync: writeWithdraw, isPending: isWithdrawPending } = useWriteContract();

    // Listen for deposit event
    useWatchContractEvent({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        eventName: 'Deposit',
        onLogs: () => refetchBalance(),
    });

    // Listen for withdrawal event
    useWatchContractEvent({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        eventName: 'Withdrawal',
        onLogs: () => refetchBalance(),
    });

    // Deposit Function
    const deposit = async (amount) => {
        try {
            setError(null);
            setIsProcessing(true);

            await writeDeposit({
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: 'deposit',
                value: parseEther(amount),
            });

            // Refresh balance after deposit
            await refetchBalance();
        } catch (err) {
            console.error("Deposit failed:", err);
            setError(err.message);
        } finally {
            setIsProcessing(false);
        }
    };

    // Withdraw Function
    const withdraw = async (amount) => {
        try {
            setError(null);
            setIsProcessing(true);

            await writeWithdraw({
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                functionName: 'withdraw',
                args: [parseEther(amount)],
            });

            // Refresh balance after withdrawal
            await refetchBalance();
        } catch (err) {
            console.error("Withdrawal failed:", err);
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
        refetchBalance,
    };
};


