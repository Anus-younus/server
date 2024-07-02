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
        console.log(req.body);
        res.status(200).json({message: req.body})
    } catch (error) {
        res.status(500).json("internal server error")
    }
}

module.exports = { home, register }