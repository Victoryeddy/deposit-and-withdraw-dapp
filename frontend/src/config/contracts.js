export const CONTRACT_ADDRESS = "0x0321cead12b14eEd7e1707a657AfcB08F5eb8FD3";

export const CONTRACT_ABI = [
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "deposit",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getFundersCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTotalBalance",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_balances",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "s_funders",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "", type: "address", internalType: "address payable" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Deposit",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdrawal",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "FundMe_DepositTooSmall",
    inputs: [
      { name: "amountSent", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "FundMe_InsufficientFunds",
    inputs: [
      { name: "balanceOfSender", type: "uint256", internalType: "uint256" },
      {
        name: "amountToWithdraw",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
];
