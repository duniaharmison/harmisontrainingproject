const express = require('express')
const app = express()
const port = 3500

app.get('/', (req, res) => res.send('The Band Rocks!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
