require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require("cors")
const fileUpload=require("express-fileUpload")
const cookieParser=require("cookie-parser")


const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}))

//Connect to mongodb

const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,

},err=>{
    if(err) throw err;
    console.log("Mongo DB'ye bağlanıldı.")
})

app.get("/",(req,res)=>{
    res.json({msg:"Kanalıma hoşgeldiniz.Lütfen abone olunuz.Teşekkürler"})
})

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server PORT'ta çalışıyor.",PORT)
})

