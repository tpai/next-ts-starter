const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'];

module.exports = {
  parser: 'babel-eslint',
  extends: ['./packages/eslint-config/browser', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'react',
        importNames: ['default'],
        message: "use import { xxx } from 'react'; instead",
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      'babel-module': {
        alias: {
          '@': './',
        },
        extensions: allExtensions,
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'enum',
            format: null,
            custom: {
              // enum should be uppercase and snakecase and allow double underscore
              regex: '^[A-Z][A-Z0-9]*(__?[A-Z0-9]+)*$',
              match: true,
            },
          },
        ],
        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: ['state'],
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            name: 'react',
            importNames: ['default'],
            message: "use import { xxx } from 'react'; instead",
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/button-has-type': 'off',
        'consistent-return': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.ts', '**/*.stories.tsx'] },
        ],
        'import/prefer-default-export': 'off',
        'jsx-a11y/html-has-lang': 0,
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
      },
    },
  ],
};
