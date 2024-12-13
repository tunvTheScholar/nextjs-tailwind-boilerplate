const path = require("path")

const buildEslintCommand = (filenames) =>
  `pnpm run lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`

const prettierCommand = 'prettier --write "src/*/**.{ts,tsx}"'

module.exports = {
  "*.{js,jsx,ts,tsx}": [prettierCommand],
  "*.{json,css,md}": [prettierCommand],
}
