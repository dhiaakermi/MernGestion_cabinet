const express = require('express')

const ConsultationController = require('./controllers/ConsultationController')


const routes = express.Router();

routes.post('/Consultation', ConsultationController.createConsultation)
routes.get('/Consultation', ConsultationController.getAllConsultations)
routes.delete('/Consultation/:consultationId', ConsultationController.delete)
routes.patch('/Consultation/:id', ConsultationController.updateConsultation);

module.exports = routes;