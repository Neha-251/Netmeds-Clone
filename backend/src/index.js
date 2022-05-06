const express = require("express");
const app = express();
const cors = require("cors");

const productsController = require("./controllers/product.controller");
const cartController = require("./controllers/cart.controller");
const checkoutController = require("./controllers/checkout.controller");
const paymentController = require("./controllers/payment.controller");
const usersController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");





app.use(cors());
app.use(express.json());

app.use("/products", productsController);
app.use("/carts", cartController);
app.use("/checkout",checkoutController);
app.use("/payment",paymentController);
app.use("/users", usersController);
app.post("/login", login);
app.post("/register", register);




module.exports = app;