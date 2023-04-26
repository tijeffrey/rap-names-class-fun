const express = require('express')
const PORT = 8000
const app = express()

const rappers = {
    '21 savage':{
    'age': '29', 
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
}, 
'chance the rapper':{
    'age': '29', 
    'birthName': 'Chancellor Bennett',
    'birthLocation': 'Illinois, USA',
}, 
'dylan':{
    'age': 'Dylan', 
    'birthName': 'Dylan',
    'birthLocation': 'Dylan',
} 
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase
    if (rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }

    response.json(rappers)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The Server is running on ${PORT}! You better go catch it!`)
})