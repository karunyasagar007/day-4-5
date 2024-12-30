const mongoose = require('mongoose');

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Department: String,
    Sal: Number
})
var Employemodel = mongoose.model('employee', schema);
module.exports = Employemodel;


