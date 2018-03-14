var express = require('express');

var routes= function(){
    var appRouter= express.Router();
    var appController = require('../Controllers/appController')();
    appRouter.route('/locations')
    .get(appController.get);
    return appRouter;
};
module.exports= routes;
