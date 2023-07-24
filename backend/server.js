let express = require('express');
let app = express();
let worker = require('./model/singup');
const { body, validationResult } = require('express-validator');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

app.post('/login', [
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
        res.redirect('/bill')
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

app.use('/', require('./routers/auth'))
app.use('/staf', require('./routers/item'))


app.listen(5000,()=>{
    console.log(`Server is running on port http://localhost:5000`);
});