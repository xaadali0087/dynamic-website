const express=require("express");
const path=require("path");
require("./database/connection")
const app=express();
const port=process.env.PORT || 3000;
const hbs=require("hbs")
const User=require("./models/userschema");
const { urlencoded } = require("express");
//static path
const staticpath=path.join(__dirname, "../public")
const templatepath=path.join(__dirname, "../templates/views")
const partialspath=path.join(__dirname, "../templates/partials")




app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs")
app.set("views",templatepath)
hbs.registerPartials(partialspath)


app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/contact",async(req,res)=>{
    try {

    const userData=User(req.body);
    userData.save();
    res.status(201).render("index")
        
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(port,()=>{
    console.log(`server is running is port number ${port}`);
})