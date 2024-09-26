const Router = require('express')
const router = new Router()

router.post('/signup')
router.post('/signin')
router.post('/auth')

module.exports = router