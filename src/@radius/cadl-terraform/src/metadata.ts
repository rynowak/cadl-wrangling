import { NamespaceType, Program } from "@cadl-lang/compiler";

const terraformNamespaceKey = Symbol();
export function $terraform(program: Program, container: NamespaceType) {
    program.stateSet(terraformNamespaceKey).add(container);
}

export function getTerraformNamespaces(program: Program) {
    return Array.from(program.stateSet(terraformNamespaceKey).values());
}