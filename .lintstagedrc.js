module.exports = {
  '*.{ts,tsx}': ['prettier --write', () => 'tsc -p tsconfig.json', 'eslint --ext .ts,.tsx'],
};
