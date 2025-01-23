import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3001;

//connectDB()
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log('connected to mongodb'))
    .catch((err) => console.error("Mongodb connection error: ", err))

//middlewares
app.use(express.json())
app.use(cors());

//contact schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
})
const contactForm = mongoose.model('contactForm', contactSchema)

app.get('/', (req, res) => {
    res.send("api working");
})

app.post("/api/contact", async (req, res) => {
    const {name, email, message} = req.body;
    try {
        const contactData = new contactForm({
            name,
            email,
            message,
        })
        await contactData.save();
        res.status(201).json({success:true, message:"message send"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message:error.message})
    }
})

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})
