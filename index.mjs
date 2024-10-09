export default function fence_line_numbers_plugin (md) {
  const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options)
  const defaultFence = md.renderer.rules.fence || proxy

  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    const info = token.info
    const attribute = 'line-numbers'

    if (!info) {
      return defaultFence(tokens, idx, options, env, self)
    }

    // line-numbers must come after the first word in the info string to be rendered.
    // Example: ```ruby line-numbers
    // If line-numbers is specified as the first word, fallback to the default behavior
    // (i.e., treat line-numbers as the language).
    const langAttrs = info.split(/(\s+)/g).slice(2).join('')
    const attributeRegex = new RegExp(`\\b${attribute}\\b`)
    if (!langAttrs || !attributeRegex.test(langAttrs)) {
      return defaultFence(tokens, idx, options, env, self)
    }

    token.attrJoin('class', attribute)
    return defaultFence(tokens, idx, options, env, self)
  }
};
