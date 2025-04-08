module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [2, 'always', /^(\w+): \[(sc-\d+)\] .+$/],
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'ref']],
  },
};
