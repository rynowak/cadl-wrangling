import {
    addModelProperty,
    addOperationParameter,
    addOperationResponseType,
} from "@cadl-lang/compiler";
import { http, $route } from "@cadl-lang/rest";
const { $path, $query } = http;

const applicationTypeKey = Symbol();
export function $applicationType(program, model) {
    program.stateSet(applicationTypeKey).add(model);
}

export function $radiusResource(program, container, model) {
    $route(program, container, `/Applications/{applicationName}/${model.type}`)
}

const radiusTypeKey = Symbol();
export function $radiusType(program, model) {
    program.stateSet(radiusTypeKey).add(model);
}