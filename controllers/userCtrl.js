const Users=require("../models/userModel")
const bcrypt=require("bcrypt")

const userCtrl={
register: async (req,res)=>{

    try {
       const{name,email,password}=req.body;
       const user=await Users.findOne({email})
       if(user) return res.status(400).json({msg:"Bu mail adresi zaten kullanılıyor"})
       if(password.length<6)
       return res.status(400).json({msg:"Şifre en az 6 karakter olmalıdır"})

       //Password encryption
       const passwordHash=await bcrypt.hash(password,10)

       res.status(200).json({password,passwordHash})
    } catch (err) {
        return res.status(500).json({msg:err.message})
        
    }
   
}
}

module.exports=userCtrl