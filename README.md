#  **DEPRECATION NOTICE: This package has been deprecated. Use [react-social-media-embed](https://www.npmjs.com/package/react-social-media-embed) instead.**

<h2 align="center">
  <a href="https://github.com/justinmahar/react-ig-embed">React IG Embed</a>
</h2>
<h3 align="center">
  Easily embed public Instagram posts in React. No access token required.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-ig-embed">
    <img src="https://badge.fury.io/js/react-ig-embed.svg" alt="npm Version"/>
  </a>
</p>

👁️ **[Live Demo](https://justinmahar.github.io/react-ig-embed-demo/)**

## Overview

Easily embed public Instagram posts with the `IGEmbed` component. No access token is required.

### The Problem 

You just want to embed a public post in React. 

You may have tried creating a Facebook/Meta App, then requested `Oembed Read` permissions in order to programmatically retrieve the embed HTML for public posts. This HTML contains the `blockquote` and `script` tag you need to embed the post.

You then likely realized that this is a huge hassle, and requires you to jump through several hoops setting up an app and getting verified. And even then (like me) you may still receive errors when trying to use the API to get the embed HTML.

### The Solution

This component skips the API call for HTML by rendering our own embed-compatible HTML as a React component, and calling the Instagram embed script's embed processor directly in an effect after the render completes.

The result: Fast and easy embedding of public posts! 🎉

### Features include:

- **📷 Simple and easy Instagram post embedding.**
  - Just provide a URL, that's it!
- **🔓 No access token needed!**
  - Uses Instagram's [Embed JS script](https://developers.facebook.com/docs/instagram/oembed/) directly. No API call or access token needed.
- **⚡️ Fast**
  - Embeds content in less than 1 second (often far less).
- **💪 Resilient**
  - If embedding fails, it automatically retries using exponential backoff.
- **⚙️ Customizable**
  - Supports all `div` props and provides additional options, such as a background image and spinner.

## Installation

```
npm i react-ig-embed
```

## Quick Start

Simply import and provide the URL to the public post you'd like to embed.

```jsx
import { IGEmbed } from 'react-ig-embed';
```

```jsx
<IGEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" />
```

### Results

#### Embed Loading

![Example Embed Loading](./screenshots/example-loading.png)

#### Embed Complete

![Example Embed Complete](./screenshots/example-embed.png)

## Props

All props for the React `div` element are supported.

In addition, the following props are supported:

| Prop Name                         | Type                     | Description                                                                                                                                                 |
| --------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                             | `string`                 | **Required.** The Instagram URL for the post to embed.                                                                                                      |
| ``linkText``                      | `string` or `undefined`  | *Optional.* The link text to show while the post loads. Defaults to `"View this post on Instagram"`                                                         |
| `linkTextDisabled`                | `boolean` or `undefined` | *Optional.* Set to `true` to disable rendering the link text and logo shown while the post loads. Default `false`.                                          |
| `backgroundUrl`                   | `string` or `undefined`  | *Optional.* A URL to an image to show (blurred) while the post loads.                                                                                       |
| `backgroundBlurDisabled`          | `boolean` or `undefined` | *Optional.* Set to `true` to disable blurring the background image (if provided) shown while the post loads. Default `false`.                               |
| `backgroundBlurAnimationDisabled` | `boolean` or `undefined` | *Optional.* Set to `true` to disable the background blur animation. Default `false`.                                                                        |
| `backgroundBlurAnimationDuration` | `boolean` or `undefined` | *Optional.* Duration for background blur animation in milliseconds. Default `700`.                                                                          |
| `softFilterDisabled`              | `boolean` or `undefined` | *Optional.* Set to `true` to disable the soft white filter over the background image (if provided) shown while the post loads. Default `false`.             |
| `spinnerDisabled`                 | `boolean` or `undefined` | *Optional.* Set to `true` to disable showing a spinner. Default `false`.                                                                                    |
| `processDelay`                    | `number` or `undefined`  | *Optional.* Delay between rendering the component and processing the embed, in milliseconds. Default `100`.                                                 |
| `scriptLoadDisabled`              | `boolean` or `undefined` | *Optional.* Set to `true` to disable loading the embed script, in which case you'll need to load it yourself elsewhere. Default `false` (script is loaded). |
| `retryDisabled`                   | `boolean` or `undefined` | *Optional.* Set to `true` to disable exponential backoff retry timer. Default `false`.                                                                      |
| `retryInitialDelay`               | `number` or `undefined`  | *Optional.* Initial delay for retry timer in milliseconds. Will double after every failure. Default `1000`.                                                 |
| `retryBackoffMaxDelay`            | `number` or `undefined`  | *Optional.* Max delay for retry timer in milliseconds. Default `30000`.                                                                                     |
| `igVersion`                       | `string` or `undefined`  | *Optional.* The API version to use. Defaults to `"14"`.                                                                                                     |

## Styling

Feel free to use props such as `className` and `style` to customize the component's appearance.

You can also target this component with CSS using the `instagram-media-container` class name, and the inner component with `instagram-media`.

The contents of this component are modified from a `blockquote` to an `iframe` once the embed completes (both have the `instagram-media` class name).

Note that Instagram restricts the dimensions of the embedded `iframe` to a min width of `326px` and a max width of `540px`.

By default, the styles `{ overflow: 'hidden', width: '100%', maxWidth: '540px' }` are applied to the container div. It will take up 100% of its parent's width up to 540px, and clipping is applied to prevent the `iframe` from spilling out during the embed process. You can provide your own desired `width` between `326px` and `540px` if you'd like.

This component uses a `blockquote`, which may have default margins applied by the browser. Be sure to reset the CSS for `blockquote`. You can use [Normalize.css](https://necolas.github.io/normalize.css/) for this, and popular libraries like [Bootstrap](https://getbootstrap.com/) will do this for you automatically.

### Link Text

You can customize the link text shown if you'd like. The default is `"View this post on Instagram"`.

Customize this with the `linkText` prop, and disable the link text (and logo) altogether with `linkTextDisabled`.

### Spinner

A spinner is shown in the upper-right of the post.

You can disable this with `spinnerDisabled`.

### Background Image

You can provide a background image to show while the post loads using the `backgroundUrl` prop. In my opinion, this bit of context brings the embed loader to life a little.

The image will be rendered blurred with a soft white filter over it, making the link text more readable. You can disable these styles with `backgroundBlurDisabled` and `softFilterDisabled`. 

The blur style features an animation of the image becoming less blurry. This subtle effect makes it less jarring when the embed succeeds. Disable the animation with `backgroundBlurAnimationDisabled`, and configure the duration with `backgroundBlurAnimationDuration`.

```jsx
<IGEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" backgroundUrl="/media/engines.jpeg" />
```

![Example Embed With Background URL](./screenshots/example-blur-anim.gif)

## Script Load

The [Instragram Embed JS script](https://www.instagram.com/embed.js) is loaded once to `window` when this component renders using [React Helmet](https://github.com/nfl/react-helmet).

You may want to load the script yourself elsewhere. If this is the case, use the `scriptLoadDisabled` prop to disable loading the script in `IGEmbed`.

## Process Delay

This component uses a slight delay between rendering and processing the embed.

If you'd like to customize this, specify the delay in milliseconds using `processDelay`. A value of `0` will cause no delay.

## Retry Timer

This component includes a timer function that will check if the embed has succeeded. If not, it will reattempt the embed.

The timer uses [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff), doubling the delay each time. The default initial delay is 1 second and max delay is 30 seconds. These are configurable via the `retryInitialDelay` and `retryBackoffMaxDelay` props. For example, if you would like a more aggressive approach, try setting `retryBackoffMaxDelay` to `3000` milliseconds. This will cause the post to retry after 1 second, and then again at 2 seconds, and then every 3 seconds thereafter.

To determine if the embed has succeeded, the timer function checks to see if a div no longer exists in the DOM. This div has the class name `instagram-media-pre-embed` and a randomly generated `id` attribute (uuid string), which it uses to check for existence using `document.getElementById()`. This div will be replaced when the embed succeeds, so if the div still exists in the DOM, the embed likely failed and it will reattempt the embed.

You can disable this feature with the `retryDisabled` prop.

## How It Works

This component relies on the [Instagram embed script](https://www.instagram.com/embed.js), which is loaded once to `window` by the `IGEmbed` component using [React Helmet](https://github.com/nfl/react-helmet).

The `IGEmbed` component adapts the HTML provided by Instagram when selecting the "Embed" option on any public post. This HTML contains a `blockquote` element with the class name `instagram-media`, placeholders for the content, and a link to view the post on Instagram.

Once the component renders, an effect is called to process the embed.

The function `window.instgrm.Embeds.process()` is called (only if it exists), which is Instagram's embed processor. This will scan the DOM for elements with the `instagram-media` class name and perform the embed for you.

Be mindful that the embed happens in the DOM outside of the React ecosystem, so React has no idea the contents have changed.

Official documentation for the embed script [can be found here](https://developers.facebook.com/docs/instagram/oembed/), in the section titled "Embed JS".

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

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
