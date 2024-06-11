import express  from "express"
import  dotenv  from "dotenv"
import {connectDB} from "./config/db.js"
dotenv.config();
const app=express()
import cookieParser from "cookie-parser"

//cookies and filemiddleware
app.use(cookieParser())

connectDB();

// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import contriRoutes from "./routes/contriRoutes.js"

// // router middleware
app.use("/api/v1",contriRoutes);

app.use('/',(req,res)=>{
    res.send("Welcome to the Project")
})


export default app;