# cadl-wrangling

## Blockers

No current support for discriminated unions, which we use pretty heavily. We will likely need support for "open" unions where we can specify a fallback type as well as more specific types. The challenge here is tooling - we need to allow 'punch through' for extensibility and flexibility. We also want to strongly validate and tool the built-in types we provide.

We will likely want/need projections.

Namespaces are both for structure of REST apis as well as code organization and name visibility. This is wierd. I wanted to use namespace to control the visibility of my types, and it lead to strange/invalid OpenAPI results. For example `@route("Applications") namespace Radius.Applications` outputs `path: "//Applications"`. I don't like this and would really prefer just having fewer built-in conventions.