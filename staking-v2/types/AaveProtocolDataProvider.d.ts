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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AaveProtocolDataProviderInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "getAllATokens()": FunctionFragment;
    "getAllReservesTokens()": FunctionFragment;
    "getReserveConfigurationData(address)": FunctionFragment;
    "getReserveData(address)": FunctionFragment;
    "getReserveTokensAddresses(address)": FunctionFragment;
    "getUserReserveData(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllATokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllReservesTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveConfigurationData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveTokensAddresses",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserReserveData",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllATokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllReservesTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveConfigurationData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveTokensAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserReserveData",
    data: BytesLike
  ): Result;

  events: {};
}

export class AaveProtocolDataProvider extends Contract {
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

  interface: AaveProtocolDataProviderInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<[string]>;

    getAllATokens(
      overrides?: CallOverrides
    ): Promise<
      [([string, string] & { symbol: string; tokenAddress: string })[]]
    >;

    "getAllATokens()"(
      overrides?: CallOverrides
    ): Promise<
      [([string, string] & { symbol: string; tokenAddress: string })[]]
    >;

    getAllReservesTokens(
      overrides?: CallOverrides
    ): Promise<
      [([string, string] & { symbol: string; tokenAddress: string })[]]
    >;

    "getAllReservesTokens()"(
      overrides?: CallOverrides
    ): Promise<
      [([string, string] & { symbol: string; tokenAddress: string })[]]
    >;

    getReserveConfigurationData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
      ] & {
        decimals: BigNumber;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
      }
    >;

    "getReserveConfigurationData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
      ] & {
        decimals: BigNumber;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
      }
    >;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        availableLiquidity: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        averageStableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        lastUpdateTimestamp: number;
      }
    >;

    "getReserveData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        availableLiquidity: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        averageStableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        lastUpdateTimestamp: number;
      }
    >;

    getReserveTokensAddresses(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
      }
    >;

    "getReserveTokensAddresses(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
      }
    >;

    getUserReserveData(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        currentATokenBalance: BigNumber;
        currentStableDebt: BigNumber;
        currentVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        scaledVariableDebt: BigNumber;
        stableBorrowRate: BigNumber;
        liquidityRate: BigNumber;
        stableRateLastUpdated: number;
        usageAsCollateralEnabled: boolean;
      }
    >;

    "getUserReserveData(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        currentATokenBalance: BigNumber;
        currentStableDebt: BigNumber;
        currentVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        scaledVariableDebt: BigNumber;
        stableBorrowRate: BigNumber;
        liquidityRate: BigNumber;
        stableRateLastUpdated: number;
        usageAsCollateralEnabled: boolean;
      }
    >;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

  getAllATokens(
    overrides?: CallOverrides
  ): Promise<([string, string] & { symbol: string; tokenAddress: string })[]>;

  "getAllATokens()"(
    overrides?: CallOverrides
  ): Promise<([string, string] & { symbol: string; tokenAddress: string })[]>;

  getAllReservesTokens(
    overrides?: CallOverrides
  ): Promise<([string, string] & { symbol: string; tokenAddress: string })[]>;

  "getAllReservesTokens()"(
    overrides?: CallOverrides
  ): Promise<([string, string] & { symbol: string; tokenAddress: string })[]>;

  getReserveConfigurationData(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean
    ] & {
      decimals: BigNumber;
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
    }
  >;

  "getReserveConfigurationData(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean
    ] & {
      decimals: BigNumber;
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
    }
  >;

  getReserveData(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number
    ] & {
      availableLiquidity: BigNumber;
      totalStableDebt: BigNumber;
      totalVariableDebt: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      averageStableBorrowRate: BigNumber;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      lastUpdateTimestamp: number;
    }
  >;

  "getReserveData(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number
    ] & {
      availableLiquidity: BigNumber;
      totalStableDebt: BigNumber;
      totalVariableDebt: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      averageStableBorrowRate: BigNumber;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      lastUpdateTimestamp: number;
    }
  >;

  getReserveTokensAddresses(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
    }
  >;

  "getReserveTokensAddresses(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
    }
  >;

  getUserReserveData(
    asset: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      currentATokenBalance: BigNumber;
      currentStableDebt: BigNumber;
      currentVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      scaledVariableDebt: BigNumber;
      stableBorrowRate: BigNumber;
      liquidityRate: BigNumber;
      stableRateLastUpdated: number;
      usageAsCollateralEnabled: boolean;
    }
  >;

  "getUserReserveData(address,address)"(
    asset: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      currentATokenBalance: BigNumber;
      currentStableDebt: BigNumber;
      currentVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      scaledVariableDebt: BigNumber;
      stableBorrowRate: BigNumber;
      liquidityRate: BigNumber;
      stableRateLastUpdated: number;
      usageAsCollateralEnabled: boolean;
    }
  >;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

    getAllATokens(
      overrides?: CallOverrides
    ): Promise<([string, string] & { symbol: string; tokenAddress: string })[]>;

    "getAllATokens()"(
      overrides?: CallOverrides
    ): Promise<([string, string] & { symbol: string; tokenAddress: string })[]>;

    getAllReservesTokens(
      overrides?: CallOverrides
    ): Promise<([string, string] & { symbol: string; tokenAddress: string })[]>;

    "getAllReservesTokens()"(
      overrides?: CallOverrides
    ): Promise<([string, string] & { symbol: string; tokenAddress: string })[]>;

    getReserveConfigurationData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
      ] & {
        decimals: BigNumber;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
      }
    >;

    "getReserveConfigurationData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
      ] & {
        decimals: BigNumber;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
      }
    >;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        availableLiquidity: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        averageStableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        lastUpdateTimestamp: number;
      }
    >;

    "getReserveData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        availableLiquidity: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        averageStableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        lastUpdateTimestamp: number;
      }
    >;

    getReserveTokensAddresses(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
      }
    >;

    "getReserveTokensAddresses(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
      }
    >;

    getUserReserveData(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        currentATokenBalance: BigNumber;
        currentStableDebt: BigNumber;
        currentVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        scaledVariableDebt: BigNumber;
        stableBorrowRate: BigNumber;
        liquidityRate: BigNumber;
        stableRateLastUpdated: number;
        usageAsCollateralEnabled: boolean;
      }
    >;

    "getUserReserveData(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        currentATokenBalance: BigNumber;
        currentStableDebt: BigNumber;
        currentVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        scaledVariableDebt: BigNumber;
        stableBorrowRate: BigNumber;
        liquidityRate: BigNumber;
        stableRateLastUpdated: number;
        usageAsCollateralEnabled: boolean;
      }
    >;
  };

  filters: {};

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAllATokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllATokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAllReservesTokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllReservesTokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveConfigurationData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveConfigurationData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveTokensAddresses(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveTokensAddresses(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserReserveData(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserReserveData(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ADDRESSES_PROVIDER()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllATokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAllATokens()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllReservesTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllReservesTokens()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveConfigurationData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveConfigurationData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveTokensAddresses(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveTokensAddresses(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserReserveData(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserReserveData(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
