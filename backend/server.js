let express = require('express');
let app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
})



app.use('/', require('./routers/auth'))
app.use('/staf', require('./routers/item'))


app.listen(5000,()=>{
    console.log(`Server is running on port http://localhost:5000`);
});