const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    username :{
      type: String,
      required: true,
      unique: true,
      lowercase:true
    },
    name :{
      type: String,
      required: true,

    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase:true
    },
    password:{
      type: String,
      required: true,
    }
  })

 module.exports = mongoose.model('user', userSchema);