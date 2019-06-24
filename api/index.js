const basicauth = require('../lib/basic-auth-module')

module.exports = (req, res) => {
  res.end(
    'hello from the api endpoint\n'
    + `module: ${basicauth ? 'found' : 'NOT FOUND'}`
  )
}
