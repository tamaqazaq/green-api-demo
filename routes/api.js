const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

const BASE_URL = process.env.GREEN_API_BASE_URL;

router.post('/getSettings', async (req, res) => {
    console.log('body:', req.body);
    const { idInstance, apiTokenInstance } = req.body;

    const url = `${BASE_URL}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
    console.log('URL:', url);

    try {
        const { data } = await axios.get(url);
        res.json(data);
    } catch (err) {
        console.error('axios error:', err.message);
        res.status(500).json({ error: 'Ошибка getSettings', details: err.message });
    }
});


router.post('/getStateInstance', async (req, res) => {
    console.log('body:', req.body);
    const { idInstance, apiTokenInstance } = req.body;
    try {
        const { data } = await axios.get(`${BASE_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Ошибка getStateInstance', details: err.message });
    }
});

router.post('/sendMessage', async (req, res) => {
    console.log('body:', req.body);
    const { idInstance, apiTokenInstance, chatId, message } = req.body;
    try {
        const { data } = await axios.post(`${BASE_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            chatId,
            message,
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Ошибка sendMessage', details: err.message });
    }
});

router.post('/sendFileByUrl', async (req, res) => {
    console.log('body:', req.body);
    const { idInstance, apiTokenInstance, chatId, urlFile, fileName } = req.body;
    try {
        const { data } = await axios.post(`${BASE_URL}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
            chatId,
            urlFile,
            fileName,
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Ошибка sendFileByUrl', details: err.message });
    }
});

module.exports = router;
