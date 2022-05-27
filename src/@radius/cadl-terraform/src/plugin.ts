import { ContainerNode, NamespaceType, Program, Type } from "@cadl-lang/compiler";
import { reportDiagnostic } from "./lib.js"
import { TerraformEmitter, TerraformOptions } from "./emitter.js"
import path from "path";

export async function $onBuild(p: Program) {
    if (p.stateSet(terraformNamespaceKey).size === 0) {
        return;
    }

    const options: TerraformOptions = { 
        outputPath: p.host.resolveAbsolutePath(path.join((p.compilerOptions.outputPath || "." ), "terraform")),
    };

    const emitter = new TerraformEmitter(p, options);
    await emitter.Emit();
}

const terraformNamespaceKey = Symbol();
export function $terraform(program: Program, container: NamespaceType) {
    program.stateSet(terraformNamespaceKey).add(container);
}