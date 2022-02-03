<h2 align="center">
  <a href="https://github.com/justinmahar/react-ig-embed">React IG Embed</a>
</h2>
<h3 align="center">
  Easily embed public Instagram posts in React.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-ig-embed">
    <img src="https://badge.fury.io/js/react-ig-embed.svg" alt="npm Version"/>
  </a>
</p>

## Overview

Easily embed public Instagram posts with the `IGEmbed` component. No access token is required.

### Features include:

- **📷 Simple and easy Instagram post embedding.**
  - No access token needed. Just provide a URL, that's it!
- **🖼️ Fallback background image**
  - Provide a background image URL to show while content loads.
- **#️⃣ Selectable API version**
  - Defaults to API version 14.

## Installation

```
npm i react-ig-embed
```

## Quick Start

Simply import and provide the URL to the public post you'd like to embed.

```jsx
import { IGEmbed } from "react-ig-embed";
```

```jsx
<IGEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" />
```

### Example Results

![Example Embed](./screenshots/example-embed.png)

## Props

The following props are supported:

| Prop Name       | Type                 | Description                                                                                  |
| --------------- | -------------------- | -------------------------------------------------------------------------------------------- |
| `url`           | `string`             | Required. The Instagram URL for the post to embed.                                           |
| `backgroundUrl` | `string | undefined` | Optional. A URL to an image to show (blurred) while the post loads.                          |
| `igVersion`     | `string | undefined` | Optional. The API version to use. Defaults to `"14"`.                                        |
| `viewPostText`  | `string | undefined` | Optional. The text to show while the post loads. Defaults to `"View this post on Instagram"` |

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Logo Attribution

Logo graphics by [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Favicon by [favicon.io](https://favicon.io/emoji-favicons/).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-ig-embed/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-ig-embed/stargazers): [👉⭐](https://github.com/justinmahar/react-ig-embed/stargazers)

## MIT License

```
Copyright © 2022 Justin Mahar https://github.com/justinmahar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
