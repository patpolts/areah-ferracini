const express = require('express')
const app = express()
const path = require('path')
const port = 3300

app.use(express.static('public'))

app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexPath);
    console.log(`Enviando arquivo ${indexPath}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})