export function slugGenerator(title) {
  return title.toLowerCase().replace(/ /g, '-')
}

export function expressErrorHandler() {
  return function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  }
}

export function requestLogger(req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}
