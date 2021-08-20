require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns')
const mongoose = require('mongoose')
const urlParser = require('url')
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://mariojunior:1234@cluster0.4oovf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })

const schema = new mongoose.Schema({ url: String })
const Url = mongoose.model('Url', schema)

app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl', (req, res) => {
  const { url } = req.body

  dns.lookup(urlParser.parse(url).hostname, (err, address) => {
    if (!address) {
      res.json({ error: 'invalid url' })
    } else {
      const validUrl = new Url({ url })
      validUrl.save((err, data) => {
        res.json({
          'original_url': data.url , 'short_url': data.id
        })
      })
    }
  })
});

app.get('/api/shorturl/:id', (req, res) => {
  const { id } = req.params
  Url.findById(id, (err, data) => {
    if (!data) {
      res.json({ error: 'invalid url' })
    } else {
      res.redirect(data.url) 
    }
  })
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
})
