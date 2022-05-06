const mongoose =  require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName:{type:String, required:false},
        lastName:{type:String, required:false},
        email:{type:String, required:false},
        password:{type:String, required:false},
        number:{type:Number, required:false}

    },
    {
        versionKey:false,
        timestamps:true
    }
);

userSchema.pre("save", function (next) {  //readymade hook in mongoose its a middleware
    //let modifiedPassword = this.passowrd + xyz;
    //this.password  = modifedPassword;
    
      if (!this.isModified("password")) return next();
    
      // secret , salt => sdkfhsdkfh , secret + sdkfhsdkfh => dskfgkcskdfgsdkfsdf
      // salt
      // hashing rounds =>
      var hash = bcrypt.hashSync(this.password, 8);
      this.password = hash;
      return next();
    });
    
    userSchema.methods.checkPassword = function (password) {    //method
      return bcrypt.compareSync(password, this.password);
    };

const User = mongoose.model("user",userSchema);

module.exports = User;