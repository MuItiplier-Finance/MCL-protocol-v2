/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RoleManager } from "../RoleManager";

export class RoleManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RoleManager> {
    return super.deploy(overrides || {}) as Promise<RoleManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RoleManager {
    return super.attach(address) as RoleManager;
  }
  connect(signer: Signer): RoleManager__factory {
    return super.connect(signer) as RoleManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoleManager {
    return new Contract(address, _abi, signerOrProvider) as RoleManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "PendingAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdming",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
    ],
    name: "RoleClaimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
    ],
    name: "claimRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
    ],
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
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
    ],
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
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102e0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063111fd88b146100515780634575e69b1461008a578063ab406fe6146100a7578063fde9eb69146100d5575b600080fd5b61006e6004803603602081101561006757600080fd5b50356100f2565b604080516001600160a01b039092168252519081900360200190f35b61006e600480360360208110156100a057600080fd5b503561010d565b6100d3600480360360408110156100bd57600080fd5b50803590602001356001600160a01b0316610128565b005b6100d3600480360360208110156100eb57600080fd5b50356101e4565b6000908152602081905260409020546001600160a01b031690565b6000908152600160205260409020546001600160a01b031690565b60008281526020819052604090205482906001600160a01b0316331461018d576040805162461bcd60e51b815260206004820152601560248201527421a0a62622a92fa727aa2fa927a622afa0a226a4a760591b604482015290519081900360640190fd5b60008381526001602052604080822080546001600160a01b0319166001600160a01b038616908117909155905190917f8a3466f9d131f979249b9ebf68c3232124fbcda6334435f53e6788663f05387a91a2505050565b60008181526001602052604090205481906001600160a01b03163314610251576040805162461bcd60e51b815260206004820152601d60248201527f43414c4c45525f4e4f545f50454e44494e475f524f4c455f41444d494e000000604482015290519081900360640190fd5b6000828152602081815260409182902080546001600160a01b031916339081179091558251858152925190927f83a9ddad961dcb7c6894c9585a16ff7792c2ec8281256a3cc7303ae830152dcf92908290030190a2505056fea2646970667358221220ad014ad9dca4b7d044bdbeb73a7904fcb5b68d4d7975b7a66baf2f70e37a88ef64736f6c63430007050033";
