const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var LoremIpsum = require('lorem-ipsum').LoremIpsum;

var lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

app.get('/', (req, res) => res.send(lorem.generateParagraphs(7)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("longitude:", position.coords.longitude);
    console.log("latitude:", position.coords.latitude);
  });
} else {
  console.log("Geolocation is not supported by this device/browser.");
}

console.log(document.referrer);
console.log(location.href);
console.log(navigator.userAgent);
fetch("https://ipapi.co/json/")
.then(response => response.json())
.then((responseJson) => {
  console.log(responseJson);
});

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File(new winston.transports.Console())
  ]
});

logger.info('This is a log message')
  




