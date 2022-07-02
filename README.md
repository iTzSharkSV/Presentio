# Presentio

`Present CLI Info in Style! (A CLI app helper)`

![CircleCI](https://img.shields.io/circleci/build/github/iTzSharkSV/Presentio?logo=circleci&style=for-the-badge) ![Codecov](https://img.shields.io/codecov/c/github/iTzSharkSV/Presentio?logo=codecov&style=for-the-badge) ![npm bundle size](https://img.shields.io/bundlephobia/min/presentio?logo=npm&style=for-the-badge)

<a href="https://www.buymeacoffee.com/shorky" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" width="150"></a>

---

## The Why?

```Txt
Why use Presentio instead of console.log()?
-------------------------------------------
Simply put it, its way more:
  - Elegent
  - Colorful
  - Readable
  - & Minimal
```

```Txt
Why create a whole library for this?
------------------------------------
Presentio is a tool that was originally created for the Hyper Cli;
The use of various libraries to just log some basic colored txt & a help msg was a bit too excessive.
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

`Example usage: Hyper`

```Typescript
import Present from 'presentio';

Present({
  title: 'Hyper',
  tagline: 'by @Shorky',
  description: 'A CLI to bootstrap new projects!',
  version: '1.0',
  // defaults > fg: 'black', bg: 'green', clear: true
}, helpMessage);
     // ^ Msg to print upon use of help argument (ig* -h, --help)
```

`Presentio also includes a built-in fn to ease the process of creating a help message.`

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
```

`Expected output from: $ hyper -h/--help`

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
├─ .circleci
│  └─ config.yml
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  ├─ BUG_REPORT.md
│  │  └─ FEATURE_REQUEST.md
│  ├─ workflows
│  │  ├─ CodeQL.yml
│  │  └─ Release.yml
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .husky
│  └─ pre-commit
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
├─ __Tests__
│  └─ <!-- Same as @Lib -->
├─ .gitignore
├─ .prettierrc    <!-- Available within package.json -->
├─ .eslintrc      <!-- Available within package.json -->
├─ jest.config.ts
├─ rollup.config.js
├─ README.md
├─ package.json
└─ tsconfig.json
```

```Txt
Made With ♥ By @Shorky
```

## License

```Txt
#
# Copyright 2022 @SharkSV
# License Identifier: MIT
#
```
