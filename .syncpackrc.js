// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ['dev', 'prod'],
  source: ['package.json', 'configs/*/package.json'],
  versionGroups: [
    {
      label: 'Внутренние пакеты конфигурации должны быть привязаны к "*" (это означает, что приемлема любая версия).',
      packages: ['**'],
      dependencies: [
        '@teleskop-labs/eslint-config-js',
        '@teleskop-labs/eslint-config-ts',
        '@teleskop-labs/eslint-config-ts-prettier',
        '@teleskop-labs/eslint-config-vue',
        '@teleskop-labs/prettier-config',
        '@teleskop-labs/stylelint-config-css',
        '@teleskop-labs/tsconfig',
      ],
      dependencyTypes: ['dev'],
      pinVersion: 'workspace:*',
    },
  ],
}

module.exports = config
