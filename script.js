let button = document.querySelector('button')
button.addEventListener('click', displayStats)

function displayStats() {

    const input = document.getElementById('input')
    const city = input.options[input.selectedindex].value
    let population = o, literacyrate = 0, language = ''

    switch (city) {
        case 'madurai':
            population = 100000000
            literacyrate = 99.0
            language = 'tamil'
            break
        case 'chennai':
            population = 40000000
            literacyrate = 123.0
            language = 'tamil'
            break
        case 'bengaluru':
            population = 34599009
            literacyrate = 139.03
            language = 'kanadam'

    }
    let text = `the indian city of ${city} has a population of${population} .language spoken${language} and litracy rate is${literacyrate} rate is .`
    console.log(text)
    let resultdiv = document.createElement('div')
    resultdiv.id = 'result'
    document.getElementById('wrapper').appendChild(resultdiv)
    document.getElementById('result').innerHTML = text

}





