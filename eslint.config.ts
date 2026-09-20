import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['src/prisma/**'],
  },
  {
    files: ['src/**/*.ts'],
    extends: [
      ...tseslint.configs.recommended,
    ],
  }
);