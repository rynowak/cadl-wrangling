import { createCadlLibrary, paramMessage } from "@cadl-lang/compiler";

const libDef = {
  name: "@radius/cadl-terraform",
  diagnostics: {
    "security-service-namespace": {
      severity: "error",
      messages: {
        default: "Cannot add security details to a namespace other than the service namespace.",
      },
    },
  },
} as const;
export const { reportDiagnostic } = createCadlLibrary(libDef);