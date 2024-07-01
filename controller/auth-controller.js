//roter se ane wale request co control karna

// const exprees = require("express");
// const app = exprees()

const home = async (req, res) => {
    try {
        res.status(200).send("Welcom to my page using router");
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        res.status(200).send("welcome to register page")
    } catch (error) {
        res.status(400).send({msg: "page not found"})
    }
}

module.exports = { home, register }