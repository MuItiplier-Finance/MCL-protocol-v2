/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAaveIncentivesControllerInterface extends ethers.utils.Interface {
  functions: {
    "claimRewards(address[],uint256,address,bool)": FunctionFragment;
    "getRewardsBalance(address[],address)": FunctionFragment;
    "handleAction(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string[], BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsBalance",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "handleAction",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleAction",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAaveIncentivesController extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAaveIncentivesControllerInterface;

  functions: {
    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      stake: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimRewards(address[],uint256,address,bool)"(
      assets: string[],
      amount: BigNumberish,
      to: string,
      stake: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getRewardsBalance(address[],address)"(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    handleAction(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "handleAction(address,uint256,uint256)"(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  claimRewards(
    assets: string[],
    amount: BigNumberish,
    to: string,
    stake: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimRewards(address[],uint256,address,bool)"(
    assets: string[],
    amount: BigNumberish,
    to: string,
    stake: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getRewardsBalance(
    assets: string[],
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRewardsBalance(address[],address)"(
    assets: string[],
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  handleAction(
    asset: string,
    userBalance: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "handleAction(address,uint256,uint256)"(
    asset: string,
    userBalance: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      stake: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimRewards(address[],uint256,address,bool)"(
      assets: string[],
      amount: BigNumberish,
      to: string,
      stake: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRewardsBalance(address[],address)"(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "handleAction(address,uint256,uint256)"(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      stake: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimRewards(address[],uint256,address,bool)"(
      assets: string[],
      amount: BigNumberish,
      to: string,
      stake: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRewardsBalance(address[],address)"(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "handleAction(address,uint256,uint256)"(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      stake: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimRewards(address[],uint256,address,bool)"(
      assets: string[],
      amount: BigNumberish,
      to: string,
      stake: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRewardsBalance(address[],address)"(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleAction(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "handleAction(address,uint256,uint256)"(
      asset: string,
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
