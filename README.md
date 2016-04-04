# active-share-styles

## Status

[![Travis Build Status](https://img.shields.io/travis/starandtina/active-share-styles.svg?style=flat-square)](https://travis-ci.org/starandtina/active-share-styles)
[![npm version](https://img.shields.io/npm/v/active-share-styles.svg?style=flat-square)](https://www.npmjs.com/package/active-share-styles)
[![MIT License](https://img.shields.io/npm/l/active-share-styles.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
  - [Dependencies](#dependencies)
  - [Running locally](#running-locally)
  - [Publishing](#publishing)
  - [CSS stats](#css-stats)
- [Versioning](#versioning)
- [License](#license)
- [Example](#example)

## Build

```bash
npm run compile
```

## Install

```bash
npm i -S active-share-styles
```

### Manually

Download the [latest release](https://github.com/starandtina/active-share-styles/releases/latest) and copy the LESS files over to your own project. Once your files are in place, jump to the [usage guidelines](#usage) for including styles into your own CSS.

## Usage

Once included, simply `@import` either the master LESS file, or the individual files as you need them.

```less
// Example: All of Styles
@import "active-share-styles/less/active";

// Example: Individual files
@import "active-share-styles/less/base/variables";
@import "active-share-styles/less/base/font";
@import "active-share-styles/less/base/utility";
```

## Documentations

The documentation is built with Jekyll and published to `http://starandtina.github.io/active-share-styles` via the `gh-pages` branch.


### Dependencies

You'll need the following installed:

- Latest Jekyll: `gem install jekyll`
- Latest Rouge: `gem install rouge`
- Latest LESS: `gem install less`
- Latest Grunt CLI: `npm install -g grunt-cli`
- [Node.js and npm](http://nodejs.org/download/)

Chances are you have all this already if you work on `github/github` or similar projects. If you have all those set up, now you can install the dependencies:

```bash
npm i
```

### Running locally

From the Terminal, start a local Jekyll server:

```bash
jekyll s
```

Open a second Terminal tab to automatically recompile the LESS files, run autoprefixer, and update our [CSS stats file](#css-stats):

```bash
grunt watch
```

Alternatively, you can manually run `grunt` and `jekyll serve` when needed.

### Publishing

Use the included Grunt task to generate and publish docs to the `gh-pages` branch.

```bash
grunt publish
```

This takes the `_site` directory, generates it's own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.

### CSS stats

When compiling or watching the LESS files, Grunt will automatically generate a `.css-stats.md` file. This is tracked in the Git repository to provide us historical and contextual information on the changes we introduce. For example, we'll know when the number of selectors or declarations rises sharply within a single change.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, it is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

## License

[MIT license](LICENSE).

## Example

See [starandtina/active-share-styles-example](https://github.com/starandtina/active-share-styles-example)
