const BACKEND_URL = '/alfredas-biuro'

const prod = process.env.NODE_ENV === 'production'


module.exports = {
  'process.env.BACKEND_URL': prod ? BACKEND_URL : ''
}
