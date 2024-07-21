
const {Schema,model} = require('mongoose')
const userSchema = new Schema({
    email : "String",
    password : "String"
})



userSchema.static("matchpassword",async function(email,password){
    const user = await this.findOne({email})
    if(user?.password == password){
        return user
    }
    
})
const userModel = model("userInfo",userSchema)
module.exports = userModel