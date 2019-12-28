const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    name :{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    age :{
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
        return ret;
      }
    }
  });

const User = mongoose.model('User',userSchema);

module.exports = User;