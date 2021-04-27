const express = require('express')

const ConsultationController = require('./controllers/ConsultationController')
const UserController = require('./controllers/UserController')
const verifyToken = require('./config/verifyToken')

const routes = express.Router();
//consultation
routes.post('/Consultation' ,verifyToken, ConsultationController.createConsultation)
routes.get('/Consultation',verifyToken, ConsultationController.getAllConsultations)
routes.delete('/Consultation/:consultationId',verifyToken, ConsultationController.delete)
routes.patch('/Consultation/:id',verifyToken, ConsultationController.updateConsultation);
routes.get('/user/consultations',verifyToken, ConsultationController.getConsultationsByUserId)


//user
routes.post('/user/register', UserController.creerUser)
routes.post('/login', UserController.login)

module.exports = routes;