const express=require('express');

const app=express();
const router=express.Router();

const date=require('date-and-time');

var bodyParser = require('body-parser');

var mongoose=require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://user:ldUyYa35tdENIu39@cluster0.gk8zr.mongodb.net/mongoose?retryWrites=true&w=majority')



const d=new Date();
console.log(d)





var nameSchema = new mongoose.Schema({
   
    
    
        Email: String,
        Password:String,
        
        
        

    });
    var User = mongoose.model("User", nameSchema);




app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html");
    });




    app.post("/register", (req,res) => {
        var myData = new User(req.body);
        myData.save()
            .then(item => {
                res.send("Your response has been recorded to database");
            })
            .catch(err => {
                res.status(400).send("Unable to save to database");
            });
    });

const PORT=5000;
app.listen(PORT,()=>{
        console.log(`Connected to http://localhost:${PORT} successfully`);
})

