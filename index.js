const express = require('express')
const app = express()
const path = require('path')
const port = 3300

app.use(express.static('public'))

app.get('*', (req, res) => {
    const indexPath = path.resolve(__dirname, 'public', 'index.html');
    res.sendFile(indexPath);
    console.log(`Enviando arquivo ${indexPath}`);
    console.log(`teste 1 ${__dirname}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})