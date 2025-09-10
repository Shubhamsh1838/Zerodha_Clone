const router = require("express").Router();

const { Signup, Login } = require("../Controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const {HoldingsModel} = require("../model/HoldingsModel");
const {PositionsModel} = require("../model/PositionsModel");
const {OrdersModel} = require("../model/OrdersModel");

router.get("/allHoldings", async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

router.get("/allPositions", async(req, res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

router.post("/newOrder", async(req,res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();
    res.send("order saved!");
})
router.get("/allOrders", async(req,res)=> {
    let allOrder = await OrdersModel.find({});
    res.json(allOrder);
});

router.post("/",userVerification);

router.post("/signup", Signup);

router.post("/login", Login);

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ success: true, message: "Logged out successfully" });
});



module.exports = router;


