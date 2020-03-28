const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://azra_elturco:1996417B@cluster417-vl3kd.mongodb.net/test?authSource=admin&replicaSet=Cluster417-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true
`, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    title:String,
    description:String,
    path:String
})
 

const blogPostSchema = new Schema({
    title:String,
    description:String,
    postImage:String,
    isDeleted:{type:Boolean,default:false}
})

const Food = mongoose.model('FoodModel',foodSchema);
const BlogPost = mongoose.model('BlogPostModel',blogPostSchema);

//get sonrası food listeleme
app.get('/api/foods',(req,res) => { 
    Food.find({},(err,document) => {
        if(!err){
            res.json(document);
        }  
    })
});

//post sonrası mongodb ye food ekleme!
app.post('/api/foods',(req,res)=>{
  
    var food = new Food({
        title:req.body.title,
        description: req.body.description,
        path:req.body.path
    });

    food.save((err) => {
        if(!err){
            res.send("SUCCESS!!")
        }
        else{
            res.status(500).send(err);
        }
    })
})

//get sonrası blogpost listesi
app.get('/api/blogpost',(req,res) => {
    BlogPost.find({isDeleted:false},(err,document) => {
        if(!err){
            res.json(document);
        }
    })
})


//post sonrası blogpost save
app.post('/api/blogpost',(req,res) => {

    var blogpost = new BlogPost({
        title:req.body.title,
        description : req.body.description,
        postImage : req.body.path

    });

    blogpost.save((err) => {
        if(!err){
            res.send("Success!!");
        }
        else{
            res.status(500).send(err);
        }
    })

})


app.listen(3000);