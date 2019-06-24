const basicauth = require('../lib/basic-auth-module')

module.exports = (req, res) => {
  res.end(
    'hello application\n'
    + `module: ${basicauth ? 'found' : 'NOT FOUND'}`
  )
}
