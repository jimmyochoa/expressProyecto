var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/photos', async function (req, res, next) {
  const URL = 'https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json';
  
  try {
    const response = await axios.get(URL);
    res.render('fotos', { title: 'Fotos', fotos: response.data });
  } catch (error) {
    console.error('Error fetching photos:', error.message);
    res.status(500).send('Error fetching photos');
  }
});


module.exports = router;
