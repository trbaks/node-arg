const express = require('express');
const app = express(),
      port = process.env.PORT || 3080;
var app_id = process.env.APP_ID || 'Amit' ;

app.get('/', (req,res) => {
    res.send(`Application ID::${app_id}:: is listening on port::${port}`);
});

app.get('/time', (req,res) => {
    res.send(new Date());
});

app.get('/healthcheck', (req,res) => {
    res.send(`Application is running fine! Healthceheck successful`);
});

app.listen(port, () => {
    console.log(`Server is listening on the port::${port}`);
    console.log(`Application ID::${app_id}`);
});