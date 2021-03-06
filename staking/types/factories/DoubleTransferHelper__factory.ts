/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DoubleTransferHelper } from "../DoubleTransferHelper";

export class DoubleTransferHelper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(aave: string, overrides?: Overrides): Promise<DoubleTransferHelper> {
    return super.deploy(aave, overrides || {}) as Promise<DoubleTransferHelper>;
  }
  getDeployTransaction(
    aave: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(aave, overrides || {});
  }
  attach(address: string): DoubleTransferHelper {
    return super.attach(address) as DoubleTransferHelper;
  }
  connect(signer: Signer): DoubleTransferHelper__factory {
    return super.connect(signer) as DoubleTransferHelper__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DoubleTransferHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DoubleTransferHelper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "aave",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AAVE",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount2",
        type: "uint256",
      },
    ],
    name: "doubleSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516102a43803806102a48339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031661023561006f600039806095528060b9528061018352506102356000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806348ccda3c1461003b578063983ff7691461005f575b600080fd5b610043610093565b604080516001600160a01b039092168252519081900360200190f35b6100916004803603606081101561007557600080fd5b506001600160a01b0381351690602081013590604001356100b7565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb84846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561012e57600080fd5b505af1158015610142573d6000803e3d6000fd5b505050506040513d602081101561015857600080fd5b50506040805163a9059cbb60e01b81526001600160a01b0385811660048301526024820184905291517f00000000000000000000000000000000000000000000000000000000000000009092169163a9059cbb916044808201926020929091908290030181600087803b1580156101ce57600080fd5b505af11580156101e2573d6000803e3d6000fd5b505050506040513d60208110156101f857600080fd5b505050505056fea264697066735822122019649583689c077eb076b8e277e202d43b49bf13eb2471cc4ebc13c39ad7b65664736f6c63430007050033";
