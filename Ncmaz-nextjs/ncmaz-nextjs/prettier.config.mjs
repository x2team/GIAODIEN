// /** @type {import("prettier").Config} */
// const config = {
//   tabWidth: 4,
//   semi: true,
//   singleQuote: true,
//   printWidth: 120,
//   trailingComma: 'es5',
//   tailwindFunctions: ['clsx', 'tw'],
//   plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
//   tailwindStylesheet: './src/styles/tailwind.css',
// }

// export default config

export default {
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    plugins: ['prettier-plugin-tailwindcss'],
};
