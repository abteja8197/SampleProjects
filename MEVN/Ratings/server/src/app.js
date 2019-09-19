const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Joi = require('joi')

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'}
]

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course=courses.find(x=> x.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID does not exist.')
    res.send(course);
});

app.post('/api/courses', (req, res) => {

    const { error } = validateCourse(req.body);// equivalent to result.error
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length +1,
        name: req.body.name
    }; 
    courses.push(course);
    res.send(course);

    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schema);

    // if(!req.body.name || req.body.name.length < 3) {
    //     res.status(400).send('Name is required and should be minimum of 3 characters');
    //     return;
    // }
    // if(result.error) {
    //     res.status(400).send(result.error.details[0].message);
    //     return ;
    // }
});

//put for updating resources

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(x => x.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given ID doesnt exists.')
        // const schema = {
        //     name: Joi.string().min(3).required()
        // };
        // const result = Joi.validate(req.body, schema);

        // const result = validateCourse(req.body);

        const { error } = validateCourse(req.body);// equivalent to result.error
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }

        course.name = req.body.name;
        res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(x => x.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given ID doesnt exists.')
    
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 8083;
app.listen(port, () => console.log(`Listening to port ${port}...`));