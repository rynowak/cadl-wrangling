import { Program } from "@cadl-lang/compiler";
import path from "path";
import { getTerraformNamespaces } from "./metadata.js"

export interface TerraformOptions {
    outputPath: string;
}

export class TerraformEmitter {
    program: Program
    options: TerraformOptions

    constructor(program: Program, options: TerraformOptions) {
        this.program = program;
        this.options = options;
    }

    async Emit() {
        const namespaces = getTerraformNamespaces(this.program);
        if (namespaces.length === 0) {
            return
        }

        await this.program.host.mkdirp(this.options.outputPath);
        await this.program.host.writeFile(path.join(this.options.outputPath, "provider.go"), "")
    }
}