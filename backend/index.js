import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./db/connect.js"
import MessageRouter from "./routes/Message.js"


// CONFIG ENV variables
dotenv.config();

const app = express();

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


//ROUTES
app.use("/api/messages",MessageRouter);

// CONSTANTS
const PORT = process.env.PORT || 4000;
const DBURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';


// CONNECT TO DB
connectDB(DBURI);


app.listen(PORT,()=>{
    console.log(`Server is running and listening on ${PORT}...`);
})


