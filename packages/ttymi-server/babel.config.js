const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: '10',
      },
      useBuiltIns: 'usage',
    },
  ],
  '@babel/flow',
];

module.exports = { presets };
