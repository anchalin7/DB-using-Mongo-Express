const mongoose=require('mongoose');


const PostCRUD=mongoose.Schema({
    class:{
        type:Number,
        required:true
    },teacher:{
        type:String,
        required:true
    },
    student:{type:String,
        required:true

    }


});



module.exports=mongoose.model('posts',PostCRUD);
