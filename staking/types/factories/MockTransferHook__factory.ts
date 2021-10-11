/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockTransferHook } from "../MockTransferHook";

export class MockTransferHook__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockTransferHook> {
    return super.deploy(overrides || {}) as Promise<MockTransferHook>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockTransferHook {
    return super.attach(address) as MockTransferHook;
  }
  connect(signer: Signer): MockTransferHook__factory {
    return super.connect(signer) as MockTransferHook__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTransferHook {
    return new Contract(address, _abi, signerOrProvider) as MockTransferHook;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "MockHookEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "onTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060c68061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634a39314914602d575b600080fd5b606060048036036060811015604157600080fd5b506001600160a01b038135811691602081013590911690604001356062565b005b6040517f34250cbfa6d218c1d0a9b5950b60dac352f03d00642722e501cbc86d1ea8130190600090a150505056fea2646970667358221220ecae323b48c7f5b0ca4bf8c3b3ed86ee0829e72a4a62b9cff4a9852fd9a9ea8764736f6c63430007050033";
