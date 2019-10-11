
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
var mongoose = require('mongoose')
var Task = require("./models/tasks");

// MongoDB 
mongoose.connect('mongodb://localhost:27017/tasks');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

// ExpressJS
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.post('/tasks', (req, res) => {
    var db = req.db;
    var id = req.body.id;
    var title = req.body.title;
    var completed = req.body.completed;
    var new_post = new Task({
        id: id,
        title: title,
        completed: completed
    })
  
    new_post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
})

app.get('/tasks', (req, res) => {
    res.send([
        {
            id: 1,
            title: "hello",
            description: "hellow how are you"
        }
    ])
    // Task.find({}, 'title description', function (error, tasks) {
    //   if (error) { console.error(error); }
    //   res.send({
    //     tasks: tasks
    //   })
    // }).sort({_id:-1})
})



app.listen(process.env.PORT || 8083)