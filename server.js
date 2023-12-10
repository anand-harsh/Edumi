import app from "./app.js"
import { connectDB } from "./configs/Database.js"

connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on ${process.env.PORT}`)
})