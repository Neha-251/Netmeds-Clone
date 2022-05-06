const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        cart_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"cart",
            required:false
        },
        user_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:false
        },
        status: {type:Boolean, required:false ,default:false}
        
        
    },
    {
        versionKey:false,
        timestamps:true
    }
)

const Payment = mongoose.model("payment", paymentSchema);

module.exports = Payment;