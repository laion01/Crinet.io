const isDev = process.env.NODE_ENV === 'development'

let url = ''

if (isDev) {
  url = 'http://localhost:8081'
}

export default url