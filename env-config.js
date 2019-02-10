const prod = process.env.NODE_ENV === 'production'
console.log(process.env , 'sdf')
module.exports = {
  'process.env.BACKEND_URL': prod ? '/alfredas-biuro' : ''
}
