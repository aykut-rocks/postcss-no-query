# PostCSS No Query

[PostCSS](https://postcss.org) plugin for no-query fallbacks, similar to the [no-query fallback](https://github.com/at-import/breakpoint/wiki/no-query-fallbacks) feature in the sass breakpoint mixin.

### input

```css
@media (min-width: 1024px) {
  .foo {
    border: 1px solid #d00;
  }
}
```

### output

```css
@media (min-width: 1024px) {
  .foo {
    border: 1px solid #d00;
  }
}

.nobp .foo {
  border: 1px solid #d00;
}
```

## Usage

```js
postcss([ require('postcss-no-query') ])
```

### Defaults

* `fallback: true` (deactivates no query fallback)
* `prefix: ".no-query"` (renders prefix as a parent selector)
* `query: []` (limits query fallback to specific media query expression)

### Overwrite Defaults

* `fallback: false` (boolean)
* `prefix: ".nobp"` (string)
* `query: ['(min-width: 600px)', '(min-width: 1024px)']` (array)

## Notice

This plugin doesn't work with nested media queries, because they are not part of the official nesting proposal. See also the notice on [postcss-nesting](https://github.com/jonathantneal/postcss-nesting).

See [PostCSS](https://github.com/postcss/postcss/tree/master/docs) docs for examples for your environment.