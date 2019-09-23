# PostCSS No Query

[PostCSS] plugin for no-query fallbacks.

```css
.foo {
    /* Input example */
}
```

```css
.nobp .foo {
  /* Output example */
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
