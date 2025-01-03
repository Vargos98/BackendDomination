const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vargos98:9828206Uk@cluster0.y0vww.mongodb.net/')
.then(()=>{
  
  console.log('Connected to MongoDB')
})
.catch((err)=>{
  console.error(err)

})


const userSchema = mongoose.Schema(
  {
    username:{
      type: String,
      required: true,
      unique: true,
      lowercase:true
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
    },
    age:{
      type: Number,
      required: true,
    }
  })

  module.exports = mongoose.model('User', userSchema);