const express=require('express');
const post = require('../models/post');

const router=express.Router();

router.get('/',async(req,res)=>{
    try{
const posts=await post.find();
res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});


router.get('/',(req,res)=>{
    res.send("Connected to posts");
});

router.post('/',(req,res)=>{
console.log(req.body);
});
router.post('/',async(req,res)=>{
    console.log(req.body);
    
try {
    const savedPost=await post.save();
    res.json(savedPost);
}catch(err){
    res.json({message:err});
}
});

router.delete('/:PostId',async(req,res)=>{
    try{
        removedPost=
        res.json(removedPost);
        }
        catch(err){
            res.json({message:err});
        }
    
});
module.exports=router;  