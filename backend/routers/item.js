let express = require('express');
let router =express.Router();
const { body, validationResult } = require('express-validator');
let journal = require('../model/journal');
let item = require('../model/item');
let bodyParser =require('body-parser');
let cors = require('cors');
router.use(cors());
router.use(bodyParser.json());
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

router.post('/journals',[

    body('Title', 'Enter a valid Title').isLength({ min: 3 }),
    body('Textarea', 'Enter a valid Text & cheak length min 10').isLength({ min: 10 }),
  ],async(req,res)=>{

    console.log(req.body.Title);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
        
        const notes = await journal.create({
            Title : req.body.Title,
            Textarea : req.body.Textarea,
          });
          res.json({ notes })
  

})
router.delete('/deljournals/:id',async(req,res)=>{
  try {
    let note = await journal.findById(req.params.id);
    console.log(note);
    // if (!note) { return res.status(404).json("Not Found") }
     
    note = await journal.findByIdAndDelete(req.params.id)
    res.json({ "Success": "Note has been deleted", note: note });

    
   } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
   }  
        
  

})




router.get('/item',async (req,res)=>{
  let items = await item.find({});
   res.send(items)
})
router.get('/journal',async (req,res)=>{
  let journals = await journal.find({});
   res.send(journals)
})

module.exports =router