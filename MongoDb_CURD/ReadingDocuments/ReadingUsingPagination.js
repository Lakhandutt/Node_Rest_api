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
// implementing Pagination
async function getPaginationCourses(pageNumber, pageSize) {
    const pageNo = pageNumber;
    const pgsize = pageSize;

    const allcourses = await Course
        .find()
        .select({ name: 1 })

    const courses = await Course
        .find()
        .skip((pageNo - 1) * pgsize)
        .limit(pgsize)
        .select({ name: 1 })

    console.log(allcourses)
    console.log(courses)  //display page number 2 with 3 documents
}

//in real world the api is looks like:
// /api/courses?pageNumber=2&pageSize=10
getPaginationCourses(2, 3);




