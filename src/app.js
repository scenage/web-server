const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'hbs')

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
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