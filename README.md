# Presentio

`Present CLI Info in Style! (A CLI app helper)`

---

## The Why?

```Txt
Why use Presentio instead of console.log()?
-------------------------------------------------------
Simply put it, its way more:
  - Elegent
  - Colorful
  - Readable
  - & Minimal
```

```Txt
Why create a whole library for this?
------------------------------------

Presentio is a tool that was originally created for the `Hyper-Cli`;
The use of various libraries to just log some basic colored txt & a help msg was too excessive.
Here aroused the idea to create a fully fletched yet lightwieght library.
& that's how this project was born.
```

---

## Add as a Dependency

```Bash
yarn add presentio
# or
npm install presentio
```

## Usage/Examples

`@example: Hyper-Cli`

```Typescript
import Present from 'presentio';

Present({
  title: 'Hyper',
  tagline: 'by @Shorky',
  description: 'A CLI to bootstrap new projects!',
  version: '1.0',
  fg: 'black',   // default: black
  bg: 'green',   // default: green
  clear: true,   // default: true
}, helpMessage);
```

`Presentio also included a built-in fn to ease the process of creating a help message.`

```Typescript
import Present, { helpTxt } from 'presentio';

const cliCmds = {
  commands: {
    prettify: 'add rainbows everywhere'
  },
  flags: {
    rainbow: {
      alais: 'r',
      description: 'girl-in-red?',
      default: false
    }
  }
}

Present({
  ... // same config as above
}, helpTxt(cliCmds));
// & let the magic happen!
```

`Expected output`

```Txt
Hyper v1.0 by @Shorky
A CLI to bootstrap new projects!

Usage:
  $ hyper <commands> [options]

Commands:
  <!-- cmd: description -->
  prettify: add rainbows everywhere

Options:
  <!-- alias, flag: description -->
  -r, --rainbow: girl-in-red?
  -h, --help: Print CLI's helpTxt      <!-- Included by default -->
  -v, --version: Print CLI's version   <!-- Included by default -->
```

## Available Clrs (for fg&bg)

```Txt
<!-- Incase sensitive -->
- Black
- Red
- Green
- Yellow
- Blue
- Magenta
- Cyan
- White
<!-- We'll be adding more later -->
```

## Project Tree (For contributors)

```Txt
📦 <Presentio>
├─ __Tests__
│  ├─ Clrs.test.ts
│  └─ Present.test.ts
├─ .circleci
│  └─ config.yml
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  ├─ BUG_REPORT.md
│  │  └─ FEATURE_REQUEST.md
│  ├─ workflows
│  │  ├─ CodeQL.yml
│  │  └─ Release.yml
│  ├─ CODEOWNERS
│  ├─ FUNDING.yml
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .husky
│  └─ pre-commit
├─ Docs
│  ├─ CODE_OF_CONDUCT.md
│  ├─ CONTRIBUTING.md
│  └─ SECURITY.md
├─ Lib
│  ├─ @Types
│  │  ├─ Args.d.ts
│  │  ├─ Present.d.ts
│  │  └─ Usage.d.ts
│  ├─ Modules
│  │  ├─ Clear.ts
│  │  └─ Clrs.ts
│  ├─ Utils
│  │  ├─ ErrorHandler.ts
│  │  └─ Indent.ts
│  ├─ Args.ts
│  ├─ Present.ts
│  └─ Usage.ts
├─ .gitignore
├─ .prettierrc    <!-- Available within package.json -->
├─ .eslintrc      <!-- Available within package.json -->
├─ jest.config.ts
├─ rollup.config.js
├─ README.md
├─ package.json
├─ tsconfig.json
└─ LICENSE
```

## License

```Txt
#
# Copyright 2022 @SharkSV
# License Identifier: MIT
#
```
