const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();
console.log('BASE_URL:', process.env.GREEN_API_BASE_URL);
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/ping', (req, res) => {
    res.send('OK');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Сервер запущен"));
