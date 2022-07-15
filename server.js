const express=require("express")
const bodyparser=require("body-parser")

const app=express()

app.set('view engine', 'ejs')

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var name ;
var email;


app.get('/', function(req,res){
    res.render("index")
})

app.get("/home", function(req,res){
    res.render("home")
})
app.get("/index", function(req,res){
    res.render("home")
})
let id=0;
app.get("/dashboard", function(req,res){
    

    let rq=req.query.id;
   
    if(rq){
        id=id+parseInt(rq)
           console.log("True")
       }

       res.render("dashboard",{cid:id})

    console.log(id)
    
})

app.get("/scanner", function(req,res){
    
    res.render("scanner")
})

app.get("/error", function(req,res){
    
    res.render("error")
})

// app.get()


app.post('/', function (req, res) {
   name = req.body.name;
   email = req.body.email;
   console.log(name)
   res.redirect("/home")
});

const PORT=process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("server started on port 3000")
})