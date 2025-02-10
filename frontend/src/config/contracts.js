export const CONTRACT_ADDRESS = "0x0321cead12b14eEd7e1707a657AfcB08F5eb8FD3";

export const CONTRACT_ABI = [
  {
    abi: [
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
    ],
    bytecode: {
      object:
        "0x6080604052348015600e575f80fd5b5060015f5561043a806100205f395ff3fe608060405260043610610057575f3560e01c806312b583491461006a5780632e1a7d4d1461008b57806354861af7146100aa578063920b3a7e146100e1578063ab32eb69146100f5578063d0e30db014610120575f80fd5b3661006657610064610124565b005b5f80fd5b348015610075575f80fd5b50475b6040519081526020015b60405180910390f35b348015610096575f80fd5b506100646100a5366004610380565b6101fc565b3480156100b5575f80fd5b506100c96100c4366004610380565b610330565b6040516001600160a01b039091168152602001610082565b3480156100ec575f80fd5b50600254610078565b348015610100575f80fd5b5061007861010f366004610397565b60016020525f908152604090205481565b6100645b610132565b60405180910390fd5b335f90815260016020526040812080543492906101509084906103d8565b9091555050335f9081526003602052604090205460ff166101c5576002805460018181019092557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b031916339081179091555f908152600360205260409020805460ff191690911790555b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b610204610358565b335f9081526001602052604090205481111561024e57335f90815260016020526040908190205490516368b0fee560e01b8152600481019190915260248101829052604401610129565b335f908152600160205260408120805483929061026c9084906103f1565b9091555050335f90815260016020526040812054900361029d57335f908152600360205260409020805460ff191690555b6040515f90339083908381818185875af1925050503d805f81146102dc576040519150601f19603f3d011682016040523d82523d5f602084013e6102e1565b606091505b50509050806102ee575f80fd5b60405182815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a25061032d60015f55565b50565b6002818154811061033f575f80fd5b5f918252602090912001546001600160a01b0316905081565b60025f540361037a57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f60208284031215610390575f80fd5b5035919050565b5f602082840312156103a7575f80fd5b81356001600160a01b03811681146103bd575f80fd5b9392505050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156103eb576103eb6103c4565b92915050565b818103818111156103eb576103eb6103c456fea2646970667358221220f92ce5422e341c70696b5a044b13e6d97b7ddff1988889b2b153101f271478bf64736f6c63430008190033",
      sourceMap:
        "142:1590:16:-:0;;;;;;;;;;;;-1:-1:-1;1857:1:14;2061:7;:21;142:1590:16;;;;;;",
      linkReferences: {},
    },
    deployedBytecode: {
      object:
        "0x608060405260043610610057575f3560e01c806312b583491461006a5780632e1a7d4d1461008b57806354861af7146100aa578063920b3a7e146100e1578063ab32eb69146100f5578063d0e30db014610120575f80fd5b3661006657610064610124565b005b5f80fd5b348015610075575f80fd5b50475b6040519081526020015b60405180910390f35b348015610096575f80fd5b506100646100a5366004610380565b6101fc565b3480156100b5575f80fd5b506100c96100c4366004610380565b610330565b6040516001600160a01b039091168152602001610082565b3480156100ec575f80fd5b50600254610078565b348015610100575f80fd5b5061007861010f366004610397565b60016020525f908152604090205481565b6100645b610132565b60405180910390fd5b335f90815260016020526040812080543492906101509084906103d8565b9091555050335f9081526003602052604090205460ff166101c5576002805460018181019092557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b031916339081179091555f908152600360205260409020805460ff191690911790555b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b610204610358565b335f9081526001602052604090205481111561024e57335f90815260016020526040908190205490516368b0fee560e01b8152600481019190915260248101829052604401610129565b335f908152600160205260408120805483929061026c9084906103f1565b9091555050335f90815260016020526040812054900361029d57335f908152600360205260409020805460ff191690555b6040515f90339083908381818185875af1925050503d805f81146102dc576040519150601f19603f3d011682016040523d82523d5f602084013e6102e1565b606091505b50509050806102ee575f80fd5b60405182815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a25061032d60015f55565b50565b6002818154811061033f575f80fd5b5f918252602090912001546001600160a01b0316905081565b60025f540361037a57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f60208284031215610390575f80fd5b5035919050565b5f602082840312156103a7575f80fd5b81356001600160a01b03811681146103bd575f80fd5b9392505050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156103eb576103eb6103c4565b92915050565b818103818111156103eb576103eb6103c456fea2646970667358221220f92ce5422e341c70696b5a044b13e6d97b7ddff1988889b2b153101f271478bf64736f6c63430008190033",
      sourceMap:
        "142:1590:16:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1713:9;:7;:9::i;:::-;142:1590;;;;;1566:104;;;;;;;;;;-1:-1:-1;1642:21:16;1566:104;;;160:25:17;;;148:2;133:18;1566:104:16;;;;;;;;964:467;;;;;;;;;;-1:-1:-1;964:467:16;;;;;:::i;:::-;;:::i;235:34::-;;;;;;;;;;-1:-1:-1;235:34:16;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;561:32:17;;;543:51;;531:2;516:18;235:34:16;381:219:17;1461:99:16;;;;;;;;;;-1:-1:-1;1537:9:16;:16;1461:99;;183:45;;;;;;;;;;-1:-1:-1;183:45:16;;;;;:::i;:::-;;;;;;;;;;;;;;590:368;;;634:73;;660:47;;;;;;;;634:73;729:10;718:22;;;;:10;:22;;;;;:35;;744:9;;718:22;:35;;744:9;;718:35;:::i;:::-;;;;-1:-1:-1;;785:10:16;769:27;;;;:15;:27;;;;;;;;764:142;;812:9;:35;;;;;;;;;;;;;-1:-1:-1;;;;;;812:35:16;835:10;812:35;;;;;;-1:-1:-1;861:27:16;;;:15;812:35;861:27;;;;:34;;-1:-1:-1;;861:34:16;;;;;;764:142;921:30;;941:9;160:25:17;;929:10:16;;921:30;;148:2:17;133:18;921:30:16;;;;;;;590:368::o;964:467::-;2500:21:14;:19;:21::i;:::-;1045:10:16::1;1034:22;::::0;;;:10:::1;:22;::::0;;;;;:31;-1:-1:-1;1030:100:16::1;;;1110:10;1099:22;::::0;;;:10:::1;:22;::::0;;;;;;;1074:56;;-1:-1:-1;;;1074:56:16;;::::1;::::0;::::1;1332:25:17::0;;;;1373:18;;;1366:34;;;1305:18;;1074:56:16::1;1158:248:17::0;1030:100:16::1;1151:10;1140:22;::::0;;;:10:::1;:22;::::0;;;;:32;;1166:6;;1140:22;:32:::1;::::0;1166:6;;1140:32:::1;:::i;:::-;::::0;;;-1:-1:-1;;1198:10:16::1;1187:22;::::0;;;:10:::1;:22;::::0;;;;;:27;;1183:93:::1;;1246:10;1260:5;1230:27:::0;;;:15:::1;:27;::::0;;;;:35;;-1:-1:-1;;1230:35:16::1;::::0;;1183:93:::1;1304:43;::::0;1287:12:::1;::::0;1312:10:::1;::::0;1336:6;;1287:12;1304:43;1287:12;1304:43;1336:6;1312:10;1304:43:::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1286:61;;;1362:7;1357:22;;1371:8;::::0;::::1;1357:22;1394:30;::::0;160:25:17;;;1405:10:16::1;::::0;1394:30:::1;::::0;148:2:17;133:18;1394:30:16::1;;;;;;;1020:411;2542:20:14::0;1857:1;3068:7;:21;2888:208;2542:20;964:467:16;:::o;235:34::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;235:34:16;;-1:-1:-1;235:34:16;:::o;2575:307:14:-;1899:1;2702:7;;:18;2698:86;;2743:30;;-1:-1:-1;;;2743:30:14;;;;;;;;;;;2698:86;1899:1;2858:7;:17;2575:307::o;196:180:17:-;255:6;308:2;296:9;287:7;283:23;279:32;276:52;;;324:1;321;314:12;276:52;-1:-1:-1;347:23:17;;196:180;-1:-1:-1;196:180:17:o;605:286::-;664:6;717:2;705:9;696:7;692:23;688:32;685:52;;;733:1;730;723:12;685:52;759:23;;-1:-1:-1;;;;;811:31:17;;801:42;;791:70;;857:1;854;847:12;791:70;880:5;605:286;-1:-1:-1;;;605:286:17:o;896:127::-;957:10;952:3;948:20;945:1;938:31;988:4;985:1;978:15;1012:4;1009:1;1002:15;1028:125;1093:9;;;1114:10;;;1111:36;;;1127:18;;:::i;:::-;1028:125;;;;:::o;1411:128::-;1478:9;;;1499:11;;;1496:37;;;1513:18;;:::i",
      linkReferences: {},
    },
    methodIdentifiers: {
      "deposit()": "d0e30db0",
      "getFundersCount()": "920b3a7e",
      "getTotalBalance()": "12b58349",
      "s_balances(address)": "ab32eb69",
      "s_funders(uint256)": "54861af7",
      "withdraw(uint256)": "2e1a7d4d",
    },
    rawMetadata:
      '{"compiler":{"version":"0.8.25+commit.b61c2a91"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"uint256","name":"amountSent","type":"uint256"}],"name":"FundMe_DepositTooSmall","type":"error"},{"inputs":[{"internalType":"uint256","name":"balanceOfSender","type":"uint256"},{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"}],"name":"FundMe_InsufficientFunds","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getFundersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"s_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"s_funders","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"devdoc":{"errors":{"ReentrancyGuardReentrantCall()":[{"details":"Unauthorized reentrant call."}]},"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/FundMe.sol":"FundMe"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol":{"keccak256":"0x11a5a79827df29e915a12740caf62fe21ebe27c08c9ae3e09abe9ee3ba3866d3","license":"MIT","urls":["bzz-raw://3cf0c69ab827e3251db9ee6a50647d62c90ba580a4d7bbff21f2bea39e7b2f4a","dweb:/ipfs/QmZiKwtKU1SBX4RGfQtY7PZfiapbbu6SZ9vizGQD9UHjRA"]},"src/FundMe.sol":{"keccak256":"0xb751416dbf2bd71ad2248c6d18eb5ce7ae5e9366e62f1868b2b6debf8263d4d3","license":"MIT","urls":["bzz-raw://ad9c93236fb4789f9038d8b8087f32b6f6099aef3ca44ce02c1d80f87368b669","dweb:/ipfs/QmUggsu2osDdvJY5HdXYMipLi7rXZAyg495DHBRgvajmsP"]}},"version":1}',
    metadata: {
      compiler: { version: "0.8.25+commit.b61c2a91" },
      language: "Solidity",
      output: {
        abi: [
          {
            inputs: [
              { internalType: "uint256", name: "amountSent", type: "uint256" },
            ],
            type: "error",
            name: "FundMe_DepositTooSmall",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "balanceOfSender",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountToWithdraw",
                type: "uint256",
              },
            ],
            type: "error",
            name: "FundMe_InsufficientFunds",
          },
          { inputs: [], type: "error", name: "ReentrancyGuardReentrantCall" },
          {
            inputs: [
              {
                internalType: "address",
                name: "user",
                type: "address",
                indexed: true,
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
                indexed: false,
              },
            ],
            type: "event",
            name: "Deposit",
            anonymous: false,
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "user",
                type: "address",
                indexed: true,
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
                indexed: false,
              },
            ],
            type: "event",
            name: "Withdrawal",
            anonymous: false,
          },
          {
            inputs: [],
            stateMutability: "payable",
            type: "function",
            name: "deposit",
          },
          {
            inputs: [],
            stateMutability: "view",
            type: "function",
            name: "getFundersCount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [],
            stateMutability: "view",
            type: "function",
            name: "getTotalBalance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
            name: "s_balances",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
            name: "s_funders",
            outputs: [
              { internalType: "address payable", name: "", type: "address" },
            ],
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
            name: "withdraw",
          },
          { inputs: [], stateMutability: "payable", type: "receive" },
        ],
        devdoc: { kind: "dev", methods: {}, version: 1 },
        userdoc: { kind: "user", methods: {}, version: 1 },
      },
      settings: {
        remappings: [
          "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
          "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
          "forge-std/=lib/forge-std/src/",
          "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
          "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        ],
        optimizer: { enabled: true, runs: 200 },
        metadata: { bytecodeHash: "ipfs" },
        compilationTarget: { "src/FundMe.sol": "FundMe" },
        evmVersion: "cancun",
        libraries: {},
      },
      sources: {
        "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
          keccak256:
            "0x11a5a79827df29e915a12740caf62fe21ebe27c08c9ae3e09abe9ee3ba3866d3",
          urls: [
            "bzz-raw://3cf0c69ab827e3251db9ee6a50647d62c90ba580a4d7bbff21f2bea39e7b2f4a",
            "dweb:/ipfs/QmZiKwtKU1SBX4RGfQtY7PZfiapbbu6SZ9vizGQD9UHjRA",
          ],
          license: "MIT",
        },
        "src/FundMe.sol": {
          keccak256:
            "0xb751416dbf2bd71ad2248c6d18eb5ce7ae5e9366e62f1868b2b6debf8263d4d3",
          urls: [
            "bzz-raw://ad9c93236fb4789f9038d8b8087f32b6f6099aef3ca44ce02c1d80f87368b669",
            "dweb:/ipfs/QmUggsu2osDdvJY5HdXYMipLi7rXZAyg495DHBRgvajmsP",
          ],
          license: "MIT",
        },
      },
      version: 1,
    },
    id: 16,
  },
];
