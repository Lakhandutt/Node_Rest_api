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

//updating a document => 2 approaches
// approach 1=> Query =>find =>Modify =>save
//it is used when we have to update based on some condition
//like we cannot update the course that is published so
// we use if (course.isPublished===true) return;
async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) return;

    course.set({
        isPublished: true,
        author: 'amit'
    });

    const result = await course.save();
    console.log(result);
}

//updateCourse('5ccead9190ea991810e4ac80');


//approach 2=> update directly
//this approach is used when we have to update directly
// having no condition

async function updateCourseDirectly(id) {
    //only gives result not return updated object
    const result = await Course.update({ _id: id }, {
        $set: {
            author: "amit thakur",
            isPublished: false
        }
    });

    console.log(result);

    //return updated object also
    const course = await Course.findOneAndUpdate({ _id: id }, {
        $set: {
            author: "amit again",
            isPublished: false
        }
    },{ new: true });

    console.log(course);

}

updateCourseDirectly('5ccead9190ea991810e4ac80');

