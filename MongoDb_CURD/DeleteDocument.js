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

//remove a document
//deleteOne remove only first matching course to delete all use 
//deleteMany which returns number of courses deleted
//we have many other methods in mongoose documentation which also return
//the deleted object (findByIdAndDelete and many more) so we can see which document is deleted from db

async function removeCourse(id) {
    const course = await Course.deleteOne({_id:id});  
    const course2 = await Course.deleteMany({_id:id});  
    console.log(course);
    console.log(course2);

}
removeCourse('5ccead9190ea991810e4ac80')