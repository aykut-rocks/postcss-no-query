# PostCSS No Query

[PostCSS](https://postcss.org) plugin for no-query fallbacks, similar to the [no-query fallback](https://github.com/at-import/breakpoint/wiki/no-query-fallbacks) feature in the sass breakpoint mixin.

## Usage

```js
postcss([ require('postcss-no-query') ])
```

### Defaults

* `fallback: true (boolean)` (renders no-query fallbacks by default if no-query fallbacks are defined)
* `prefix: ".no-query" (string)` (default prefix which is rendered as a parent selector)
* `query: [] (array)` (empty by default, no-query fallbacks are not defined)

### Overwrite Defaults

* `fallback: false` (deactivates no-query fallbacks, even if no-query fallbacks are defined)
* `prefix: ".nobp"` (customizes the default prefix)
* `query: ['(min-width: 600px)', '(min-width: 1024px)']` (defines no-query fallbacks for specific media query expressions)

## Example

### configuration

```js
prefix: ".nobp"
query: ['(min-width: 1024px)']
```

### input

```css
.foo {
  border: 1px solid black;
}

@media (min-width: 600px) {
  .foo {
    border: 1px solid red;
  }
}

@media (min-width: 1024px) {
  .foo {
    border: 1px solid yellow;
  }
}
```

### output

```css
.foo {
  border: 1px solid black;
}

@media (min-width: 600px) {
  .foo {
    border: 1px solid red;
  }
}

@media (min-width: 1024px) {
  .foo {
    border: 1px solid yellow;
  }
}

.nobp .foo {
  border: 1px solid yellow;
}
```

## Notice

This plugin doesn't work with nested media queries, because they are not part of the official nesting proposal. See also the notice on [postcss-nesting](https://github.com/jonathantneal/postcss-nesting).

See [PostCSS](https://github.com/postcss/postcss/tree/master/docs) docs for examples for your environment.