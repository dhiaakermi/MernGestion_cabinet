const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	nom: String,
	prenom: String,
	password: String,
	email: String,
    role: String, 
    

})




module.exports = mongoose.model('User', UserSchema)