const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
app.use(cors())
const port = process.env.PORT || 8000
const userModel = require('./models/userModel')
const productModel = require('./models/productModel')
mongoose.connect('mongodb://localhost:27017/softTestApp').then(()=>{console.log("mongodb connected")})
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.post('/take',async (req, res) => {

    const {email,password} = req.body   
    const user = await userModel.matchpassword(email,password)
     return res.json(user)
    
})

app.post('/addProduct',async(req, res)=>{
    const {productname,productdetail} = req.body
       await productModel.create({
        productname: productname,
        productdetail:productdetail
        }).then(result=>res.json(result)).catch(err=>res.json(err))
    }
)
app.get('/getProduct',(req, res)=>{
     productModel.find()
   .then(result=>res.json(result)).catch(err=>res.json(err))
}
)

app.listen(port, () => { console.log("app is running on 4208") })
