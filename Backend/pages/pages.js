
const User = require("../models/User")

const registerUser = (async(req, res)=>{

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        
        console.log(user)
        
    } catch (error) {
        res.status(500).send("Enter proper credentials please")
    }

});

const loginUser = (async(req, res)=>{

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if(user){
        console.log(user)
        return res.status(200).json({user})
    }

    else{
        res.status(500).send("User does not exist")
    }

})

const addMovies = (async(req, res)=>{

    const newMovies = req.body
    const {email:userEmail} = req.body


    const user = await User.findOneAndUpdate({email:userEmail},
        {
            $push:{
                favMovies: newMovies
            }
        }
        )

        
        
    })


const getMovies = ( async(req, res)=>{
    const {email:userEmail} = req.params
    
    const user = await User.findOne({email:userEmail})


    if(user){
        res.status(200).json({user})
    }
    
    else{
        res.status(400).send("Some error occured")
    }
})

module.exports = {
    registerUser,
    loginUser,
    addMovies,
    getMovies
}