const router = require("express").Router();

const { Signup, Login } = require("../Controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const {HoldingsModel} = require("../model/HoldingsModel");
const {PositionsModel} = require("../model/PositionsModel");
const {OrdersModel} = require("../model/OrdersModel");

router.get("https://zerodha-clone-server.onrender.com/allHoldings", async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

router.get("https://zerodha-clone-server.onrender.com/allPositions", async(req, res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

router.post("https://zerodha-clone-server.onrender.com/newOrder", async(req,res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();
    res.send("order saved!");
})
router.get("https://zerodha-clone-server.onrender.com/allOrders", async(req,res)=> {
    let allOrder = await OrdersModel.find({});
    res.json(allOrder);
});

router.post("https://zerodha-clone-server.onrender.com/",userVerification);

router.post("https://zerodha-clone-server.onrender.com/signup", Signup);

router.post("https://zerodha-clone-server.onrender.com/login", Login);

router.post("https://zerodha-clone-server.onrender.com/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ success: true, message: "Logged out successfully" });
});



module.exports = router;

