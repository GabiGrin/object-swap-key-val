#object-swap-key-val [![Build Status](https://travis-ci.org/GabiGrin/object-swap-key-val.svg?branch=master)](https://travis-ci.org/GabiGrin/object-swap-key-val)

## Usage
`$ npm install object-swap-key-val`

```
var swapKeyVal = require('object-swap-key-val');

console.log(swapKeyVal({foo: 'bar', bob: 'bobette'})); // {bar: 'foo', bobette: 'bob'}

```

This assumes you have a simple object with strings as values. If you want it to handle more scenarios add an issue or even better, send a PR.
