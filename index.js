const express = require('express')
const app = express()
const path = require('path')
const port = 3300

app.use(express.static('public'))

app.get('*', (req, res) => {
    const indexPath = path.resolve(__dirname,'index.html');
    res.sendFile(indexPath);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})