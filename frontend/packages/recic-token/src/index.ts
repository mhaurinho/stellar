import { Buffer } from "buffer";
import { Address } from "@stellar/stellar-sdk";
import {
  AssembledTransaction,
  Client as ContractClient,
  ClientOptions as ContractClientOptions,
  MethodOptions,
  Result,
  Spec as ContractSpec,
} from "@stellar/stellar-sdk/contract";
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Timepoint,
  Duration,
} from "@stellar/stellar-sdk/contract";
export * from "@stellar/stellar-sdk";
export * as contract from "@stellar/stellar-sdk/contract";
export * as rpc from "@stellar/stellar-sdk/rpc";

if (typeof window !== "undefined") {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}


export const networks = {
  testnet: {
    networkPassphrase: "Test SDF Network ; September 2015",
    contractId: "CDJSWDWI7H6I7FSUTKUWRFSOIIVJEXFOKM6WB67GLGAO72U7KDV4XQR4",
  }
} as const

export const Errors = {
  1: {message:"AlreadyInitialized"},
  2: {message:"NotInitialized"},
  3: {message:"InsufficientBalance"},
  4: {message:"InvalidAmount"}
}

export type DataKey = {tag: "Admin", values: void} | {tag: "Rate", values: void} | {tag: "Balance", values: readonly [string]} | {tag: "Recycled", values: readonly [string]};

export interface Client {
  /**
   * Construct and simulate a rate transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  rate: (options?: MethodOptions) => Promise<AssembledTransaction<i128>>

  /**
   * Construct and simulate a redeem transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Cidadao gasta `amount` tokens no comercio (desconto). Requer auth do cidadao.
   */
  redeem: ({from, merchant, amount}: {from: string, merchant: string, amount: i128}, options?: MethodOptions) => Promise<AssembledTransaction<Result<void>>>

  /**
   * Construct and simulate a balance transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  balance: ({id}: {id: string}, options?: MethodOptions) => Promise<AssembledTransaction<i128>>

  /**
   * Construct and simulate a initialize transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Configura o contrato. `rate` = tokens de recompensa por kg reciclado.
   */
  initialize: ({admin, rate}: {admin: string, rate: i128}, options?: MethodOptions) => Promise<AssembledTransaction<Result<void>>>

  /**
   * Construct and simulate a total_recycled transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  total_recycled: ({id}: {id: string}, options?: MethodOptions) => Promise<AssembledTransaction<i128>>

  /**
   * Construct and simulate a register_recycle transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Ecoponto (admin) valida um descarte de `kg` e minta a recompensa para o cidadao.
   */
  register_recycle: ({to, kg}: {to: string, kg: i128}, options?: MethodOptions) => Promise<AssembledTransaction<Result<i128>>>

}
export class Client extends ContractClient {
  static async deploy<T = Client>(
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options: MethodOptions &
      Omit<ContractClientOptions, "contractId"> & {
        /** The hash of the Wasm blob, which must already be installed on-chain. */
        wasmHash: Buffer | string;
        /** Salt used to generate the contract's ID. Passed through to {@link Operation.createCustomContract}. Default: random. */
        salt?: Buffer | Uint8Array;
        /** The format used to decode `wasmHash`, if it's provided as a string. */
        format?: "hex" | "base64";
      }
  ): Promise<AssembledTransaction<T>> {
    return ContractClient.deploy(null, options)
  }
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([ "AAAABAAAAAAAAAAAAAAABUVycm9yAAAAAAAABAAAAAAAAAASQWxyZWFkeUluaXRpYWxpemVkAAAAAAABAAAAAAAAAA5Ob3RJbml0aWFsaXplZAAAAAAAAgAAAAAAAAATSW5zdWZmaWNpZW50QmFsYW5jZQAAAAADAAAAAAAAAA1JbnZhbGlkQW1vdW50AAAAAAAABA==",
        "AAAAAgAAAAAAAAAAAAAAB0RhdGFLZXkAAAAABAAAAAAAAAAAAAAABUFkbWluAAAAAAAAAAAAAAAAAAAEUmF0ZQAAAAEAAAAAAAAAB0JhbGFuY2UAAAAAAQAAABMAAAABAAAAAAAAAAhSZWN5Y2xlZAAAAAEAAAAT",
        "AAAAAAAAAAAAAAAEcmF0ZQAAAAAAAAABAAAACw==",
        "AAAAAAAAAE1DaWRhZGFvIGdhc3RhIGBhbW91bnRgIHRva2VucyBubyBjb21lcmNpbyAoZGVzY29udG8pLiBSZXF1ZXIgYXV0aCBkbyBjaWRhZGFvLgAAAAAAAAZyZWRlZW0AAAAAAAMAAAAAAAAABGZyb20AAAATAAAAAAAAAAhtZXJjaGFudAAAABMAAAAAAAAABmFtb3VudAAAAAAACwAAAAEAAAPpAAAAAgAAAAM=",
        "AAAAAAAAAAAAAAAHYmFsYW5jZQAAAAABAAAAAAAAAAJpZAAAAAAAEwAAAAEAAAAL",
        "AAAAAAAAAEVDb25maWd1cmEgbyBjb250cmF0by4gYHJhdGVgID0gdG9rZW5zIGRlIHJlY29tcGVuc2EgcG9yIGtnIHJlY2ljbGFkby4AAAAAAAAKaW5pdGlhbGl6ZQAAAAAAAgAAAAAAAAAFYWRtaW4AAAAAAAATAAAAAAAAAARyYXRlAAAACwAAAAEAAAPpAAAAAgAAAAM=",
        "AAAAAAAAAAAAAAAOdG90YWxfcmVjeWNsZWQAAAAAAAEAAAAAAAAAAmlkAAAAAAATAAAAAQAAAAs=",
        "AAAAAAAAAFBFY29wb250byAoYWRtaW4pIHZhbGlkYSB1bSBkZXNjYXJ0ZSBkZSBga2dgIGUgbWludGEgYSByZWNvbXBlbnNhIHBhcmEgbyBjaWRhZGFvLgAAABByZWdpc3Rlcl9yZWN5Y2xlAAAAAgAAAAAAAAACdG8AAAAAABMAAAAAAAAAAmtnAAAAAAALAAAAAQAAA+kAAAALAAAAAw==" ]),
      options
    )
  }
  public readonly fromJSON = {
    rate: this.txFromJSON<i128>,
        redeem: this.txFromJSON<Result<void>>,
        balance: this.txFromJSON<i128>,
        initialize: this.txFromJSON<Result<void>>,
        total_recycled: this.txFromJSON<i128>,
        register_recycle: this.txFromJSON<Result<i128>>
  }
}