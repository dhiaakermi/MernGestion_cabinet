const mongoose = require('mongoose')


const DossierSchema = new mongoose.Schema({
	traitement: String,
	duree: String,
	suivie: String,
    dateTraitement: Date,

	user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Dossier', DossierSchema)