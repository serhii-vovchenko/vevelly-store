import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';

export default [
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			react: eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
			'@typescript-eslint': eslintPluginTypeScript,
		},
		rules: {
			'react/react-in-jsx-scope': 'off', // для React 17+
			'react/prop-types': 'off', // бо використовуємо TypeScript
			'@typescript-eslint/no-unused-vars': 'warn',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
