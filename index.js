const five = require("johnny-five"),
      board = new five.Board(),
      express = require('express'),
      app = express(),
      profiles = require('./settings/profile'),
      bodyParser = require('body-parser');

const jsonParser = bodyParser.json()

board.on("ready", () => {
  let siren = new five.Led(13);

  app.listen(3000, () => {
      console.log('Running Server at port 3000');
  });

  app.get('/', (req, res) => {
      res.sendFile(`${__dirname}/pages/main.html`);
  });

  app.get('/profiles', (req, res) => {
      res.send(profiles.get());
  });

  app.post('/profiles', jsonParser, (req, res) => {
      let body = req.body;

      if (body) {
          profiles.update(body.index, body.data);
      }

      res.send(profiles.get());
  });

  app.get('/on', (req, res) => {
      siren.on();
      res.send('Ligado!');
  });

  app.get('/off', (req, res) => {
      siren.off();
      res.send('Desligado!');
  });
});