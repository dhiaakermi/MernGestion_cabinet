const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes =require('./routes');



const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

app.get('/register', (req, res) => {
	res.send('Welcome to Register \n')
})

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

try {
	
	mongoose
	.connect('mongodb+srv://rania:rania123@cluster0.daimm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	 { useNewUrlParser: true ,useUnifiedTopology: true,   useCreateIndex: true,  useFindAndModify: false  })
		console.log('MongoDb connected successfully!')
	} catch (error) {
		console.log(error)
	}


	app.use(routes);
	
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})