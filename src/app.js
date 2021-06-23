const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define config paths for express and hbs to serve static content
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup hbs and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Patrick Tsang'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Patrick Tsang'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is a SOS',
        name: 'Patrick Tsang'
    })
})

app.get('/weather', (req,res) => {
    res.send({
        forecast: 'Clear',
        location: 'Sydney'   
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})