// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Check codegen of functions with default values.
 */
export function funcWithDefaultValue(args: FuncWithDefaultValueArgs, opts?: pulumi.InvokeOptions): Promise<FuncWithDefaultValueResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("mypkg::funcWithDefaultValue", {
        "a": args.a,
        "b": args.b,
    }, opts);
}

export interface FuncWithDefaultValueArgs {
    a: string;
    b?: string;
}

export interface FuncWithDefaultValueResult {
    readonly r: string;
}
