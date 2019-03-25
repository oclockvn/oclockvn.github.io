---
title: "First time with slim"
tags: ["ror", "slim"]
---

More details at [slim lang](http://slim-lang.com/)

### What i've known so far

- [Emmet](https://en.wikipedia.org/wiki/Emmet_(software)), its syntax quite similar to slim so the first time not suprise met a lots.
- [Razor](https://en.wikipedia.org/wiki/ASP.NET_Razor), helps me a lots when combine dynamic code with static code in view
- Strong knowledge in html/css, yeah, no doubt.

### Syntax

#### 1. Line indicators

`|` copy the line

`'` copy the line too but makes sure that a single trailing white space is appended

`<` inline html

`-` control code, append `\` at the end if multiple lines, if line ends with `,` then no need `\`

`=` output (i.e. call a method) dynamic content. Can be used on the same line or nest it.

`=>` output with trailing white space, `=<` output with leading white space

`==` output without HTML escaping

`/` code comment

`/!` html comment

`/` closed tags (trailing)

`:` inline tags. ex: `div: p a paragraph`

Text content: 3 ways

- Either start on the same line as the tag `p this is the content`
- Or nest it, use the `|` like

```
p
  | A paragraph
```

- Or rely on smart text instead

```
body
  h1
    This is the title
```

### Attributes

Written directly after the tag, can use `{...}`, `(...)` or `[...]` to wrap the attributes

```
a[href='/url/to/link' title='a link'] this is the text
```

The text interpolation can be used too:

```
a [href='http://#{url}' title='#{url}'] go to the #{title}
```

### Attribute merging

```
a class=['menu', 'menu_active']
a class=:menu,:menu_active

### Splat attrinutes

```
.card*{'data-id'=>place.id, 'data-url'=>place.url} Visit
```

turned into

```html
<div class='card' data-id="1" data-url="/u/r/l">Visit</div>
```

can use like so:

```
.card *method_which_returns_hash = place.name
```