import express from 'express'

const app = express();
app.use(express.json());

app.get('/', (request, response)=>{
    return console.log('Hello World')
)}   ;

app.listen(5002, ()=>{
    console.log('SERVER STARTED ON PORT 5002')
})
