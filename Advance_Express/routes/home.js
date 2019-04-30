const express=require('express');
const router=express.Router();//working with router object instead of app

router.get('/', (req, res) => {
    res.send("hello from router home");
});

module.exports=router;
