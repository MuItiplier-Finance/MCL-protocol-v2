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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUiPoolDataProviderInterface extends ethers.utils.Interface {
  functions: {
    "getReservesData(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getReservesData",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getReservesData",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUiPoolDataProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUiPoolDataProviderInterface;

  functions: {
    getReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        underlyingAsset: string;
        name: string;
        symbol: string;
        decimals: BigNumber;
        baseLTVasCollateral: BigNumber;
        reserveLiquidationThreshold: BigNumber;
        reserveLiquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        availableLiquidity: BigNumber;
        totalPrincipalStableDebt: BigNumber;
        averageStableRate: BigNumber;
        stableDebtLastUpdateTimestamp: BigNumber;
        totalScaledVariableDebt: BigNumber;
        priceInEth: BigNumber;
        variableRateSlope1: BigNumber;
        variableRateSlope2: BigNumber;
        stableRateSlope1: BigNumber;
        stableRateSlope2: BigNumber;
        aEmissionPerSecond: BigNumber;
        vEmissionPerSecond: BigNumber;
        sEmissionPerSecond: BigNumber;
        aIncentivesLastUpdateTimestamp: BigNumber;
        vIncentivesLastUpdateTimestamp: BigNumber;
        sIncentivesLastUpdateTimestamp: BigNumber;
        aTokenIncentivesIndex: BigNumber;
        vTokenIncentivesIndex: BigNumber;
        sTokenIncentivesIndex: BigNumber;
        0: string;
        1: string;
        2: string;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: BigNumber;
        7: BigNumber;
        8: boolean;
        9: boolean;
        10: boolean;
        11: boolean;
        12: boolean;
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: number;
        19: string;
        20: string;
        21: string;
        22: string;
        23: BigNumber;
        24: BigNumber;
        25: BigNumber;
        26: BigNumber;
        27: BigNumber;
        28: BigNumber;
        29: BigNumber;
        30: BigNumber;
        31: BigNumber;
        32: BigNumber;
        33: BigNumber;
        34: BigNumber;
        35: BigNumber;
        36: BigNumber;
        37: BigNumber;
        38: BigNumber;
        39: BigNumber;
        40: BigNumber;
        41: BigNumber;
      }[];
      1: {
        underlyingAsset: string;
        scaledATokenBalance: BigNumber;
        usageAsCollateralEnabledOnUser: boolean;
        stableBorrowRate: BigNumber;
        scaledVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        stableBorrowLastUpdateTimestamp: BigNumber;
        aTokenincentivesUserIndex: BigNumber;
        vTokenincentivesUserIndex: BigNumber;
        sTokenincentivesUserIndex: BigNumber;
        0: string;
        1: BigNumber;
        2: boolean;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: BigNumber;
        7: BigNumber;
        8: BigNumber;
        9: BigNumber;
      }[];
      2: BigNumber;
      3: BigNumber;
    }>;

    "getReservesData(address,address)"(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        underlyingAsset: string;
        name: string;
        symbol: string;
        decimals: BigNumber;
        baseLTVasCollateral: BigNumber;
        reserveLiquidationThreshold: BigNumber;
        reserveLiquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        availableLiquidity: BigNumber;
        totalPrincipalStableDebt: BigNumber;
        averageStableRate: BigNumber;
        stableDebtLastUpdateTimestamp: BigNumber;
        totalScaledVariableDebt: BigNumber;
        priceInEth: BigNumber;
        variableRateSlope1: BigNumber;
        variableRateSlope2: BigNumber;
        stableRateSlope1: BigNumber;
        stableRateSlope2: BigNumber;
        aEmissionPerSecond: BigNumber;
        vEmissionPerSecond: BigNumber;
        sEmissionPerSecond: BigNumber;
        aIncentivesLastUpdateTimestamp: BigNumber;
        vIncentivesLastUpdateTimestamp: BigNumber;
        sIncentivesLastUpdateTimestamp: BigNumber;
        aTokenIncentivesIndex: BigNumber;
        vTokenIncentivesIndex: BigNumber;
        sTokenIncentivesIndex: BigNumber;
        0: string;
        1: string;
        2: string;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: BigNumber;
        7: BigNumber;
        8: boolean;
        9: boolean;
        10: boolean;
        11: boolean;
        12: boolean;
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: number;
        19: string;
        20: string;
        21: string;
        22: string;
        23: BigNumber;
        24: BigNumber;
        25: BigNumber;
        26: BigNumber;
        27: BigNumber;
        28: BigNumber;
        29: BigNumber;
        30: BigNumber;
        31: BigNumber;
        32: BigNumber;
        33: BigNumber;
        34: BigNumber;
        35: BigNumber;
        36: BigNumber;
        37: BigNumber;
        38: BigNumber;
        39: BigNumber;
        40: BigNumber;
        41: BigNumber;
      }[];
      1: {
        underlyingAsset: string;
        scaledATokenBalance: BigNumber;
        usageAsCollateralEnabledOnUser: boolean;
        stableBorrowRate: BigNumber;
        scaledVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        stableBorrowLastUpdateTimestamp: BigNumber;
        aTokenincentivesUserIndex: BigNumber;
        vTokenincentivesUserIndex: BigNumber;
        sTokenincentivesUserIndex: BigNumber;
        0: string;
        1: BigNumber;
        2: boolean;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: BigNumber;
        7: BigNumber;
        8: BigNumber;
        9: BigNumber;
      }[];
      2: BigNumber;
      3: BigNumber;
    }>;
  };

  getReservesData(
    provider: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: {
      underlyingAsset: string;
      name: string;
      symbol: string;
      decimals: BigNumber;
      baseLTVasCollateral: BigNumber;
      reserveLiquidationThreshold: BigNumber;
      reserveLiquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      lastUpdateTimestamp: number;
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      interestRateStrategyAddress: string;
      availableLiquidity: BigNumber;
      totalPrincipalStableDebt: BigNumber;
      averageStableRate: BigNumber;
      stableDebtLastUpdateTimestamp: BigNumber;
      totalScaledVariableDebt: BigNumber;
      priceInEth: BigNumber;
      variableRateSlope1: BigNumber;
      variableRateSlope2: BigNumber;
      stableRateSlope1: BigNumber;
      stableRateSlope2: BigNumber;
      aEmissionPerSecond: BigNumber;
      vEmissionPerSecond: BigNumber;
      sEmissionPerSecond: BigNumber;
      aIncentivesLastUpdateTimestamp: BigNumber;
      vIncentivesLastUpdateTimestamp: BigNumber;
      sIncentivesLastUpdateTimestamp: BigNumber;
      aTokenIncentivesIndex: BigNumber;
      vTokenIncentivesIndex: BigNumber;
      sTokenIncentivesIndex: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: boolean;
      9: boolean;
      10: boolean;
      11: boolean;
      12: boolean;
      13: BigNumber;
      14: BigNumber;
      15: BigNumber;
      16: BigNumber;
      17: BigNumber;
      18: number;
      19: string;
      20: string;
      21: string;
      22: string;
      23: BigNumber;
      24: BigNumber;
      25: BigNumber;
      26: BigNumber;
      27: BigNumber;
      28: BigNumber;
      29: BigNumber;
      30: BigNumber;
      31: BigNumber;
      32: BigNumber;
      33: BigNumber;
      34: BigNumber;
      35: BigNumber;
      36: BigNumber;
      37: BigNumber;
      38: BigNumber;
      39: BigNumber;
      40: BigNumber;
      41: BigNumber;
    }[];
    1: {
      underlyingAsset: string;
      scaledATokenBalance: BigNumber;
      usageAsCollateralEnabledOnUser: boolean;
      stableBorrowRate: BigNumber;
      scaledVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      stableBorrowLastUpdateTimestamp: BigNumber;
      aTokenincentivesUserIndex: BigNumber;
      vTokenincentivesUserIndex: BigNumber;
      sTokenincentivesUserIndex: BigNumber;
      0: string;
      1: BigNumber;
      2: boolean;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
    }[];
    2: BigNumber;
    3: BigNumber;
  }>;

  "getReservesData(address,address)"(
    provider: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: {
      underlyingAsset: string;
      name: string;
      symbol: string;
      decimals: BigNumber;
      baseLTVasCollateral: BigNumber;
      reserveLiquidationThreshold: BigNumber;
      reserveLiquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      lastUpdateTimestamp: number;
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      interestRateStrategyAddress: string;
      availableLiquidity: BigNumber;
      totalPrincipalStableDebt: BigNumber;
      averageStableRate: BigNumber;
      stableDebtLastUpdateTimestamp: BigNumber;
      totalScaledVariableDebt: BigNumber;
      priceInEth: BigNumber;
      variableRateSlope1: BigNumber;
      variableRateSlope2: BigNumber;
      stableRateSlope1: BigNumber;
      stableRateSlope2: BigNumber;
      aEmissionPerSecond: BigNumber;
      vEmissionPerSecond: BigNumber;
      sEmissionPerSecond: BigNumber;
      aIncentivesLastUpdateTimestamp: BigNumber;
      vIncentivesLastUpdateTimestamp: BigNumber;
      sIncentivesLastUpdateTimestamp: BigNumber;
      aTokenIncentivesIndex: BigNumber;
      vTokenIncentivesIndex: BigNumber;
      sTokenIncentivesIndex: BigNumber;
      0: string;
      1: string;
      2: string;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: boolean;
      9: boolean;
      10: boolean;
      11: boolean;
      12: boolean;
      13: BigNumber;
      14: BigNumber;
      15: BigNumber;
      16: BigNumber;
      17: BigNumber;
      18: number;
      19: string;
      20: string;
      21: string;
      22: string;
      23: BigNumber;
      24: BigNumber;
      25: BigNumber;
      26: BigNumber;
      27: BigNumber;
      28: BigNumber;
      29: BigNumber;
      30: BigNumber;
      31: BigNumber;
      32: BigNumber;
      33: BigNumber;
      34: BigNumber;
      35: BigNumber;
      36: BigNumber;
      37: BigNumber;
      38: BigNumber;
      39: BigNumber;
      40: BigNumber;
      41: BigNumber;
    }[];
    1: {
      underlyingAsset: string;
      scaledATokenBalance: BigNumber;
      usageAsCollateralEnabledOnUser: boolean;
      stableBorrowRate: BigNumber;
      scaledVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      stableBorrowLastUpdateTimestamp: BigNumber;
      aTokenincentivesUserIndex: BigNumber;
      vTokenincentivesUserIndex: BigNumber;
      sTokenincentivesUserIndex: BigNumber;
      0: string;
      1: BigNumber;
      2: boolean;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
    }[];
    2: BigNumber;
    3: BigNumber;
  }>;

  callStatic: {
    getReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        underlyingAsset: string;
        name: string;
        symbol: string;
        decimals: BigNumber;
        baseLTVasCollateral: BigNumber;
        reserveLiquidationThreshold: BigNumber;
        reserveLiquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        availableLiquidity: BigNumber;
        totalPrincipalStableDebt: BigNumber;
        averageStableRate: BigNumber;
        stableDebtLastUpdateTimestamp: BigNumber;
        totalScaledVariableDebt: BigNumber;
        priceInEth: BigNumber;
        variableRateSlope1: BigNumber;
        variableRateSlope2: BigNumber;
        stableRateSlope1: BigNumber;
        stableRateSlope2: BigNumber;
        aEmissionPerSecond: BigNumber;
        vEmissionPerSecond: BigNumber;
        sEmissionPerSecond: BigNumber;
        aIncentivesLastUpdateTimestamp: BigNumber;
        vIncentivesLastUpdateTimestamp: BigNumber;
        sIncentivesLastUpdateTimestamp: BigNumber;
        aTokenIncentivesIndex: BigNumber;
        vTokenIncentivesIndex: BigNumber;
        sTokenIncentivesIndex: BigNumber;
        0: string;
        1: string;
        2: string;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: BigNumber;
        7: BigNumber;
        8: boolean;
        9: boolean;
        10: boolean;
        11: boolean;
        12: boolean;
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: number;
        19: string;
        20: string;
        21: string;
        22: string;
        23: BigNumber;
        24: BigNumber;
        25: BigNumber;
        26: BigNumber;
        27: BigNumber;
        28: BigNumber;
        29: BigNumber;
        30: BigNumber;
        31: BigNumber;
        32: BigNumber;
        33: BigNumber;
        34: BigNumber;
        35: BigNumber;
        36: BigNumber;
        37: BigNumber;
        38: BigNumber;
        39: BigNumber;
        40: BigNumber;
        41: BigNumber;
      }[];
      1: {
        underlyingAsset: string;
        scaledATokenBalance: BigNumber;
        usageAsCollateralEnabledOnUser: boolean;
        stableBorrowRate: BigNumber;
        scaledVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        stableBorrowLastUpdateTimestamp: BigNumber;
        aTokenincentivesUserIndex: BigNumber;
        vTokenincentivesUserIndex: BigNumber;
        sTokenincentivesUserIndex: BigNumber;
        0: string;
        1: BigNumber;
        2: boolean;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: BigNumber;
        7: BigNumber;
        8: BigNumber;
        9: BigNumber;
      }[];
      2: BigNumber;
      3: BigNumber;
    }>;

    "getReservesData(address,address)"(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        underlyingAsset: string;
        name: string;
        symbol: string;
        decimals: BigNumber;
        baseLTVasCollateral: BigNumber;
        reserveLiquidationThreshold: BigNumber;
        reserveLiquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        availableLiquidity: BigNumber;
        totalPrincipalStableDebt: BigNumber;
        averageStableRate: BigNumber;
        stableDebtLastUpdateTimestamp: BigNumber;
        totalScaledVariableDebt: BigNumber;
        priceInEth: BigNumber;
        variableRateSlope1: BigNumber;
        variableRateSlope2: BigNumber;
        stableRateSlope1: BigNumber;
        stableRateSlope2: BigNumber;
        aEmissionPerSecond: BigNumber;
        vEmissionPerSecond: BigNumber;
        sEmissionPerSecond: BigNumber;
        aIncentivesLastUpdateTimestamp: BigNumber;
        vIncentivesLastUpdateTimestamp: BigNumber;
        sIncentivesLastUpdateTimestamp: BigNumber;
        aTokenIncentivesIndex: BigNumber;
        vTokenIncentivesIndex: BigNumber;
        sTokenIncentivesIndex: BigNumber;
        0: string;
        1: string;
        2: string;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: BigNumber;
        7: BigNumber;
        8: boolean;
        9: boolean;
        10: boolean;
        11: boolean;
        12: boolean;
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: number;
        19: string;
        20: string;
        21: string;
        22: string;
        23: BigNumber;
        24: BigNumber;
        25: BigNumber;
        26: BigNumber;
        27: BigNumber;
        28: BigNumber;
        29: BigNumber;
        30: BigNumber;
        31: BigNumber;
        32: BigNumber;
        33: BigNumber;
        34: BigNumber;
        35: BigNumber;
        36: BigNumber;
        37: BigNumber;
        38: BigNumber;
        39: BigNumber;
        40: BigNumber;
        41: BigNumber;
      }[];
      1: {
        underlyingAsset: string;
        scaledATokenBalance: BigNumber;
        usageAsCollateralEnabledOnUser: boolean;
        stableBorrowRate: BigNumber;
        scaledVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        stableBorrowLastUpdateTimestamp: BigNumber;
        aTokenincentivesUserIndex: BigNumber;
        vTokenincentivesUserIndex: BigNumber;
        sTokenincentivesUserIndex: BigNumber;
        0: string;
        1: BigNumber;
        2: boolean;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: BigNumber;
        7: BigNumber;
        8: BigNumber;
        9: BigNumber;
      }[];
      2: BigNumber;
      3: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    getReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReservesData(address,address)"(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getReservesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReservesData(address,address)"(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
