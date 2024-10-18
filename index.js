require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./Connection/db')
const routes=require('./Routes/router')


const emServer=express()

emServer.use(cors())
emServer.use(express.json())
emServer.use(routes)

const PORT= 3000 || process.env.PORT

emServer.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
    
})

emServer.get('/',(req,res)=>{
    res.send("<h1>welcome</h1>")
})