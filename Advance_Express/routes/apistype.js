const express=require('express');
const router=express.Router();//working with router object instead of app

// router.get('api/hello', (req, res) => {
router.get('/world', (req, res) => {
    res.send("hello from router");
});

module.exports=router;
