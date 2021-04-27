const express = require('express')
const mongoose = require('mongoose')
const Consultation = require('../models/Consultation')
const User = require('../models/User');
const jwt = require('jsonwebtoken')


	module.exports = {
        async createConsultation(req, res) {
            jwt.verify(req.token, 'secret', async (err, authData) => {
                if (err) {
                    res.statusCode(401)
                }
                else {
                const {syndrome,  description, date } = req.body;
                const { user_id } = req.headers;

                const user = await User.findById(user_id)

        console.log("Consultation has been hit" ,syndrome , description, date, user_id)

        if (!user) {
            return res.status(400).json({ message: 'User does not exist!' })
        }
        try {
                const consultation = await Consultation.create({
                    syndrome,
                    description,
                    date,
                    user: user_id,
                    });
            return res.json(consultation);
            }
         catch (err) {
            next(err);
          }
        }
    })    
    },
    async getAllConsultations(req, res) {
        jwt.verify(req.token, 'secret', async (err, authData) => {
			if (err) {
				res.sendStatus(401)
			} else {
        try {
            const consultations = await Consultation.find().sort({ _id: -1 })
    
            if (consultations) {
                return res.json(consultations)
            }
        } catch (error) {
            return res.status(400).json({ message: "Il n'ya aucune consultation" })
        }
    }
})
    }, 
    async delete(req, res) {
        jwt.verify(req.token, 'secret', async (err, authData) => {
			if (err) {
				res.sendStatus(401)
			} else {
        const {consultationId } = req.params;
        try {
            await Exemplaire.findByIdAndDelete(consultationId)
            return res.status(204).send()
    
        } catch (error) {
            return res.status(400).json({ message: 'Aucune consultation avec cette ID' })
        }
    }
})
    },

    async  updateConsultation (req, res)  {

        
        const { id } = req.params;
        const { syndrome, description, date } = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
        const updateConsultation = { syndrome, description, date, _id: id };
    
        await Consultation.findByIdAndUpdate(id, updateConsultation, { new: true });
    
        res.json(updateConsultation);
    },

    async  getConsultationsByUserId(req, res) {
		jwt.verify(req.token, 'secret', async (err, authData) => {
			if (err) {
				res.sendStatus(401)
			} else {

				const { user_id } = req.headers

				try {
					const consultations = await Consultation.find({ user: authData.user._id })

					if (consultations) {
						return res.json({ authData, events })
					}
				} catch (error) {
					return res.status(400).json({ message: `We do have any events with the user_id ${user_id}` })
				}
			}
		})
	}
}



