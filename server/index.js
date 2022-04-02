const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');
const app = express();
const port = 4004;

app.use(express.json());
app.use(cors());

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.createHouse)
app.put('/api/houses/:id', controller.updateHouse)
app.delete('/api/houses/:id', controller.deleteHouse) 

app.listen(port, () => {
    console.log(`Lab server listening at http://localhost:${port}`)
})
