const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.get("", async(req,res)=>{
    try {
        const product = await Product.find().lean().exec();
        return res.status(201).send({product:product});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const item = await Product.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

//to get single products
router.get("/:id", async (req, res) => {
    const product = await Product
        .findById(req.params.id)
        .lean()
        .exec()
    return res.status(201).send({ product })
})

// // to sort the product by fabric 
// router.get("/sort/fabric", async (req, res) => {
//     const fabric = req.query.fabric;
//     const product = await Product
//         .find({ gender: { $eq: `${fabric}` } })
//         .lean()
//         .exec();
//     return res.status(201).send({ combi:product });
// })

// //to sort the product by colors
// router.get("/sort/color", async (req, res) => {
//     const color = req.query.color;
//     const prodColor = await Product
//         .find({ color: { $eq: `${color}` } })
//         .lean()
//         .exec();
//     return res.status(201).send({ combi:prodColor });
// })

// // //to sort the product by brands
// router.get("/sort/brand", async (req, res) => {
//     try {
//         const brand = req.query.brand;
//     const prodBrand = await Product
//         .find({ brand: { $eq: `${brand}` } })
//         .lean()
//         .exec();
//     return res.status(200).send({ combi:prodBrand });
//     } catch (error) {
//         return res.status(500).send({message: error.message});
//     }
// });

// //to sort the product by types
// router.get("/sort/type", async (req, res) => {
//     const type = req.query.type;
//     const prodBrand = await Combi
//         .find({ type: { $eq: `${type}` } })
//         .lean()
//         .exec();
//     return res.status(201).send({ combi:prodBrand });
// })

// //to sort the product by price
// router.get("/sort/price", async (req, res) => {
//     const from = req.query.from;
//     const to = req.query.to;
//     const prodPrice = await Combi
//         .find({ $and: [{ price: { $gt: `${from}` } }, { price: { $lt: `${to}` } }] })
//         .lean()
//         .exec();
//     return res.status(201).send({ combi:prodPrice });
// })

module.exports = router;