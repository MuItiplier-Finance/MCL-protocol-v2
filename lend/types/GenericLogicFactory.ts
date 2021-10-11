/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GenericLogic } from "./GenericLogic";

export class GenericLogicFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GenericLogic> {
    return super.deploy(overrides || {}) as Promise<GenericLogic>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GenericLogic {
    return super.attach(address) as GenericLogic;
  }
  connect(signer: Signer): GenericLogicFactory {
    return super.connect(signer) as GenericLogicFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericLogic {
    return new Contract(address, _abi, signerOrProvider) as GenericLogic;
  }
}

const _abi = [
  {
    inputs: [],
    name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
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
];

const _bytecode =
  "0x610e86610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063c3525c2814610045578063e617042414610063575b600080fd5b61004d610083565b60405161005a9190610e2f565b60405180910390f35b610076610071366004610c58565b61008f565b60405161005a9190610d59565b670de0b6b3a764000081565b60006100a86100a336879003870187610cf0565b6102be565b15806100f057506001600160a01b0389166000908152602087905260409020600701546100ee90600160a01b900460ff166100e836889003880188610cf0565b906102e6565b155b156100fd575060016102b2565b610105610b69565b6001600160a01b038a16600090815260208890526040902061012690610348565b5084525060208301819052151590506101435760019150506102b2565b61015f8988610157368a90038a018a610cf0565b888888610373565b506080850152506060830181905260408301919091526101835760019150506102b2565b61021a8160000151600a0a6102148a866001600160a01b031663b3596f078f6040518263ffffffff1660e01b81526004016101be9190610d45565b60206040518083038186803b1580156101d657600080fd5b505afa1580156101ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020e9190610d2d565b90610834565b90610875565b60a08201819052604082015161022f916108b7565b60c082018190526102445760009150506102b2565b6102838160c0015161021461026a84602001518560a0015161083490919063ffffffff16565b6080850151604086015161027d91610834565b906108b7565b60e0820181905260c082015160608301516000926102a29291906108f9565b670de0b6b3a76400001115925050505b98975050505050505050565b517f555555555555555555555555555555555555555555555555555555555555555516151590565b60006080821060405180604001604052806002815260200161373760f01b8152509061032e5760405162461bcd60e51b81526004016103259190610d64565b60405180910390fd5b5050815160016002830281019190911c1615155b92915050565b5461ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b6000806000806000610383610bbe565b61038c8a610925565b156103aa576000806000806000199550955095509550955050610826565b600060e08201525b878160e0015110156107855760e08101516103ce908b9061092a565b6103d757610775565b60e0810151600090815260208a81526040808320546001600160a01b03166101e085018190528352908d9052902061040e81610348565b506080860181905260c08601929092525060a0840191909152600a0a60208301526101e082015160405163b3596f0760e01b81526001600160a01b038a169163b3596f07916104609190600401610d45565b60206040518083038186803b15801561047857600080fd5b505afa15801561048c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b09190610d2d565b825260c0820151158015906104d0575060e08201516104d0908c906102e6565b156105ee578060040160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b81526004016105189190610d45565b60206040518083038186803b15801561053057600080fd5b505afa158015610544573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105689190610d2d565b6040830181905260208301518351600092610587929161021491610834565b61012084015190915061059a908261097b565b61012084015260a08301516105c0906105b4908390610834565b6101608501519061097b565b61016084015260c08301516105e6906105da908390610834565b6101808501519061097b565b610180840152505b60e08201516105fe908c906109a0565b15610773578060050160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b81526004016106469190610d45565b60206040518083038186803b15801561065e57600080fd5b505afa158015610672573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106969190610d2d565b8260600181815250506107408160060160009054906101000a90046001600160a01b03166001600160a01b03166370a082318f6040518263ffffffff1660e01b81526004016106e59190610d45565b60206040518083038186803b1580156106fd57600080fd5b505afa158015610711573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107359190610d2d565b60608401519061097b565b606083018190526020830151835161076c92610760929161021491610834565b6101408401519061097b565b6101408301525b505b60e08101805160010190526103b2565b6000816101200151116107995760006107ae565b6101208101516101608201516107ae91610875565b6101608201526101208101516107c55760006107da565b6101208101516101808201516107da91610875565b61018082018190526101208201516101408301516107f7926108f9565b610100820181905261012082015161014083015161016084015161018090940151919850965091945090925090505b965096509650965096915050565b60008261084357506000610342565b8282028284828161085057fe5b041461086e5760405162461bcd60e51b815260040161032590610dee565b9392505050565b600061086e83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506109f1565b600061086e83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a28565b600082610909575060001961086e565b61091d836109178685610a54565b90610ac6565b949350505050565b511590565b60006080821060405180604001604052806002815260200161373760f01b815250906109695760405162461bcd60e51b81526004016103259190610d64565b50509051600360029092021c16151590565b60008282018381101561086e5760405162461bcd60e51b815260040161032590610db7565b60006080821060405180604001604052806002815260200161373760f01b815250906109df5760405162461bcd60e51b81526004016103259190610d64565b50509051600160029092021c16151590565b60008183610a125760405162461bcd60e51b81526004016103259190610d64565b506000838581610a1e57fe5b0495945050505050565b60008184841115610a4c5760405162461bcd60e51b81526004016103259190610d64565b505050900390565b6000821580610a61575081155b15610a6e57506000610342565b816113881981610a7a57fe5b0483111560405180604001604052806002815260200161068760f31b81525090610ab75760405162461bcd60e51b81526004016103259190610d64565b50506127109102611388010490565b604080518082019091526002815261035360f41b602082015260009082610b005760405162461bcd60e51b81526004016103259190610d64565b5060408051808201909152600280825261068760f31b6020830152830490670de0b6b3a7640000821904851115610b4a5760405162461bcd60e51b81526004016103259190610d64565b508281670de0b6b3a764000086020181610b6057fe5b04949350505050565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806102400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b600080600080600080600080888a03610100811215610c75578485fd5b8935610c8081610e38565b985060208a0135610c9081610e38565b975060408a0135965060608a013595506020607f1982011215610cb1578485fd5b5060808901935060a0890135925060c0890135915060e08901356001600160a01b0381168114610cdf578182fd5b809150509295985092959890939650565b600060208284031215610d01578081fd5b6040516020810181811067ffffffffffffffff82111715610d20578283fd5b6040529135825250919050565b600060208284031215610d3e578081fd5b5051919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b81811015610d9057858101830151858201604001528201610d74565b81811115610da15783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b90815260200190565b6001600160a01b0381168114610e4d57600080fd5b5056fea2646970667358221220a4af94f099a5b1db1f8e2910761db06ad9d0e3506746c8a745d78081a9dba6ca64736f6c634300060c0033";
