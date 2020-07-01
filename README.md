> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-article-interests.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-article-interests)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-article-interests/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-article-interests?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-article-interests.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-article-interests)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fd-ts-react-article-interests.svg)](https://greenkeeper.io/)

# fd-article-interests

FD-themed article interests.

# Installation

-   Run `npm i -D @fdmg/fd-article-interests`

# Demo

To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.

-   [Demo](http://static.fd.nl/react/article-interests/demo.html)

# Usage

```
import ArticleInterests from '@fdmg/fd-article-interests';
...
<ArticleInterests
    onDisableAlertClick={this.onDisableAlertClick}
    onEnableAlertClick={this.onEnableAlertClick}
    onFollowClick={this.onFollowClick}
    onUnfollowClick={this.onUnfollowClick}
    title="Volgen via mijn nieuws"
    titleLink="https://fd.nl/mijn-nieuws"
    interests={this.state.interests}
/>
```
