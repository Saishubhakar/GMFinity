const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const cors = require("cors")
const DBUrl = "mongodb+srv://Project:gmfinity@cluster0.eqfu2or.mongodb.net/GMFINITYUSERS";

const Routes = require("./routes/Routes");

app.use(express.json());
app.use(cors());
    

app.use("/api/v1", Routes)


const start = async ()=>{

    try {

        app.listen(5000, ()=>{
            console.log("Listening on port 5000")
        });

        connectDB(DBUrl)
        console.log("Database connected")
        
    } catch (error) {
        console.log("Something went wrong")
    }
}

start();