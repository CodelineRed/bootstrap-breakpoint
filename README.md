# Bootstrap Breakpoint

This is a JavaScript variant of the [SCSS mixins](https://github.com/twbs/bootstrap/blob/v4-dev/scss/mixins/_breakpoints.scss) `media-breakpoint-up`, `media-breakpoint-down`, `media-breakpoint-between` and `media-breakpoint-only` from Bootstrap 4.

See also [Responsive Breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints).

Works only with Bootstrap 4.

## Available at [NPM](https://www.npmjs.com/package/bootstrap-breakpoint)

```bash
$ npm i bootstrap-breakpoint
```

## Example

JavaScript ([bootstrap-breakpoint.js](https://github.com/InsanityMeetsHH/bootstrap-breakpoint/blob/master/src/js/bootstrap-breakpoint.js))
```js
// bootstrapBreakpoint(mode, breakpoint);
// mode = up, down, between or only
// breakpoint = xs, sm, md, lg or xl

if (bootstrapBreakpoint('up', 'md')) {
    // code if window width is greater equal than md
}

if (bootstrapBreakpoint('down', 'lg')) {
    // code if window width is lower than lg
}

if (bootstrapBreakpoint('between', ['sm','lg'])) {
    // code if window width is greater equal sm and lower than lg
}

if (bootstrapBreakpoint('only', 'xs')) {
    // code if window width is in range of xs
}
```

## Examples
* [HTML](https://github.com/InsanityMeetsHH/bootstrap-breakpoint/blob/master/example/index.html)
* [JavaScript](https://github.com/InsanityMeetsHH/bootstrap-breakpoint/blob/master/example/js/scripts.js)

**This software is in development. Could have bugs.**
