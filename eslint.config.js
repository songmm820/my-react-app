import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite
        ],
        rules: {
            // 使用单引号
            quotes: ['error', 'single'],
            // console 警告
            'no-console': 'warn',
            // 关闭单个文件仅只能导出一个组件的规则
            'react-refresh/only-export-components': 'off',
            // 注释前后需要空格
            'spaced-comment': ['error'],
            // 禁止尾随逗号
            'comma-dangle': ['error', 'never'],
            // 禁止使用 var
            'no-var': 'error',
            // 警告未使用的变量
            '@typescript-eslint/no-unused-vars': 'warn',
            // tab 键使用 4 个空格
            indent: ['error', 4, { SwitchCase: 1 }]
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        }
    }
])
