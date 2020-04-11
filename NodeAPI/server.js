const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const jwtkey = 'ironmaiden';
const jwtExpirySeconds = 300;





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
    path:String,
    cooktime:String,
    size:String,
    recipe:String,
    isdeleted:{type:Boolean,default:false}
});
 

const blogPostSchema = new Schema({
    title:String,
    description:String,
    postImage:String,
    isDeleted:{type:Boolean,default:false}
})

const personalSchema = new Schema({
    name:String,
    password:String,
    surname:String,
    title:String,
    description:String,
    isdeleted:{type:Boolean,default:false}
})

const Food = mongoose.model('FoodModel',foodSchema);
const BlogPost = mongoose.model('BlogPostModel',blogPostSchema);
const Personal = mongoose.model('PersonalModel',personalSchema);


app.post('/token',(req,res) => {
    var username = req.body.name;
    var password = req.body.password;

    Personal.find({"name":username,"password":password},(err,document)=>{
        if(!err){
            if(document.length > 0){
                const token = jwt.sign({username},jwtkey,{
                    algorithm: 'HS256',
                    expiresIn:jwtExpirySeconds
                });
        
                res.json({'tk':token});
            }
            else{
                res.status(401).send("Kullanıcı adı veya parola hatalı!!");
            }
        }
    })

})

app.get('/admin/muhasebe',(req,res) => {
    var token = req.query.token;

    try{
        jwt.verify(token,jwtkey);
        console.log("OK!")
        res.json({"privatedata":"çağatay hocanın maaşı 10 $"})
    }
    catch (e){
        console.log(e);
        res.status(401).send("Token error!!!!!");
    }
})


//get sonrası personal listeleme
app.get('/api/personals',(req,res) => {
    Personal.find({isdeleted:false},(err,document) => {
        if(!err){
            res.json(document);
        }
        else{
            res.json(err);
        }
    })
});

app.post('/api/personals',(req,res) =>{
    var person = new Personal({
        name:req.body.name,
        surname:req.body.surname,
        description:req.body.description,
        title:req.body.title,
        password:req.body.password
    });


    person.save((err) => {
        if(!err){
            res.json({"status":"SUCCESS!!"})
        }
        else{
            res.status(500).json({"err":err})
        }
    });
})

//id ye göre personal veren 
app.get('/api/personals/:id',(req,res) => {
    Personal.findById(req.params.id,(err,document) => {
        if(!err){
            res.json(document);
        }
    })
})

//get sonrası food listeleme
app.get('/api/foods',(req,res) => { 
    Food.find({isdeleted:false},(err,document) => {
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
        path:req.body.path,
        cooktime:req.body.cooktime,
        size:req.body.size,
        preptime:req.body.preptime,
        recipe:req.body.recipe
    });

    food.save((err) => {
        if(!err){
            res.json({"status":"SUCCESS!!"})
        }
        else{
            res.status(500).send(err);
        }
    })
});

//id ye göre 1 adet food veren api ucu
app.get('/api/foods/:id',(req,res) => {

    Food.findById(req.params.id,(err,document) => {
        if(!err){
            res.json(document);
        } 
        else{
            res.status(500).json(err);
        }
       
    })
})

//id ye göre silme
app.post('/api/foods/delete',(req,res)=>{
    console.log(req.body);
    var id = req.body.id;

    Food.findById(id,(err,document)=>{
        if(!err){
            document.isdeleted = true;
            document.save((err)=>{
                if(!err){
                    res.json({"status":"ok"});
                }
                else{
                    res.status(500).json(err);

                }
            })
        }
        else{
            res.status(500).json(err);
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

});


app.post('/api/contact',(req,res) => {
    mailOptions.subject = "Konu: " + req.body.subject;
    mailOptions.text = req.body.username + " isimli kişiden bir mesajınız var. Mesajı atan kullanıcı emaili: " + req.body.email + ". Mesaj içeriği: " + req.body.content; 

    SendEMail(mailOptions);

    res.json({message:"OK!"});

})

app.listen(3000);



var mailOptions = {
    from: 'bilgebatman19@gmail.com',
    to: 'yildiz.cagatay@hotmail.com',
    subject: '',
    text: ''
  };


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bilgebatman19@gmail.com',
      pass: 'Superman!35'
    }
  });
  

  function SendEMail(mailOptions){
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }