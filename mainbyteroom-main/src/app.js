const express=require("express")
const app=express()
const path=require("path")
const Register = require("./registers")
const fs = require("fs") 
// const collection = require("./mongodb")
require("./mongodb")
// const { connectToDatabase } = require("./mongodb")
const port = process.env.PORT || 8081
const static_path = path.join(__dirname, "../public");
const index_path = path.join(__dirname, "../public/index.html");
const {json} = require("express")
const {error} = require("console")


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.send("Hello, World!")
})

app.get("/register", (req, res) =>{
    res.render("register");
})

app.post("/register", async (req, res) =>{
    try {
        
        const registerUser = new Register({
            username: req.body.username,
            password: req.body.password
        })

        const registered = await registerUser.save()

       fs.readFile(index_path, "utf8", (err, data) => {
            if (err) {
                res.status(500).send(err)
            }
            else{
                res.status(201).send(data)
            }
        });


        // console.log(req.body.username)
        // console.log(req.body.password)
        // res.send(req.body.username)
        // res.send(req.body.password)

    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/login", async (req, res) =>{
    try {
        const checkUser = await Register.findOne({username: req.body.username})
        if (!checkUser){
            res.status(404).send("User doesn't exist")
        }
        if (checkUser.password == req.body.password) {
                    res.redirect("https://serverbyteroom.netlify.app/");

        }
        else{
            res.send("Wrong password ! Please try again.")
        }
    } catch (error) {
        res.send(error.message)
    }
})



app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
