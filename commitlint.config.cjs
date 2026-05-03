module.exports = {
    extends: ['@commitlint/config-conventional'],
    formatter: '@commitlint/format',
    rules: {
      'type-enum': [
        2,
        'always',
        ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
      ],
      'subject-empty': [2, 'never'],
      'type-empty': [2, 'never'],
    },
  };