/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ExecutorWithTimelock } from "../ExecutorWithTimelock";

export class ExecutorWithTimelock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    admin: string,
    delay: BigNumberish,
    gracePeriod: BigNumberish,
    minimumDelay: BigNumberish,
    maximumDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExecutorWithTimelock> {
    return super.deploy(
      admin,
      delay,
      gracePeriod,
      minimumDelay,
      maximumDelay,
      overrides || {}
    ) as Promise<ExecutorWithTimelock>;
  }
  getDeployTransaction(
    admin: string,
    delay: BigNumberish,
    gracePeriod: BigNumberish,
    minimumDelay: BigNumberish,
    maximumDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      admin,
      delay,
      gracePeriod,
      minimumDelay,
      maximumDelay,
      overrides || {}
    );
  }
  attach(address: string): ExecutorWithTimelock {
    return super.attach(address) as ExecutorWithTimelock;
  }
  connect(signer: Signer): ExecutorWithTimelock__factory {
    return super.connect(signer) as ExecutorWithTimelock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExecutorWithTimelock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExecutorWithTimelock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gracePeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maximumDelay",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "CancelledAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "resultData",
        type: "bytes",
      },
    ],
    name: "ExecutedAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "QueuedAction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "cancelTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32",
      },
    ],
    name: "isActionQueued",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "isProposalOverGracePeriod",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200170338038062001703833981016040819052620000349162000130565b81841015620000605760405162461bcd60e51b8152600401620000579062000199565b60405180910390fd5b80841115620000835760405162461bcd60e51b81526004016200005790620001d0565b6002849055600080546001600160a01b0319166001600160a01b038716179055608083905260a082905260c08190526040517f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90620000e490869062000207565b60405180910390a17f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c856040516200011d919062000185565b60405180910390a1505050505062000210565b600080600080600060a0868803121562000148578081fd5b85516001600160a01b03811681146200015f578182fd5b602087015160408801516060890151608090990151929a91995097965090945092505050565b6001600160a01b0391909116815260200190565b6020808252601a908201527f44454c41595f53484f525445525f5448414e5f4d494e494d554d000000000000604082015260600190565b60208082526019908201527f44454c41595f4c4f4e4745525f5448414e5f4d4158494d554d00000000000000604082015260600190565b90815260200190565b60805160a05160c0516114b2620002516000398061046e5280610a6852508061082e5280610a28525080610547528061086a528061099752506114b26000f3fe6080604052600436106100e15760003560e01c8063b1b43ae51161007f578063cebc9a8211610059578063cebc9a8214610228578063d04681561461023d578063e177246e14610252578063f670a5f914610272576100e8565b8063b1b43ae5146101d1578063b1fc8796146101e6578063c1a287e214610213576100e8565b80636e9960c3116100bb5780636e9960c31461015a5780637d645fab1461017c5780638902ab65146101915780638d8fe2e3146101b1576100e8565b80630e18b681146100ed5780631dc40b51146101045780634dd18bf51461013a576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b50610102610292565b005b34801561011057600080fd5b5061012461011f366004610d9f565b61031c565b6040516101319190611111565b60405180910390f35b34801561014657600080fd5b50610102610155366004610d83565b6103e8565b34801561016657600080fd5b5061016f61045d565b604051610131919061109e565b34801561018857600080fd5b5061012461046c565b6101a461019f366004610d9f565b610490565b604051610131919061119a565b3480156101bd57600080fd5b506101246101cc366004610d9f565b610743565b3480156101dd57600080fd5b5061012461082c565b3480156101f257600080fd5b50610206610201366004610e39565b610850565b6040516101319190611106565b34801561021f57600080fd5b50610124610868565b34801561023457600080fd5b5061012461088c565b34801561024957600080fd5b5061016f610892565b34801561025e57600080fd5b5061010261026d366004610e39565b6108a1565b34801561027e57600080fd5b5061020661028d366004610e51565b6108fe565b6001546001600160a01b031633146102c55760405162461bcd60e51b81526004016102bc906111ad565b60405180910390fd5b60008054336001600160a01b031991821681179092556001805490911690556040517f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c916103129161109e565b60405180910390a1565b600080546001600160a01b031633146103475760405162461bcd60e51b81526004016102bc90611279565b6000878787878787604051602001610364969594939291906110b2565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916905591506001600160a01b038916907f87c481aa909c37502caa37394ab791c26b68fa4fa5ae56de104de36444ae9069906103d59084908b908b908b908b908b9061111a565b60405180910390a2979650505050505050565b3330146104075760405162461bcd60e51b81526004016102bc90611396565b600180546001600160a01b0319166001600160a01b0383161790556040517f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a7569061045290839061109e565b60405180910390a150565b6000546001600160a01b031690565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546060906001600160a01b031633146104bd5760405162461bcd60e51b81526004016102bc90611279565b60008787878787876040516020016104da969594939291906110b2565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166105215760405162461bcd60e51b81526004016102bc906112cf565b834210156105415760405162461bcd60e51b81526004016102bc906111dc565b61056b847f00000000000000000000000000000000000000000000000000000000000000006109c5565b42111561058a5760405162461bcd60e51b81526004016102bc906112a0565b6000818152600360205260409020805460ff1916905585516060906105b05750846105dc565b8680519060200120866040516020016105ca929190611051565b60405160208183030381529060405290505b60006060851561066957893410156106065760405162461bcd60e51b81526004016102bc90611368565b8a6001600160a01b03168360405161061e9190611082565b600060405180830381855af49150503d8060008114610659576040519150601f19603f3d011682016040523d82523d6000602084013e61065e565b606091505b5090925090506106cb565b8a6001600160a01b03168a846040516106829190611082565b60006040518083038185875af1925050503d80600081146106bf576040519150601f19603f3d011682016040523d82523d6000602084013e6106c4565b606091505b5090925090505b816106e85760405162461bcd60e51b81526004016102bc906112fa565b8a6001600160a01b03167f97825080b472fa91fe888b62ec128814d60dec546a2dafb955e50923f4a1b7e7858c8c8c8c8c8860405161072d9796959493929190611139565b60405180910390a29a9950505050505050505050565b600080546001600160a01b0316331461076e5760405162461bcd60e51b81526004016102bc90611279565b60025461077c9042906109c5565b83101561079b5760405162461bcd60e51b81526004016102bc9061120b565b60008787878787876040516020016107b8969594939291906110b2565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916600117905591506001600160a01b038916907f2191aed4c4733c76e08a9e7e1da0b8d87fa98753f22df49231ddc66e0f05f022906103d59084908b908b908b908b908b9061111a565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008181526003602052604090205460ff165b919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60025490565b6001546001600160a01b031690565b3330146108c05760405162461bcd60e51b81526004016102bc90611396565b6108c981610a26565b60028190556040517f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90610452908390611111565b6000610908610aa9565b604051633656de2160e01b81526001600160a01b03851690633656de2190610934908690600401611111565b60006040518083038186803b15801561094c57600080fd5b505afa158015610960573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109889190810190610e7c565b6101408101519091506109bb907f00000000000000000000000000000000000000000000000000000000000000006109c5565b4211949350505050565b600082820183811015610a1f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b7f0000000000000000000000000000000000000000000000000000000000000000811015610a665760405162461bcd60e51b81526004016102bc90611242565b7f0000000000000000000000000000000000000000000000000000000000000000811115610aa65760405162461bcd60e51b81526004016102bc90611331565b50565b6040518061022001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016060815260200160608152602001606081526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160001515815260200160006001600160a01b03168152602001600080191681525090565b805161086381611459565b600082601f830112610b6a578081fd5b8151610b7d610b78826113e9565b6113c5565b818152915060208083019084810181840286018201871015610b9e57600080fd5b60005b84811015610bc6578151610bb481611459565b84529282019290820190600101610ba1565b505050505092915050565b600082601f830112610be1578081fd5b8151610bef610b78826113e9565b818152915060208083019084810181840286018201871015610c1057600080fd5b60005b84811015610bc6578151610c268161146e565b84529282019290820190600101610c13565b600082601f830112610c48578081fd5b8151610c56610b78826113e9565b818152915060208083019084810160005b84811015610bc6578151870188603f820112610c8257600080fd5b83810151610c92610b7882611407565b81815260408b81848601011115610ca857600080fd5b610cb783888401838701611429565b50865250509282019290820190600101610c67565b600082601f830112610cdc578081fd5b8151610cea610b78826113e9565b818152915060208083019084810181840286018201871015610d0b57600080fd5b60005b84811015610bc657815184529282019290820190600101610d0e565b80516108638161146e565b600082601f830112610d45578081fd5b8135610d53610b7882611407565b9150808252836020828501011115610d6a57600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215610d94578081fd5b8135610a1f81611459565b60008060008060008060c08789031215610db7578182fd5b8635610dc281611459565b955060208701359450604087013567ffffffffffffffff80821115610de5578384fd5b610df18a838b01610d35565b95506060890135915080821115610e06578384fd5b50610e1389828a01610d35565b9350506080870135915060a0870135610e2b8161146e565b809150509295509295509295565b600060208284031215610e4a578081fd5b5035919050565b60008060408385031215610e63578182fd5b8235610e6e81611459565b946020939093013593505050565b600060208284031215610e8d578081fd5b815167ffffffffffffffff80821115610ea4578283fd5b8184019150610220808387031215610eba578384fd5b610ec3816113c5565b905082518152610ed560208401610b4f565b6020820152610ee660408401610b4f565b6040820152606083015182811115610efc578485fd5b610f0887828601610b5a565b606083015250608083015182811115610f1f578485fd5b610f2b87828601610ccc565b60808301525060a083015182811115610f42578485fd5b610f4e87828601610c38565b60a08301525060c083015182811115610f65578485fd5b610f7187828601610c38565b60c08301525060e083015182811115610f88578485fd5b610f9487828601610bd1565b60e083015250610100838101519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a09150610fe1828401610d2a565b828201526101c09150610ff5828401610d2a565b828201526101e09150611009828401610b4f565b9181019190915261020091820151918101919091529392505050565b6000815180845261103d816020860160208601611429565b601f01601f19169290920160200192915050565b6001600160e01b0319831681528151600090611074816004850160208701611429565b919091016004019392505050565b60008251611094818460208701611429565b9190910192915050565b6001600160a01b0391909116815260200190565b600060018060a01b038816825286602083015260c060408301526110d960c0830187611025565b82810360608401526110eb8187611025565b6080840195909552505090151560a090910152949350505050565b901515815260200190565b90815260200190565b600087825286602083015260c060408301526110d960c0830187611025565b600088825287602083015260e0604083015261115860e0830188611025565b828103606084015261116a8188611025565b905085608084015284151560a084015282810360c084015261118c8185611025565b9a9950505050505050505050565b600060208252610a1f6020830184611025565b60208082526015908201527427a7262cafa12cafa822a72224a723afa0a226a4a760591b604082015260600190565b602080825260159082015274151253515313d0d2d7d393d517d192539254d21151605a1b604082015260600190565b6020808252601d908201527f455845435554494f4e5f54494d455f554e444552455354494d41544544000000604082015260600190565b6020808252601a908201527f44454c41595f53484f525445525f5448414e5f4d494e494d554d000000000000604082015260600190565b6020808252600d908201526c27a7262cafa12cafa0a226a4a760991b604082015260600190565b60208082526015908201527411d49050d157d411549253d117d192539254d21151605a1b604082015260600190565b6020808252601190820152701050d51253d397d393d517d45551555151607a1b604082015260600190565b60208082526017908201527f4641494c45445f414354494f4e5f455845435554494f4e000000000000000000604082015260600190565b60208082526019908201527f44454c41595f4c4f4e4745525f5448414e5f4d4158494d554d00000000000000604082015260600190565b6020808252601490820152734e4f545f454e4f5547485f4d53475f56414c554560601b604082015260600190565b6020808252601590820152744f4e4c595f42595f544849535f54494d454c4f434b60581b604082015260600190565b60405181810167ffffffffffffffff811182821017156113e157fe5b604052919050565b600067ffffffffffffffff8211156113fd57fe5b5060209081020190565b600067ffffffffffffffff82111561141b57fe5b50601f01601f191660200190565b60005b8381101561144457818101518382015260200161142c565b83811115611453576000848401525b50505050565b6001600160a01b0381168114610aa657600080fd5b8015158114610aa657600080fdfea2646970667358221220d2ec3bda8e057087d54bc8d9d224decb8835ca9ce38422bf0538ae5534cff31964736f6c63430007050033";
