# 🔢 markdown-it-fence-line-numbers

[![CI](https://github.com/coreyasmith/markdown-it-fence-line-numbers/actions/workflows/ci.yml/badge.svg)](https://github.com/coreyasmith/markdown-it-fence-line-numbers/actions/workflows/ci.yml)
[![Coverage Status](https://img.shields.io/coveralls/coreyasmith/markdown-it-fence-line-numbers/amin.svg?style=flat)](https://coveralls.io/r/coreyasmith/markdown-it-fence-line-numbers?branch=main)

> Plugin for [markdown-it](https://github.com/markdown-it/markdown-it) to add `line-numbers` class to code fences.

Specify `line-numbers` after the language on a code fence and `line-numbers` will be added to the `<code>` element class. Useful when using syntax highlighting libraries like [Prism](https://github.com/PrismJS/prism) to add line numbers to code blocks.

````markdown
```ruby line-numbers
foo = "bar"
```
````

Will render as:

```html
<pre>
  <code class="line-numbers language-ruby">
  foo = "bar"
  </code>
</pre>
```

## 🏗️ Install

```bash
yarn add markdown-it-fence-line-numbers
```

## ⚙️ Usage

````javascript
const md = require('markdown-it')();
const fence_line_numbers = require('markdown-it-fence-line-numbers');

md.use(fence_line_numbers);

md.render(`
\`\`\`ruby line-numbers
foo = "bar"
\`\`\`
`);

// returns:
//
//<pre>
//  <code class="line-numbers language-ruby">
//  foo = "bar"
//  </code>
//</pre>
````

## 📜 License

[MIT](https://github.com/coreyasmith/markdown-it-fence-line-numbers/blob/main/LICENSE)
