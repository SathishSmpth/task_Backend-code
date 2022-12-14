

var express = require('express');
var userList = require('../module/schema')
var router = express.Router();

router.get('/getuser/:userId', async (req,res)=>{
    try{
        const users = await userList.findById(req.params.userId)
        res.json({
            data:users,
            status:200
        })
    }catch(e){
        res.json({status:404})
    }
})



module.exports = router;