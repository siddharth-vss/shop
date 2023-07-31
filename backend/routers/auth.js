let express = require('express');
let bodyParser =require('body-parser');
let router =express.Router();
let worker = require('../model/singup');
let bill = require('../model/billdata');
// let item = require('../model/item');
const { body, validationResult } = require('express-validator');
let cors = require('cors');
router.use(cors());
router.use(bodyParser.json());

/// creating user at
router.post('/singup',[

    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
   body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),
],async(req,res)=>{

    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        let user = await worker.findOne({ email: req.body.email });
        if (user) {
          return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        user = await worker.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
          });
          res.json({ user })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }


})

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/singin', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').isLength({min : 1}),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  console.log(email);
  try {
    let user = await worker.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
    
    if(password === user.password){
      success=true
      
      console.log(user);
      res.json(user)
    }
    else {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }
    
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
  
  
});


/// creating bill at

router.post('/bill',[
  
  body('name','Enter valid Name').isLength({min : 5}), 
  body('mobile_number','Enter valid Numbers').isLength({min : 10}), 
  // body('address','').isLength({min :30}), 
  body('City','Enter valid City').isLength({min :5}), 
  // body('State','').isLength({min :5}), 
  body('Zip','Enter valid Zipcode').isLength({min :6}), 
  // body('Item','Enter valid item ').isLength({min :1}), 
  body('quantity','Enter valid Quantity ').isLength({min :1}), 
  // body('Price','').isLength({min :1}), 
  
],async(req,res)=>{

  console.log(req.body.name);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try{
      
      const  data = await bill.create({
        name : req.body.name,
        mobile_number : req.body.mobile_number,
        address : req.body.address,
        City : req.body.City,
        State : req.body.State,
        Zip : req.body.Zip,
        Item : req.body.Item,
        quantity : req.body.quantity,
        Price : req.body.Price,
        invoice : req.body.invoice,
        Payment : req.body.Payment,
        biller:req.body.biller,
        billern:req.body.billernum
        
        });
        console.log(data);
        res.json({data})
  }
  catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }


})


router.get('/users',async (req,res)=>{
  let items = await worker.find({});
   res.send(items)
})

router.get('/bill',async (req,res)=>{
  let items = await bill.find({});
   res.send(items)
})



module.exports = router