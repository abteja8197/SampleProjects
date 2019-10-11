const express = require('express');
const app = express();

//import Routes
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('running in port localhost:3000'));