import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import sequelize from "./src/config/db.config.js"
import "./src/models/index.js"

dotenv.config();
const app = express()

app.use(cors())
app.use(express.json())

sequelize.sync({force: true}).then(() => {
    // console.log("Database connected")
})

app.get("/", (req, res) => {
    res.send("Server is running")
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})