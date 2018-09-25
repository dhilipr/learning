const express= require('express');
const path = require('path');
const app= express();

const http = require('http');


const port = 4200;

appRouter=require('./api/Routes/appRoutes')();

app.use('/api', appRouter);

app.use(express.static(path.join(__dirname, './dist')));

app.get('/enroll', (req, res) => {
  console.log(req);
  console.log(res);
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
  });
  
 
  const server = http.createServer(app);

  
  server.listen(port, () => console.log(`API running on localhost:${port}`));

