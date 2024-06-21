const express = require('express')
const app = express()
const path = require('path')
const port = 3300

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    console.log(__dirname)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})