const express= require('express');
const path = require('path');
const app= express();

const http = require('http');


const port = 3000;

appRouter=require('./Routes/appRoutes')();

app.use('/api', appRouter);

// app.use(express.static(path.join(__dirname, '../dist')));



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
//   });
  
 
  const server = http.createServer(app);

  
  server.listen(port, () => console.log(`API running on localhost:${port}`));

