
const { customerSignup, customerCount, editCustomerData, delCustomerData } = require("../controllers/user.controller");

const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("Welcome to Rally app Homepage ")
});

router.get("/count", customerCount);
router.post("/register", customerSignup);
router.put("/update/:id", editCustomerData);
router.get("/del", delCustomerData);

// handling general errors
router.all("*", (req, res) => {
    return res.status(404).json({
      error: `${req.url} not found`,
    });
  });
  
  module.exports =router;