const express = require('express')
const app = express()
const PORT = 8000

const cats = {
    'maine coon':{
        'Origin': 'Maine, United States',
        'Size': '13-18 lbs',
        'Coloration': 'All varieties'
    },
    'ragdoll':{
        'Origin': 'Riverside, CA, United States',
        'Size': '10-20 lbs',
        'Coloration': 'Chocolate, red, seal, blue, lilac, and cream'
    },
    'unknown':{
        'Origin': 'unknown',
        'Size': 'unknown',
        'Coloration': 'unknown'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const catName = req.params.name.toLowerCase()
    if( cats[catName] ){
        res.json(cats[catName])
    }else{
        res.json(cats['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})