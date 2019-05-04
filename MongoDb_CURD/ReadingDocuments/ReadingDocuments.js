const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('Connected to Mongodb'))
    .catch(err => console.log('could not connect to mongodb', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});
const Course = mongoose.model('Course', courseSchema)

//new code starts here
//quering Documents
//gives Arrays of all the documents in Courses Collection
async function getallCourses(){
    const courses = await Course.find();
    console.log(courses);
}
 getallCourses();

//filtering the courses => it gives all Angular courses
async function getSpecificCourses(){
    const courses = await Course
    .find( {name: 'Angular Course'}) //finding only angular Courses
    .limit(10)              //gives top 10 result
    .sort({name:-1})        //sorting based on name 1 for Ascending and -1 for Desending
    .select({ name:1 ,tags:1})      //selecting only some of properties (name and tags)
   
    console.log(courses);
}
getSpecificCourses();