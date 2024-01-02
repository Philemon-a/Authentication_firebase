const express = require('express');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} = require("firebase/auth");
const { auth } = require("./config")

const PORT = 3500;
const app = express();

app.use(express.json());
app.post('/signUp', async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await createUserWithEmailAndPassword(auth, email, password)
        if (data.user) res.json({message: "signUp sucessfull"})
   } catch (error) {
        console.log(error);
        res.json({ message: "Something went wrong" })
    }
})

app.post('/login', async (req,res) =>{
    const {email, password} = req.body;
    try {
        const data = await signInWithEmailAndPassword(auth, email, password)
        if (data.user) res.json({message: "login sucessfull"})

    } catch (error) {
        console.log(error);
        res.json({message: "Couldn't login"});
    }
});

app.post('/logout', async(req,res)=>{
    try {
        const data= await signOut(auth)
        res.json({message:"signout sucessfull"})
    } catch (error) {
        console.log(error);
        res.json({message:"Couldn't signout"});
        
    }
})


app.listen(4444, () => {
    console.log("Sever running at 4444")
})