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


// RegularExpression => for courses Starts with Mosh
async function getSpecificCoursesUsingRegularExpression() {
    const courses = await Course
        .find({ author: /^Mosh/ })  // ^ => represents start of string
    console.log(courses)

        //find course end with hamedani
        .find({ author: /Hamedani$/ })     // $ => represents end of String
        // for case insensitive in end palace i
        .find({ author: /Hamedani$/i })

        //contains Mosh
        .find({ author: /.*Mosh.*/ })  // 0 or more characters before or end of mosh 
        .find({ author: /.*Mosh.*/i }) //for case insensetive
}
getSpecificCoursesUsingRegularExpression();



//counting the results
async function getResultCounts() {
    const courses = await Course
        .find({ author: /.*MOSH.*/i })
        .count();
    console.log(courses);
}
getResultCounts();