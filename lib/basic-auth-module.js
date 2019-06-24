const basicauth = require('basic-auth')

module.exports = (validate, next) => async (req, res) => {
  return basicauth(req).name
}
