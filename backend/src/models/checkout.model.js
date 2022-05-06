const mongoose =  require("mongoose");


const checkoutSchema = new mongoose.Schema(
    {
        pincode:{type:String, required:true},
        city:{type:String, required:true},
        state:{type:String, required:true},
        firstName:{type:String, required:true},
        lastName:{type:String, required:true},
        address:{type:String, required:true},
        landmark:{type:String, required:true},
        phone:{type:Number, required:true},
        
        cart_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"cart",
            required:false
        },
        total:{type:Number, required:false}

    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Checkout = mongoose.model("checkout",checkoutSchema);

module.exports = Checkout;