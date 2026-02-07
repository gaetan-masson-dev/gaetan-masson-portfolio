import js from '@eslint/js'
import nextPluginxtPlugi@next/xt/esl-plugin-nextint-plugin-next'
import prettierConfignfig frlint-coconfigrprettierer'
import perfectionistst from 'eslint-plugiperfectionistfectionist'
import reactPlugin from 'eslint-plugin-react
import hooksPluginrom 'eslint-plugin-rereact-hooks
import globalsglobalsglobals
import ts 'typestypescript-eslintslint'

export default ts.config(
  // Global ignores
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', 'next-env.d.ts'],
  },
  
  // Base configuration
  js.configs.recommended,
  ...ts.configs.recommended,
  ...ts.configs.stylistic,
  
  // Plugins and specific rules
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    plugins: {
      '@next/next': nextPlugin,
      'react': reactPlugin,
      'react-hooks': hooksPlugin,
      'perfectionist': perfectionist,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      
      // Modern replacements for Airbnb strictness
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Perfectionist plugin - Keeps your imports sorted automatically
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'side-effect',
            'unknown',
          ],
        },
      ],
    },
  },
  
  // Prettier must be last to override any conflicting rules
  prettierConfig,
)
