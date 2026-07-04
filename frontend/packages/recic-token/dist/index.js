import { Buffer } from "buffer";
import { Client as ContractClient, Spec as ContractSpec, } from "@stellar/stellar-sdk/contract";
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
};
export const Errors = {
    1: { message: "AlreadyInitialized" },
    2: { message: "NotInitialized" },
    3: { message: "InsufficientBalance" },
    4: { message: "InvalidAmount" }
};
export class Client extends ContractClient {
    options;
    static async deploy(
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options) {
        return ContractClient.deploy(null, options);
    }
    constructor(options) {
        super(new ContractSpec(["AAAABAAAAAAAAAAAAAAABUVycm9yAAAAAAAABAAAAAAAAAASQWxyZWFkeUluaXRpYWxpemVkAAAAAAABAAAAAAAAAA5Ob3RJbml0aWFsaXplZAAAAAAAAgAAAAAAAAATSW5zdWZmaWNpZW50QmFsYW5jZQAAAAADAAAAAAAAAA1JbnZhbGlkQW1vdW50AAAAAAAABA==",
            "AAAAAgAAAAAAAAAAAAAAB0RhdGFLZXkAAAAABAAAAAAAAAAAAAAABUFkbWluAAAAAAAAAAAAAAAAAAAEUmF0ZQAAAAEAAAAAAAAAB0JhbGFuY2UAAAAAAQAAABMAAAABAAAAAAAAAAhSZWN5Y2xlZAAAAAEAAAAT",
            "AAAAAAAAAAAAAAAEcmF0ZQAAAAAAAAABAAAACw==",
            "AAAAAAAAAE1DaWRhZGFvIGdhc3RhIGBhbW91bnRgIHRva2VucyBubyBjb21lcmNpbyAoZGVzY29udG8pLiBSZXF1ZXIgYXV0aCBkbyBjaWRhZGFvLgAAAAAAAAZyZWRlZW0AAAAAAAMAAAAAAAAABGZyb20AAAATAAAAAAAAAAhtZXJjaGFudAAAABMAAAAAAAAABmFtb3VudAAAAAAACwAAAAEAAAPpAAAAAgAAAAM=",
            "AAAAAAAAAAAAAAAHYmFsYW5jZQAAAAABAAAAAAAAAAJpZAAAAAAAEwAAAAEAAAAL",
            "AAAAAAAAAEVDb25maWd1cmEgbyBjb250cmF0by4gYHJhdGVgID0gdG9rZW5zIGRlIHJlY29tcGVuc2EgcG9yIGtnIHJlY2ljbGFkby4AAAAAAAAKaW5pdGlhbGl6ZQAAAAAAAgAAAAAAAAAFYWRtaW4AAAAAAAATAAAAAAAAAARyYXRlAAAACwAAAAEAAAPpAAAAAgAAAAM=",
            "AAAAAAAAAAAAAAAOdG90YWxfcmVjeWNsZWQAAAAAAAEAAAAAAAAAAmlkAAAAAAATAAAAAQAAAAs=",
            "AAAAAAAAAFBFY29wb250byAoYWRtaW4pIHZhbGlkYSB1bSBkZXNjYXJ0ZSBkZSBga2dgIGUgbWludGEgYSByZWNvbXBlbnNhIHBhcmEgbyBjaWRhZGFvLgAAABByZWdpc3Rlcl9yZWN5Y2xlAAAAAgAAAAAAAAACdG8AAAAAABMAAAAAAAAAAmtnAAAAAAALAAAAAQAAA+kAAAALAAAAAw=="]), options);
        this.options = options;
    }
    fromJSON = {
        rate: (this.txFromJSON),
        redeem: (this.txFromJSON),
        balance: (this.txFromJSON),
        initialize: (this.txFromJSON),
        total_recycled: (this.txFromJSON),
        register_recycle: (this.txFromJSON)
    };
}
