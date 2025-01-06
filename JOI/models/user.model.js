const mongoose = require('mongoose');
const Joi = require('joi');
mongoose.connect('mongodb+srv://vargos98:9828206Uk@cluster0.z5ygt.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB')
  })

  .catch((err) => {
    console.error(err)
  })


const userSchema = mongoose.Schema({
  username : {
    type:String,
    required: true,
    unique: true,
    minlength: 3,

  },
  name :{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  age:{
    type: Number,
    required: true,
    min:18,
  },
  contact :{
    type: String,
    required: true,
  },
  
}, {timestamps: true}

);


function validateModel(data){
  let schema = Joi.object({
    username: Joi.string().min(3).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(18).required(),
    contact: Joi.string().required(),
  })
  let result = schema.validate(data);
  return result;
}
let userModel = mongoose.model("User", userSchema);
module.exports = {validateModel, userModel}