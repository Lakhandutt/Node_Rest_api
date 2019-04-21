const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());


Courses = [
    {
        id: 1,
        name: "hindi"
    },
    {
        id: 2,
        name: "computers"
    }
]
// get Methods
app.get('/', (req, res) => {
    res.send('hello world ...');
})

app.get('/api/courses', (req, res) => {
    res.send(Courses);
})

app.get('/api/courses/:id', (req, res) => {
    const course = Courses.find((course) => course.id === parseInt(req.params.id))
    if (!course) {
      return  res.status(404).send(' course not found')
    }
    res.send(course);
})

// Post methods
app.post('/api/courses', (req, res) => {

    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
    // const result = Joi.validate(req.body, schema);
    // if (result.error) {
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }
    //updated shorter by creating different functions
    const {error}=validateCourse(req.body);
    if (error) {
    return    res.status(400).send(error.details[0].message);
    
    }

    const course = {
        id: Courses.length + 1,
        name: req.body.name
    };
    Courses.push(course);
    res.send(course);

})

//put method
app.put('/api/courses/:id',(req,res)=>{
    //response if course not found
    const course = Courses.find((course) => course.id === parseInt(req.params.id))
    if (!course) {
      return  res.status(404).send(' course not found')
    }

    //response if bad or invalid request
    
    // const result=validateCourse(req.body);
    //object destructuring for directly getting result.error instead of result
    const {error}=validateCourse(req.body);//result.error

    // if (result.error) {
        if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    //update the course
    course.name=req.body.name;
    res.send(course);

});


//delete method
app.delete('/api/courses/:id',(req,res)=>{
    //response if course not found
    const course = Courses.find((course) => course.id === parseInt(req.params.id))
    if (!course) {
      return  res.status(404).send(' course not found')
    }

    const index=Courses.indexOf(course);
    Courses.splice(index,1)

    res.send(course);

})


function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}






const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
})