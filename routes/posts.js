var express = require('express')

var userData = require('../module/schema')

var router = express.Router()

router.post('/post', async(req,res)=>{
    try{
        const user = new userData(req.body)
        await user.save()
        res.json({
            status:200
        })
    }catch(e){
        return e;
    }

})

module.exports = router;