import express from "express"
const app = express()

app.get("/users", (req, res) => {
    res.send("this is my page")


})

app.listen(3000, () => {
    console.log("server is running");
})