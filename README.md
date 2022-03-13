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

## Add from source

```Txt
# clone repo
$ git clone https://github.com/iTzSharkSV/Hyper.git

# move the Lib folder to your project
# & then
# import like normal
```

## Usage/Examples

```Txt
import Present from 'presentio';

Present({
	title: 'Present',
	tagLine: 'by @Shorky',
	description: 'CLI-Info in style!',
	version: '1.0',
	fgColor: 'white',  # optional
	bgColor: 'green',  # optional
	clear: true        # optional
});
---------------------------------------------------------

# output
# fancy stuff included ;D
Hyper v1.0 by @Shorky
CLI-Info in style!

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
│  │  ├─ Clear.js
│  │  ├─ Clrs.js
│  │  └─ Fmt.js
│  └─ Present.js
├─ Tests
│  └─ Present.Test.js
├─ .gitignore
├─ .prettierrc  # Available within package.json
├─ README.md
├─ package.json
└─ LICENSE
```

## License

```Txt
#
# Copyright 2022 @SharkSV
# License Identifier: MIT
#
```
