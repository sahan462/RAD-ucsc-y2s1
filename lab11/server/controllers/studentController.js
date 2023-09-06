const Student =  require("../models/studentModel");

const addStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body); // Assuming Student is your Mongoose model
        await newStudent.save();
        res.status(201).json({ message: 'Student added successfully' });
    } catch (e) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const viewStudents = async (req, res) => {
    try {
        const students = await Student.find(); // Assuming Student is your Mongoose model
        res.status(200).json( students );
    } catch (e) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    addStudent,
    viewStudents
}