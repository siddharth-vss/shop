let express = require('express');
let router =express.Router();
let worker = require('../model/singup');
let bill = require('../model/billdata');
const { body, validationResult } = require('express-validator');


/// creating user at
router.post('/singup',[

    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('mono', 'Enter a valid mobile number').isLength({min : 10}),
    body('address', 'Enter a valid address').isLength({min : 30}),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 8 }),
],async(req,res)=>{

    console.log(req.body.name);

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



/// creating bill at

router.post('/bill',[

  body('name','').isLength({min : 5}), 
  body('mobile_number','').isLength({min : 10}), 
  body('address','').isLength({min :30}), 
  body('City','').isLength({min :5}), 
  body('State','').isLength({min :5}), 
  body('Zip','').isLength({min :6}), 
  body('Item','').isLength({min :1}), 
  body('quantity','').isLength({min :1}), 
  body('Price','').isLength({min :1}), 
  
],async(req,res)=>{

  console.log(req.body.name);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try{
      let data = await worker.findOne({ email: req.body.email });
      if (data) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" })
      }
      data = await bill.create({
        name : req.body.name,
        mobile_number : req.body.mobile_number,
        address : req.body.address,
        City : req.body.City,
        State : req.body.State,
        Zip : req.body.Zip,
        Item : req.body.Item,
        quantity : req.body.quantity,
        Price : req.body.Price,
        
        });
        res.json({ data })
  }
  catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }


})




module.exports = router