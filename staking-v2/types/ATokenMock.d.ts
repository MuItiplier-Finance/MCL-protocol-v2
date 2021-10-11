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
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ATokenMockInterface extends ethers.utils.Interface {
  functions: {
    "_aic()": FunctionFragment;
    "cleanUserState()": FunctionFragment;
    "doubleHandleActionOnAic(address,uint256,uint256)": FunctionFragment;
    "getScaledUserBalanceAndSupply(address)": FunctionFragment;
    "handleActionOnAic(address,uint256,uint256)": FunctionFragment;
    "scaledTotalSupply()": FunctionFragment;
    "setUserBalanceAndSupply(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_aic", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cleanUserState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "doubleHandleActionOnAic",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getScaledUserBalanceAndSupply",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "handleActionOnAic",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setUserBalanceAndSupply",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "_aic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cleanUserState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doubleHandleActionOnAic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScaledUserBalanceAndSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleActionOnAic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserBalanceAndSupply",
    data: BytesLike
  ): Result;

  events: {
    "AssetConfigUpdated(address,uint256)": EventFragment;
    "AssetIndexUpdated(address,uint256)": EventFragment;
    "RewardsAccrued(address,uint256)": EventFragment;
    "UserIndexUpdated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetIndexUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserIndexUpdated"): EventFragment;
}

export class ATokenMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ATokenMockInterface;

  functions: {
    _aic(overrides?: CallOverrides): Promise<[string]>;

    "_aic()"(overrides?: CallOverrides): Promise<[string]>;

    cleanUserState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cleanUserState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    doubleHandleActionOnAic(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "doubleHandleActionOnAic(address,uint256,uint256)"(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    handleActionOnAic(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "handleActionOnAic(address,uint256,uint256)"(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "scaledTotalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setUserBalanceAndSupply(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setUserBalanceAndSupply(uint256,uint256)"(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _aic(overrides?: CallOverrides): Promise<string>;

  "_aic()"(overrides?: CallOverrides): Promise<string>;

  cleanUserState(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cleanUserState()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  doubleHandleActionOnAic(
    user: string,
    totalSupply: BigNumberish,
    userBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "doubleHandleActionOnAic(address,uint256,uint256)"(
    user: string,
    totalSupply: BigNumberish,
    userBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getScaledUserBalanceAndSupply(
    user: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  "getScaledUserBalanceAndSupply(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  handleActionOnAic(
    user: string,
    totalSupply: BigNumberish,
    userBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "handleActionOnAic(address,uint256,uint256)"(
    user: string,
    totalSupply: BigNumberish,
    userBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  setUserBalanceAndSupply(
    userBalance: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setUserBalanceAndSupply(uint256,uint256)"(
    userBalance: BigNumberish,
    totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _aic(overrides?: CallOverrides): Promise<string>;

    "_aic()"(overrides?: CallOverrides): Promise<string>;

    cleanUserState(overrides?: CallOverrides): Promise<void>;

    "cleanUserState()"(overrides?: CallOverrides): Promise<void>;

    doubleHandleActionOnAic(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "doubleHandleActionOnAic(address,uint256,uint256)"(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    handleActionOnAic(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "handleActionOnAic(address,uint256,uint256)"(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    setUserBalanceAndSupply(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUserBalanceAndSupply(uint256,uint256)"(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AssetConfigUpdated(
      asset: string | null,
      emission: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; emission: BigNumber }
    >;

    AssetIndexUpdated(
      asset: string | null,
      index: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; index: BigNumber }
    >;

    RewardsAccrued(
      user: string | null,
      amount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    UserIndexUpdated(
      user: string | null,
      asset: string | null,
      index: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; asset: string; index: BigNumber }
    >;
  };

  estimateGas: {
    _aic(overrides?: CallOverrides): Promise<BigNumber>;

    "_aic()"(overrides?: CallOverrides): Promise<BigNumber>;

    cleanUserState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cleanUserState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    doubleHandleActionOnAic(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "doubleHandleActionOnAic(address,uint256,uint256)"(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleActionOnAic(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "handleActionOnAic(address,uint256,uint256)"(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    setUserBalanceAndSupply(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setUserBalanceAndSupply(uint256,uint256)"(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _aic(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_aic()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cleanUserState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cleanUserState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    doubleHandleActionOnAic(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "doubleHandleActionOnAic(address,uint256,uint256)"(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleActionOnAic(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "handleActionOnAic(address,uint256,uint256)"(
      user: string,
      totalSupply: BigNumberish,
      userBalance: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "scaledTotalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setUserBalanceAndSupply(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setUserBalanceAndSupply(uint256,uint256)"(
      userBalance: BigNumberish,
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
