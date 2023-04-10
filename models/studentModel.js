const mongoose = require('mongoose');

// schema for the model
const studentModelSchema = new mongoose.Schema({
    student_no: Number,
    name: String,
    age: Number
    // ...
});

// Create a model for the schema
const StudentModel = mongoose.model('StudentModel', studentModelSchema);

// Export the model
module.exports = StudentModel;