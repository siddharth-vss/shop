let express = require('express');
let router =express.Router();
const { body, validationResult } = require('express-validator');
let journal = require('../model/journal');
let item = require('../model/item');
// add items at 


router.post('/stocks',[

    body('Item', 'Enter a Item').isLength({ min: 3 }),
    body('Price', 'Enter Item\'s price').isNumeric(),
   
],async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        let stock = await item.findOne({ email: req.body.Item });
        if (stock) {
          return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        stock = await item.create({
            Item : req.body.Item,
            Price : req.body.Price,
          });
          res.json({ stock })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }


})

// add journal  at 

router.post('/jouranls',[

    body('Title', 'Enter a valid Title').isLength({ min: 3 }),
    body('Textarea', 'Enter a valid Text').isLength({ min: 10 }),
  ],async(req,res)=>{

    console.log(req.body.name);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        let notes = await journal.findOne({ email: req.body.email });
        if (notes) {
          return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        notes = await journal.create({
            Title : req.body.Title,
            Textarea : req.body.Textarea,
          });
          res.json({ notes })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }


})


module.exports =router