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
//complex Reading Queries => Comparision Operators
//let our Course object has price property then we use  eq,gt,gte,lt,the,in,nin operators for
// price range

async function getSpecificCoursesUsingComparisionOp() {
  const courses = await Course
    // .find( { price: { $gte : 10 , $lte : 20 } }) //finding Courses of  20 >= price >= 10
    .find({ price: { $in: [10, 15, 20] } }) //finding Courses of price 10 ,15 ,20
  console.log(courses);
}
getSpecificCoursesUsingComparisionOp();


//Logical Operators => and, or
async function getSpecificCoursesUsingLogicalOp() {
  const courses = await Course
    .find()
    .or([{ author: 'Mosh' }, { isPublished: false }])
  // .and([{ author: 'Mosh' }, { isPublished: false }])
  console.log(courses)

}
getSpecificCoursesUsingLogicalOp();

