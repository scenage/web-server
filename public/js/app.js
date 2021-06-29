const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
var icon = document.getElementById('weather_icon')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    //Clear paragraph content
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + encodeURI(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.temperature + ' degrees'
                messageTwo.textContent = data.weather
                icon.src = data.weather_icon
            }
        })
    })
})