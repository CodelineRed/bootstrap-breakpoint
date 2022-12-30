# Bootstrap Breakpoint

This is a JavaScript variant of the [BS4 SCSS mixins](https://github.com/twbs/bootstrap/blob/v4-dev/scss/mixins/_breakpoints.scss) and [BS5 SCSS mixins](https://github.com/twbs/bootstrap/blob/v530-dev/scss/mixins/_breakpoints.scss) `media-breakpoint-up`, `media-breakpoint-down`, `media-breakpoint-between` and `media-breakpoint-only`.

See also [BS4 Responsive Breakpoints](https://getbootstrap.com/docs/4.6/layout/overview/#responsive-breakpoints) or [BS5 Responsive Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/#media-queries).

Works with Bootstrap 4 and 5.

## Available at [NPM](https://www.npmjs.com/package/bootstrap-breakpoint)

```bash
$ npm i bootstrap-breakpoint
```

## Example

JavaScript ([bootstrap-breakpoint.js](https://github.com/CodelineRed/bootstrap-breakpoint/blob/master/src/js/bootstrap-breakpoint.js))
```js
// bootstrapBreakpoint(mode, breakpoint);
// mode = up, down, between or only
// breakpoint = xs, sm, md, lg, xl or xxl

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

// adding further breakpoints
BootstrapBreakpoint.breakpoints.push('xxl');
BootstrapBreakpoint.init();
// or 
BootstrapBreakpoint.breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"];
BootstrapBreakpoint.init();
```

## Examples
- [HTML](https://github.com/CodelineRed/bootstrap-breakpoint/blob/master/example/index.html)
- [JavaScript](https://github.com/CodelineRed/bootstrap-breakpoint/blob/master/example/js/scripts.js)
