const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE).then((res)=>{
    console.log('server connected to database');
}).catch((err)=>{
    console.log(err);
})