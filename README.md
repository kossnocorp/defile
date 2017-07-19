# defile

**defile** converts files (images, audio, video, etc.) into React/Preact components.

![](https://d3vv6lp55qjaqc.cloudfront.net/items/110R3p0j3n470W1k3F14/defile.png)

## Installation

If you want to use defile with **webpack**, install [defile-loader]:

```bash
npm install defile-loader --save-dev
# or
yarn add --dev defile-loader
```

To use the low-level API, or to manage the core library version, install `defile`:

```bash
npm install defile --save
# or
yarn add defile
```

## Configuration

```js
// ...
{
  test: /\.(jpg|png|gif|svg)?$/,
  use: [
    {
      loader: 'defile/react', // 👈 Add loader (use 'defile/preact' for Preact)
      query: {
        tag: 'img', // 👈 The tag name ('audio', 'video', 'track', etc.)
        prop: 'src', // 👈 The prop name used for the file path
        defaultProps: { alt: 'TODO' } // 👈 Default props passed to the element
      }
    }
    'file' // 👈 file-loader must precede defile-loader
  ],

  // or if you prefer classic:

  loader: 'defile/react?{defile/preact?{tag: "img", prop: "src", defaultProps: {alt: "TODO"}}!file'
},
// ...
```

## Usage

See [low-level API docs](https://github.com/kossnocorp/defile/blob/master/index.js) for more implementation details.

### React

```javascript
import React from 'react'
import Cats from './cats.jpg'

export default function () {
  return (
    <div>
      Take a look at my cats:
      <Cats width='300' />
    </div>
  )
}
```

### Preact

```javascript
import { h } from 'preact'
import Cats from './cats.jpg'

export default function () {
  return (
    <div>
      Take a look at my cats:
      <Cats width='300' />
    </div>
  )
}
```

## Related

- [decss]: the source of inspiration.
- [defile-loader]: defile webpack loader source code.

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)

[decss]: https://github.com/kossnocorp/decss
[defile-loader]: https://github.com/kossnocorp/defile-loader
