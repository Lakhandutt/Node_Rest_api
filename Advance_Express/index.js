//using debug 3rd party module for debugging
//we have to set DEBUG=app:startup,app:db or *-for all or nothing to stop debugging
const debug=require('debug');
const startupDebugger=debug('app:startup');
const dbDebugger=debug('app:db');

//impoting apis
const apis=require('./routes/apistype');
const home=require('./routes/home');


const express = require('express');
const logger = require('./middleware/logger');
const helmet = require('helmet');
const morgan = require('morgan');
//configuration 3rd party tool->config
const config=require('config');

const app = express();

//checking of environment-development,production,testing
//process-global variable that gives access to current process 
//process.env.NODE_ENV if not set then it is undefined
console.log(`Node Environment: ${process.env.NODE_ENV}`)
//set NODE_ENV=production use this command to set to production in windows
//also use express implemented as above but default value is development
console.log(`app: ${app.get('env')}`)


//middleware function 1 that parse a json object from requestbody if there is 
// a json object it will populate it to the req.body
//every middleware function takes 3 params req,res,next json() too
app.use(express.json());


//another middleware function that parse json from url into req.body 
// extended true means we can pass complex json also
app.use(express.urlencoded({ extended: true }));

//another middleware function to serve static files
app.use(express.static('public'));

//custom middleware function 2 added
app.use(logger);


//3rd party middlewares
//Helmet:secure your app by setting various http headers
app.use(helmet());

//using apis
app.use('/api/hello',apis);
app.use('/',home);


//morgan http request logger : tiny is version it log the request to console but we can also log into text file
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
   // console.log('Morgan Enabled');
   startupDebugger('Morgan enabled');
}

//dbworks
dbDebugger("connected to database");

//acessing configuration
console.log(`application Name: ${config.get('name')}`)
console.log(`mailserver: ${config.get('mail.host')}`)
console.log(`mailpassword: ${config.get('mail.password')}`)


//using pug for returning html elements or templates
app.set('view engine','pug');
app.set('views','./views');//default directory

//middleware function 3 that respond to request
// app.get('/', (req, res) => {
//     res.render('index',{title:'My express app',message:'hello'})//returning pug html template
// });


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
})

