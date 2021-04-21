const mongoose = require('mongoose')


const ConsultationSchema = new mongoose.Schema({
	syndrome: String,
	description: String,
	date: Date
})

module.exports = mongoose.model('Consultation', ConsultationSchema)