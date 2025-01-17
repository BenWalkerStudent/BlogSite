const express = require("express")

const router = express.Router();

const Post = require("../models/Post")

//homepage
router.get("/",async (req,res)=>{

    const locals = {
        title: "NodeJS Blog",
        description: "a Blog template application"
    }

    try {
        const data = await Post.find().sort({createdAt: "desc"})
        res.render("index", {locals, data})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;