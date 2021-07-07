const {Router} = require('express')
const Email = require('../models/Email')
const auth = require('../middlware/auth.middleware')

const router = Router()

router.post('/email', async(req,res)=>{
    try {
        const {email} = req.body
        const sendEmail = new Email({
            email
        })
        await sendEmail.save()
        res.status(201).json({messege:'frfr'})

    } catch (e) {
        res.status(500).json({messege:{e}})
    }
})

module.exports = router