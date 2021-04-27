const mongoose = require('mongoose')


const ConsultationSchema = new mongoose.Schema({
	syndrome: String,
	description: String,
	date: Date,

	user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Consultation', ConsultationSchema)