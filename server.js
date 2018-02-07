const express = require('express')
const { join } = require('path')
const { parse } = require('url')
const log = require('loglevel')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()
log.setLevel(dev ? 'info' : 'error')
app.prepare()
  .then(() => {
    const server = express()
    server.get('/service-worker.js', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath)
    })
    server.get('*', (req, res) => handle(req, res))
    server.listen(port, (err) => {
      if (err) {
        log.error(err)
        throw err
      }
      log.info(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    log.error(ex.stack)
    process.exit(1)
  })
