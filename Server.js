// nodemon or npm run start or nodemon


//importing exprees
const express = require("express")
// exprees function with empty argumment
const app = express()
//import router from auth-router
const router = require("./router/auth-router")


//router useage matlab mount karna router ko
app.use("/api/auth", router)
app.use("/api/auth/register", router)


//get http method agar koi page par visit karta to ap kia dekhan chate ho
// app.get("/", (req, res) => {
//     res.status(200).send("Welcom to my page");
// });


// app.get("/register", (req, res) => {
//     res.status(200).send("Welcom to register page");
// });



const PORT = 5000
//start server
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}` );
})