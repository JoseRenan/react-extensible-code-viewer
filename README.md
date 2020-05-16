# react-extensible-code-viewer

A simple and extensible codeviewer component for react. [See example](https://joserenan.github.io/react-extensible-code-viewer/)

[![NPM](https://img.shields.io/npm/v/react-extensible-code-viewer.svg)](https://www.npmjs.com/package/react-extensible-code-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-extensible-code-viewer
```

## Usage

```tsx
import React, { Component } from 'react'

import { CodeViewer } from 'react-extensible-code-viewer'
import 'react-extensible-code-viewer/dist/index.css'

const code = `const a = 2
const b = 3;
console.log(a + b)`

class Example extends Component {
  render() {
    return <CodeViewer code={code} language='javascript' />
  }
}
```

## Customization

You can also customize the line component using the `line` render prop:

```tsx
class Example extends Component {
  render() {
    return <CodeViewer code={code} language='javascript' line={(lineNumber, code, children) => <MyLineComponent />)} />
  }
}
```

You can see a working example [here](https://joserenan.github.io/react-extensible-code-viewer/)

## License

MIT © [JoseRenan](https://github.com/JoseRenan)
