import { fileURLToPath } from 'node:url'
import markdownit from 'markdown-it'
import generate from 'markdown-it-testgen'

import fence_line_numbers_plugin from '../index.mjs'

describe('markdown-it-fence-line-numbers', function () {
  const md = markdownit().use(fence_line_numbers_plugin)

  generate(fileURLToPath(new URL('fixtures/fence_line_numbers.txt', import.meta.url)), { header: true }, md)
})
