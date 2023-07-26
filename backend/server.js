let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser')
let app = express();
let item = require('./model/item');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.get('/',async (req,res)=>{
     let items = await item.find({});
      res.send(items)
})



app.use('/', require('./routers/auth'))
app.use('/staf', require('./routers/item'))


app.listen(5000,()=>{
    console.log(`Server is running on port http://localhost:5000`);
});