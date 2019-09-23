# PostCSS No Query

[PostCSS] plugin for no-query fallbacks.

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
.nobp .foo {
  border: 1px solid #d00;
}
```

## Usage

```js
postcss([ require('postcss-no-query') ])
```

### Defaults (can be overwritten)

* fallback: true (deactivates no query fallback)
* prefix: ".nobp" (default parent selector)
* query: "(min-width: 1024px)" (limit query fallback to specific expression)

See [PostCSS] docs for examples for your environment.
