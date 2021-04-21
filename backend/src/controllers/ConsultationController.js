const express = require('express')
const mongoose = require('mongoose')
const Consultation = require('../models/Consultation')


	module.exports = {
        async createConsultation(req, res) {
            
            try {
                const {syndrome,  description, date } = req.body;
            
                const consultation = await Consultation.create({
                    syndrome,
                    description,
                    date
                    });
            return res.json(consultation);
            }
         catch (err) {
            next(err);
          }
                
    },
    async getAllConsultations(req, res) {
        try {
            const consultations = await Consultation.find().sort({ _id: -1 })
    
            if (consultations) {
                return res.json(consultations)
            }
        } catch (error) {
            return res.status(400).json({ message: "Il n'ya aucune consultation" })
        }
    }, 
    async delete(req, res) {
        const {consultationId } = req.params;
        try {
            await Exemplaire.findByIdAndDelete(consultationId)
            return res.status(204).send()
    
        } catch (error) {
            return res.status(400).json({ message: 'Aucune consultation avec cette ID' })
        }
    },

    async  updateConsultation (req, res)  {
        const { id } = req.params;
        const { syndrome, description, date } = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
        const updateConsultation = { syndrome, description, date, _id: id };
    
        await Consultation.findByIdAndUpdate(id, updateConsultation, { new: true });
    
        res.json(updateConsultation);
    }
	
}