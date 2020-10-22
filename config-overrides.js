const { override, addBabelPlugin } = require('customize-cra')

module.exports = override(addBabelPlugin('react-activation/babel'))