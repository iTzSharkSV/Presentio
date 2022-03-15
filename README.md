`Presentio`

`CLI-Info... in style!`

> Presentio helps you to present your CLI info in a nice way.

---

## Add as a Dependency

```bash
npm install presentio
# or
yarn add presentio
```

## Usage/Examples

```Txt
# @example (Hyper: Project-Generator CLI)
-----------------------------------------

import Present from 'presentio';

# Separated hlpTxt for visual clarity
const hlpTxt = `
Usage:
  $ hyper <commands> [options]

Commands:
  init   Initialize a new project
  list   List all available templates

Options:
  -h, --help  Show CLI help
  -c, --clear  Clear Terminal
  -v, --version  Show CLI version
`;

Present(
	{
	  title: 'Hyper',
	  tagLine: 'by @Shorky',
	  description: 'A CLI to bootstrap new projects!',
	  version: '1.0',
	  fgColor: 'white',  # optional
	  bgColor: 'green',  # optional
	  clear: true        # optional
	},
    hlpTxt
);
```

```Txt
# output
# (rainbows included ;D)
------------------------

Hyper v1.0 by @Shorky
A CLI to bootstrap new projects!

Usage:
  $ hyper <commands> [options]

Commands:
  init   Initialize a new project
  list   List all available templates

Options:
  -h, --help  Show CLI help
  -c, --clear  Clear Terminal
  -v, --version  Show CLI version
```

## The Why?

```Txt
Why use Presentio instead of the default console.log()?
-------------------------------------------------------

  - Elegent
  - Colorful
  - Readable
  - Customizable
  - & Easy to use

  overall:
  - Its all about the small things!
```

```Txt
Why create a whole library for this?
------------------------------------

Presentio is a tool that was originally created for the `Hyper-CLI`;
The use of various libraries to just log some basic colored txt & a help msg was too excessive.
Here aroused the idea to create a fully fletched yet lightwieght library.
& that's how `Presentio` was born.
```

## Available Clrs (for fg&bg)

```Txt
- Black
- Red
- Green
- Yellow
- Blue
- Magenta
- Cyan
- White
```

## Project Tree (For contributors)

```Txt
📦 <Present>
├─ .circleci
│  └─ config.yml
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  ├─ BUG_REPORT.md
│  │  └─ FEATURE_REQUEST.md
│  ├─ workflows
│  │  └─ CodeQL.yml
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .husky
│  └─ pre-commit
├─ Docs
│  ├─ CODE_OF_CONDUCT.md
│  ├─ CONTRIBUTING.md
│  └─ SECURITY.md
├─ Lib
│  ├─ Modules
│  │  ├─ Clear.ts
│  │  ├─ Clrs.ts
│  │  └─ Fmt.ts
│  ├─ Info.ts
│  └─ Present.ts
├─ Tests
│  └─ Present.Test.mjs
├─ .gitignore
├─ .prettierrc  # Available within package.json
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
