const mongoose = require('mongoose');

//connection to mongodb
//connection string should come in configuration file as talked in express lecture 
//connect method return promise so we call then
//useNewUrlParser because old one is depricated
//it will create playground db if it is not exist
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('Connected to Mongodb'))
    .catch(err => console.log('could not connect to mongodb', err));
//in real world app we use debugg messages in place of console.log


//creating schema in mongoose for mongodb that define shape of course document
//list of type you can mention when creating schema are:
//String,Number,Date,Buffer(Binary Data ),Boolean,ObjectId(assign unique identifier),Array
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

//creating Course Model or class by mongoose.model method
//first argument is collection present in db from which you want to link but in
//singular form if collection is not present then it creates by classname+s
//here it create collection courses for Course Model
//second is name of schema 
const Course = mongoose.model('Course', courseSchema)

//create and save document based on courseSchema in our playground db
async function createCourse() {

    //creating course class object
    const course = new Course({
        name: 'Node.js Course',
        author: 'Mosh',
        tags: ['node', 'backend'],
        isPublished: true
    });

    const course2 = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    //async operation to save that return promise so we use async await
    //result is the object return by mongodb after saving document in collection
    const result = await course.save()
    const result2 = await course2.save()
    console.log(result1);
    console.log(result2);


}
createCourse();