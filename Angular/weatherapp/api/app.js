var express= require('express');

var app= express();

var port = 3000;

appRouter=require('./Routes/appRoutes')();

app.use('/api', appRouter);

app.get('/', function(req,res){
     res.send('Welcome');
});

app.listen(port, function(){
    console.log("App Works");
});

